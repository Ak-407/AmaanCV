import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { createInkRenderer } from '../../effects/inkRenderer';
import SmokeSurface from './SmokeSurface';

jest.mock('../../effects/inkRenderer', () => ({ createInkRenderer: jest.fn() }));

test('switching themes repaints the same portrait without restarting its reveal', () => {
  const renderer = { resize: jest.fn(), setTheme: jest.fn(), dispose: jest.fn() };
  createInkRenderer.mockReturnValue(renderer);
  const previousMedia = window.matchMedia;
  const previousObserver = window.IntersectionObserver;
  const previousAct = global.IS_REACT_ACT_ENVIRONMENT;
  global.IS_REACT_ACT_ENVIRONMENT = true;
  window.matchMedia = () => ({ matches: false });
  window.IntersectionObserver = class {
    constructor(notify) { this.notify = notify; }
    observe() { this.notify([{ isIntersecting: true }]); }
    disconnect() {}
  };
  const root = createRoot(document.createElement('div'));
  const render = theme => act(() => root.render(<SmokeSurface enabled portrait theme={theme} />));
  try {
    render('dark');
    render('light');
    render('dark');
    expect(renderer.setTheme.mock.calls).toEqual([['light'], ['dark']]);
    expect(createInkRenderer).toHaveBeenCalledTimes(1);
    expect(renderer.resize).toHaveBeenCalledTimes(1);
    expect(renderer.dispose).not.toHaveBeenCalled();
  } finally {
    act(() => root.unmount());
    window.matchMedia = previousMedia;
    window.IntersectionObserver = previousObserver;
    global.IS_REACT_ACT_ENVIRONMENT = previousAct;
  }
});
