import { createInkField } from './inkField';

let field, surface;
self.onmessage = ({ data }) => {
  if (data.type === 'setup') {
    surface = new OffscreenCanvas(data.width, data.height);
    field = createInkField(surface, data);
    if (!field) throw new Error('The offscreen 2D context is unavailable');
  } else if (data.type === 'frame' && field) {
    for (const drop of data.drops) field.deposit(...drop);
    field.draw(data.step, data.elapsed, data.development);
    const bitmap = surface.transferToImageBitmap();
    self.postMessage({ bitmap, revision: data.revision }, [bitmap]);
  }
};
