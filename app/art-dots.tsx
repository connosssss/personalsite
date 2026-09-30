"use client";

import { useEffect, useRef } from "react";

// 3D Simplex Noise implementation (Stefan Gustavson / Perlin)
function createNoise3D() {
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;

  let s = 123456789;
  function lcg() {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  }

  for (let i = 255; i > 0; i--) {
    const r = Math.floor(lcg() * (i + 1));
    const t = p[i];
    p[i] = p[r];
    p[r] = t;
  }

  const perm = new Uint8Array(512);
  const permMod12 = new Uint8Array(512);
  for (let i = 0; i < 512; i++) {
    perm[i] = p[i & 255];
    permMod12[i] = perm[i] % 12;
  }

  const F3 = 1.0 / 3.0;
  const G3 = 1.0 / 6.0;

  const grad3 = new Float32Array([
    1, 1, 0,  -1, 1, 0,   1, -1, 0,  -1, -1, 0,
    1, 0, 1,  -1, 0, 1,   1, 0, -1,  -1, 0, -1,
    0, 1, 1,   0, -1, 1,  0, 1, -1,   0, -1, -1,
  ]);

  return function noise3D(xin: number, yin: number, zin: number): number {
    let n0 = 0;
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;

    const s = (xin + yin + zin) * F3;
    const i = Math.floor(xin + s);
    const j = Math.floor(yin + s);
    const k = Math.floor(zin + s);

    const t = (i + j + k) * G3;
    const X0 = i - t;
    const Y0 = j - t;
    const Z0 = k - t;

    const x0 = xin - X0;
    const y0 = yin - Y0;
    const z0 = zin - Z0;

    let i1: number;
    let j1: number;
    let k1: number;
    let i2: number;
    let j2: number;
    let k2: number;

    if (x0 >= y0) {
      if (y0 >= z0) {
        i1 = 1; j1 = 0; k1 = 0;
        i2 = 1; j2 = 1; k2 = 0;
      } else if (x0 >= z0) {
        i1 = 1; j1 = 0; k1 = 0;
        i2 = 1; j2 = 0; k2 = 1;
      } else {
        i1 = 0; j1 = 0; k1 = 1;
        i2 = 1; j2 = 0; k2 = 1;
      }
    } else {
      if (y0 < z0) {
        i1 = 0; j1 = 0; k1 = 1;
        i2 = 0; j2 = 1; k2 = 1;
      } else if (x0 < z0) {
        i1 = 0; j1 = 1; k1 = 0;
        i2 = 0; j2 = 1; k2 = 1;
      } else {
        i1 = 0; j1 = 1; k1 = 0;
        i2 = 1; j2 = 1; k2 = 0;
      }
    }

    const x1 = x0 - i1 + G3;
    const y1 = y0 - j1 + G3;
    const z1 = z0 - k1 + G3;

    const x2 = x0 - i2 + 2.0 * G3;
    const y2 = y0 - j2 + 2.0 * G3;
    const z2 = z0 - k2 + 2.0 * G3;

    const x3 = x0 - 1.0 + 3.0 * G3;
    const y3 = y0 - 1.0 + 3.0 * G3;
    const z3 = z0 - 1.0 + 3.0 * G3;

    const ii = i & 255;
    const jj = j & 255;
    const kk = k & 255;

    let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
    if (t0 > 0) {
      const gi0 = permMod12[ii + perm[jj + perm[kk]]] * 3;
      t0 *= t0;
      n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0 + grad3[gi0 + 2] * z0);
    }

    let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
    if (t1 > 0) {
      const gi1 = permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]] * 3;
      t1 *= t1;
      n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1 + grad3[gi1 + 2] * z1);
    }

    let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
    if (t2 > 0) {
      const gi2 = permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]] * 3;
      t2 *= t2;
      n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2 + grad3[gi2 + 2] * z2);
    }

    let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
    if (t3 > 0) {
      const gi3 = permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]] * 3;
      t3 *= t3;
      n3 = t3 * t3 * (grad3[gi3] * x3 + grad3[gi3 + 1] * y3 + grad3[gi3 + 2] * z3);
    }

    return 32.0 * (n0 + n1 + n2 + n3);
  };
}

interface Point {
  x: number;
  y: number;
  noiseX: number; // Pre-computed x / SCALE
  noiseY: number; // Pre-computed y / SCALE
  opacity: number;
}

export default function ArtDots({ fadeHeight = 384 }: { fadeHeight?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SCALE = 200;
    const INV_SCALE = 1 / SCALE;
    const LENGTH = 5;
    const SPACING = 24;

    const noise3d = createNoise3D();

    const existingPoints = new Set<number>();
    const points: Point[] = [];

    let width = 0;
    let height = 0;
    let dpr = 1;
    let isVisible = true;

  

    
    function packCoord(x: number, y: number): number {
      return ((x + 32768) << 16) | ((y + 32768) & 0xffff);
    }

    function addPoints(w: number, h: number) {
      for (let x = -SPACING / 2; x < w + SPACING; x += SPACING) {
        for (let y = -SPACING / 2; y < h + SPACING; y += SPACING) {
          const id = packCoord(x, y);
          if (existingPoints.has(id)) continue;
          existingPoints.add(id);

          const opacity = Math.random() * 0.45 + 0.6;
          points.push({ x, y, noiseX: x * INV_SCALE, noiseY: y * INV_SCALE, opacity });
        }
      }
    }

    function updateSize() {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = window.devicePixelRatio || 1;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      addPoints(width, height);
    }

    updateSize();

    let animationFrameId: number;

    const NUM_BUCKETS = 10;
    const bucketX: number[][] = Array.from({ length: NUM_BUCKETS }, () => []);
    const bucketY: number[][] = Array.from({ length: NUM_BUCKETS }, () => []);

    function render(timestamp: number) {
      animationFrameId = requestAnimationFrame(render);

      if (!ctx || !isVisible) return;

      const t = timestamp * 0.0001; 

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      for (let b = 0; b < NUM_BUCKETS; b++) {
        bucketX[b].length = 0;
        bucketY[b].length = 0;
      }

      const bottomFadeStart = height - fadeHeight;
      const invFadeHeight = fadeHeight > 0 ? 1 / fadeHeight : 0;
      const t2 = t * 2;

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        if (p.x > width + SPACING || p.y > height + SPACING) continue;

        const { x, y, noiseX, noiseY, opacity } = p;
        const rad = (noise3d(noiseX, noiseY, t) - 0.5) * 2 * Math.PI;
        const len = (noise3d(noiseX, noiseY, t2) + 0.5) * LENGTH;
        const nx = x + Math.cos(rad) * len;
        const ny = y + Math.sin(rad) * len;

        // Smooth fade out over fadeHeight as it approaches the bottom
        let fade = 1;
        if (fadeHeight > 0 && ny > bottomFadeStart) {
          fade = Math.max(0, (height - ny) * invFadeHeight);
          if (fade <= 0.005) continue;
        }

        const alpha = (Math.abs(Math.cos(rad)) * 0.8 + 0.2) * opacity * fade;
        const b = Math.min(NUM_BUCKETS - 1, Math.max(0, (alpha * NUM_BUCKETS) | 0));

        bucketX[b].push(nx);
        bucketY[b].push(ny);
      }

      for (let b = 0; b < NUM_BUCKETS; b++) {
        const xs = bucketX[b];
        if (xs.length === 0) continue;
        const ys = bucketY[b];

        // Soft, elegant dot visibility on the dark background
        const alpha = ((b + 0.5) / NUM_BUCKETS) * 0.32;
        ctx.fillStyle = `rgba(200, 215, 235, ${alpha.toFixed(3)})`;

        ctx.beginPath();
        for (let j = 0; j < xs.length; j++) {
          ctx.moveTo(xs[j] + 1, ys[j]);
          ctx.arc(xs[j], ys[j], 1, 0, Math.PI * 2);
        }
        ctx.fill();
      }

      ctx.restore();
    }

    animationFrameId = requestAnimationFrame(render);

    // Pause animation when the section is scrolled out of view
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          isVisible = entry.isIntersecting;
        }
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(container);

    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [fadeHeight]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-[1] overflow-hidden"
      style={{
        maskImage:
          fadeHeight > 0
            ? `linear-gradient(to bottom, black calc(100% - ${fadeHeight}px), transparent 100%)`
            : undefined,
        WebkitMaskImage:
          fadeHeight > 0
            ? `linear-gradient(to bottom, black calc(100% - ${fadeHeight}px), transparent 100%)`
            : undefined,
      }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block w-full h-full" style={{ willChange: "contents" }} />
    </div>
  );
}
