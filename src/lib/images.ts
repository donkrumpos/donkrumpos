// Width and height for an image in public/images/, from the manifest that
// scripts/optimize-images.mjs writes. Spread onto an <img> so the page holds
// the image's space before it loads: <img src={src} {...imageSize(src)} />.
import sizes from '../data/image-sizes.json';

export function imageSize(src: string): { width?: number; height?: number } {
  const size = (sizes as Record<string, number[]>)[src];
  return size ? { width: size[0], height: size[1] } : {};
}
