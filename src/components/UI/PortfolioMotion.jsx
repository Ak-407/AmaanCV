import React, { useEffect, useRef, useState } from 'react';

const introKey = 'amaan.portfolio.intro.v2';
const motionKey = 'amaan.portfolio.pause';
const motionQuery = '(prefers-reduced-motion: reduce)';

function saved(storage, key) {
  try { return window[storage].getItem(key) === 'yes'; }
  catch { return false; }
}

function remember(storage, key, value) {
  try { window[storage].setItem(key, value ? 'yes' : 'no'); }
  catch { /* Storage is optional in private browsing. */ }
}

export function useMotionSettings() {
  const [reduced, setReduced] = useState(() => window.matchMedia(motionQuery).matches);
  const [paused, setPaused] = useState(() => saved('localStorage', motionKey));
  const enabled = !reduced && !paused;

  useEffect(() => {
    const media = window.matchMedia(motionQuery);
    const update = () => setReduced(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.motion = enabled ? 'on' : 'off';
    return () => { delete document.documentElement.dataset.motion; };
  }, [enabled]);

  function toggle() {
    remember('localStorage', motionKey, !paused);
    setPaused(!paused);
  }
  return { enabled, reduced, toggle };
}

export function firstVisit() {
  return !window.location.hash && !saved('sessionStorage', introKey);
}

export function rememberIntro() {
  remember('sessionStorage', introKey, true);
}

// The first visit waits for the two visual assets that make up the cover.
// A slow or failed request always yields to the page.
export function OpeningSequence({ onFinish }) {
  const dialog = useRef(null);
  const [readyAssets, setReadyAssets] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const node = dialog.current;
    node.showModal();
    let active = true;
    let exitTimer;
    const start = performance.now();
    const picture = document.querySelector('.portrait-photo');
    const assets = [document.fonts?.ready, picture?.decode?.()];
    const settled = assets.map(asset => Promise.resolve(asset).catch(() => {}).then(() => {
      if (active) setReadyAssets(count => count + 1);
    }));
    const deadline = window.setTimeout(() => setLeaving(true), 1600);
    Promise.all(settled).then(() => {
      if (active) exitTimer = window.setTimeout(() => setLeaving(true), Math.max(0, 660 - (performance.now() - start)));
    });
    return () => {
      active = false;
      clearTimeout(deadline);
      clearTimeout(exitTimer);
      node.close();
    };
  }, []);

  useEffect(() => {
    if (!leaving) return;
    const timer = window.setTimeout(onFinish, 450);
    return () => clearTimeout(timer);
  }, [leaving, onFinish]);

  return <dialog ref={dialog} className={'opening' + (leaving ? ' leaving' : '')}
    aria-label="Portfolio introduction" onCancel={event => { event.preventDefault(); onFinish(); }}>
    <div className="opening-sheet sheet-top" aria-hidden="true" />
    <div className="opening-sheet sheet-bottom" aria-hidden="true" />
    <div className="opening-inner">
      <div className="opening-signature"><img src={process.env.PUBLIC_URL + '/imeges/logo.png'} alt="" width="48" height="48" /><span>Amaan Iqbal</span></div>
      <div className="opening-title" aria-hidden="true"><span>Port</span><em>folio.</em></div>
      <div className="opening-progress" aria-hidden="true">
        <span className="opening-meter"><i style={{ transform: 'scaleX(' + (readyAssets + 1) / 3 + ')' }} /></span>
        <span>{Math.round((readyAssets + 1) * 100 / 3)}%</span>
      </div>
      <button type="button" onClick={onFinish}>Skip intro <Arrow /></button>
    </div>
  </dialog>;
}

export function Arrow({ direction = 'out' }) {
  return <i aria-hidden="true" className={'arrow arrow-' + direction} />;
}

export function RollingLabel({ children }) {
  return <span className="roll-window"><span className="roll-inner">
    <span>{children}</span><span aria-hidden="true">{children}</span>
  </span></span>;
}

// Move the artwork without replacing the native pointer or moving its hit area.
export function followPointer(event) {
  const stage = event.currentTarget;
  if (event.pointerType !== 'mouse' || document.documentElement.dataset.motion !== 'on') return;
  const box = stage.getBoundingClientRect();
  stage.style.setProperty('--pointer-x', ((event.clientX - box.left) / box.width - 0.5).toFixed(3));
  stage.style.setProperty('--pointer-y', ((event.clientY - box.top) / box.height - 0.5).toFixed(3));
}

export function resetPointer(event) {
  event.currentTarget.style.removeProperty('--pointer-x');
  event.currentTarget.style.removeProperty('--pointer-y');
}
