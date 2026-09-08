import type { APIRoute } from 'astro';

// Dev-only sink for the Lens's first-paint poster. Visiting /lab?poster
// renders the territory view and POSTs the canvas here as a JPEG, which
// lands at public/lab/poster.jpg. Returns 404 in production — the deployed
// site only ever serves the committed poster.
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  if (!import.meta.env.DEV) return new Response('poster capture is dev-only', { status: 404 });
  const { writeFile } = await import('node:fs/promises');
  const buf = new Uint8Array(await request.arrayBuffer());
  if (buf.length < 10_000) return new Response('suspiciously small capture, refused', { status: 400 });
  await writeFile(new URL('../../../public/lab/poster.jpg', import.meta.url), buf);
  return new Response(`ok: ${buf.length} bytes`);
};
