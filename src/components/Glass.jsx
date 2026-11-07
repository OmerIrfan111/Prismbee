import { useRef, useCallback } from 'react';

/**
 * Liquid-glass helpers.
 *
 * GlassCard wraps any panel/card and adds:
 *  - cursor-following specular sheen (via --sheen-x / --sheen-y CSS vars)
 *  - subtle 3D tilt on hover (pointer: fine devices only)
 *
 * Variants:
 *  - "full": frosted translucent panel (nav, pills, footer panel)
 *  - "dark": frosted dark translucent panel (footer panel)
 *  - "edge": keeps the card's own background, adds glass edge border,
 *            inner highlight and sheen on top (service/package/CTA cards)
 *
 * Motion is skipped on touch devices and when the user prefers reduced
 * motion. No animation libraries needed, vanilla pointer events + CSS.
 */

function motionAllowed() {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export function useSheen() {
  const ref = useRef(null);

  const onPointerMove = useCallback((e) => {
    const el = ref.current;
    if (!el || !motionAllowed()) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--sheen-x', `${x.toFixed(1)}%`);
    el.style.setProperty('--sheen-y', `${y.toFixed(1)}%`);
    const rotateX = ((y - 50) / 50) * -4;
    const rotateY = ((x - 50) / 50) * 4;
    el.classList.add('glass-tilting');
    el.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  }, []);

  const onPointerLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = '';
    // keep the class briefly so the snap-back is eased, then drop it
    window.setTimeout(() => {
      if (el.style.transform === '') el.classList.remove('glass-tilting');
    }, 160);
  }, []);

  return { ref, onPointerMove, onPointerLeave };
}

const VARIANT_CLASS = {
  full: 'glass',
  dark: 'glass-dark',
  edge: 'glass-edge'
};

export default function GlassCard({
  children,
  className = '',
  variant = 'edge',
  sheen = true,
  tilt = true,
  ...rest
}) {
  const { ref, onPointerMove, onPointerLeave } = useSheen();
  const interactive = sheen || tilt;

  return (
    <div
      ref={ref}
      onPointerMove={interactive ? onPointerMove : undefined}
      onPointerLeave={interactive ? onPointerLeave : undefined}
      className={`${VARIANT_CLASS[variant] || VARIANT_CLASS.edge} ${
        sheen ? 'glass-sheen' : ''
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
