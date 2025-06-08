'use client';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useMemo, useCallback } from 'react';
import { createNoise3D } from 'simplex-noise';
import { motion } from 'motion/react';
import { useDeviceResponsiveContext } from '@/components/DeviceResponsiveContext';

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}

export const Vortex = (props: VortexProps) => {
  const { isMobile, isTablet, isDesktop } = useDeviceResponsiveContext();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tick = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const noise3D = useMemo(() => createNoise3D(), []);
  const particleProps = useRef(new Float32Array(0));
  const center: [number, number] = useMemo(() => [0, 0], []);

  const effectiveParticleCount = useMemo(() => {
    if (props.particleCount !== undefined) return props.particleCount;
    if (isMobile) return 35;
    if (isTablet) return 200;
    if (isDesktop) return 550;
    return 700;
  }, [props.particleCount, isMobile, isTablet, isDesktop]);

  const particlePropCount = 9;
  const particlePropsLength = effectiveParticleCount * particlePropCount;

  const rangeY = props.rangeY || 100;
  const baseTTL = 50;
  const rangeTTL = 150;
  const baseSpeed = props.baseSpeed || 0.0;
  const rangeSpeed = props.rangeSpeed || 1.5;
  const baseRadius = props.baseRadius || 1;
  const rangeRadius = props.rangeRadius || 2;
  const baseHue = props.baseHue || 220;
  const rangeHue = 100;
  const noiseSteps = 3;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;
  const backgroundColor = props.backgroundColor || '#000000';

  const TAU: number = useMemo(() => 2 * Math.PI, []);
  const rand = useCallback((n: number): number => n * Math.random(), []);
  const fadeInOut = useCallback((t: number, m: number): number => {
    const hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  }, []);
  const lerp = useCallback((n1: number, n2: number, speed: number): number => (1 - speed) * n1 + speed * n2, []);

  const initParticle = useCallback(
    (i: number) => {
      const randRange = (n: number): number => n - rand(2 * n);
      const canvas = canvasRef.current;
      if (!canvas) return;

      const x = rand(canvas.width);
      const y = center[1] + randRange(rangeY);
      const vx = 0;
      const vy = 0;
      const life = 0;
      const ttl = baseTTL + rand(rangeTTL);
      const speed = baseSpeed + rand(rangeSpeed);
      const radius = baseRadius + rand(rangeRadius);
      const hue = baseHue + rand(rangeHue);

      // Ensure particleProps.current has enough space before setting
      if (particleProps.current.length < i + particlePropCount) {
        // This condition should ideally not be met if particlePropsLength is correctly calculated initially
        // and particleProps.current is properly re-initialized when needed.
        // Added for robustness, but if it triggers, it might indicate an issue with initParticles loop logic or particlePropsLength calculation.
        console.warn('ParticleProps array too small, re-initializing.');
        particleProps.current = new Float32Array(particlePropsLength);
      }
      particleProps.current.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
    },
    [
      baseHue,
      baseRadius,
      baseSpeed,
      center,
      rand,
      rangeRadius,
      rangeSpeed,
      rangeY,
      rangeTTL,
      baseTTL,
      particlePropCount,
      particlePropsLength,
    ],
  );

  // --- Drawing and Updating ---
  const checkBounds = useCallback((x: number, y: number, canvas: HTMLCanvasElement) => {
    return x > canvas.width || x < 0 || y > canvas.height || y < 0;
  }, []);

  const drawParticle = useCallback(
    (
      x: number,
      y: number,
      x2: number,
      y2: number,
      life: number,
      ttl: number,
      radius: number,
      hue: number,
      ctx: CanvasRenderingContext2D,
    ) => {
      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineWidth = radius;
      ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    },
    [fadeInOut],
  );

  const updateParticle = useCallback(
    (i: number, ctx: CanvasRenderingContext2D) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const i2 = 1 + i,
        i3 = 2 + i,
        i4 = 3 + i,
        i5 = 4 + i,
        i6 = 5 + i,
        i7 = 6 + i,
        i8 = 7 + i,
        i9 = 8 + i;

      const x = particleProps.current[i];
      const y = particleProps.current[i2];
      const n = noise3D(x * xOff, y * yOff, tick.current * zOff) * noiseSteps * TAU;
      const vx = lerp(particleProps.current[i3], Math.cos(n), 0.5);
      const vy = lerp(particleProps.current[i4], Math.sin(n), 0.5);
      let life = particleProps.current[i5];
      const ttl = particleProps.current[i6];
      const speed = particleProps.current[i7];
      const x2 = x + vx * speed;
      const y2 = y + vy * speed;
      const radius = particleProps.current[i8];
      const hue = particleProps.current[i9];

      drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);

      life++;

      particleProps.current[i] = x2;
      particleProps.current[i2] = y2;
      particleProps.current[i3] = vx;
      particleProps.current[i4] = vy;
      particleProps.current[i5] = life;

      if (checkBounds(x, y, canvas) || life > ttl) initParticle(i);
    },
    [checkBounds, drawParticle, initParticle, lerp, noise3D, noiseSteps, TAU],
  );

  const renderGlow = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.filter = 'blur(8px) brightness(200%)';
    ctx.globalCompositeOperation = 'lighter';
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();

    ctx.save();
    ctx.filter = 'blur(4px) brightness(200%)';
    ctx.globalCompositeOperation = 'lighter';
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  }, []);

  const renderToScreen = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  }, []);

  const draw = useCallback(
    (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
      const drawParticles = () => {
        for (let i = 0; i < particlePropsLength; i += particlePropCount) {
          updateParticle(i, ctx);
        }
      };
      tick.current++;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawParticles(); // Call without passing ctx, as it's closed over
      renderGlow(canvas, ctx);
      renderToScreen(canvas, ctx);

      // Use a ref for animation frame ID to allow cancellation on unmount
      animationFrameRef.current = window.requestAnimationFrame(() => draw(canvas, ctx));
    },
    [backgroundColor, particlePropsLength, particlePropCount, updateParticle, renderGlow, renderToScreen],
  );

  // --- Main Effect Hook ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !container || !ctx) {
      console.warn('Canvas or container not found, or context not initialized.');
      return;
    }

    // Function to resize canvas based on container dimensions
    const resizeCanvas = () => {
      const { clientWidth, clientHeight } = container;
      canvas.width = clientWidth;
      canvas.height = clientHeight;

      // Update center based on new canvas dimensions
      center[0] = 0.5 * canvas.width;
      center[1] = 0.5 * canvas.height;

      // Re-initialize particles if canvas size changes significantly
      // or simply if size changes to ensure distribution
      initParticles(); // Re-initialize particles on resize
    };

    // --- Init Particles Function (internal to useEffect for clarity) ---
    const initParticles = () => {
      tick.current = 0;
      particleProps.current = new Float32Array(particlePropsLength); // Reallocate array based on new length
      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        initParticle(i);
      }
    };

    // --- Setup and Animation Start ---
    resizeCanvas(); // Initial size setup
    initParticles(); // Initial particle setup
    const startAnimation = () => {
      animationFrameRef.current = window.requestAnimationFrame(() => draw(canvas, ctx));
    };
    startAnimation();

    // --- ResizeObserver for Container ---
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === container) {
          resizeCanvas();
        }
      }
    });

    resizeObserver.observe(container);

    // --- Cleanup ---
    return () => {
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
      resizeObserver.disconnect();
    };
  }, [draw, center, initParticle, particlePropsLength, effectiveParticleCount, particlePropCount]);

  return (
    <div className={cn('relative h-full w-full', props.containerClassName)} ref={containerRef}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='absolute inset-0 z-0 bg-transparent'>
        <canvas ref={canvasRef} className='h-full w-full'></canvas>
      </motion.div>

      <div className={cn('absolute inset-0 z-20', props.className)}>{props.children}</div>
    </div>
  );
};
