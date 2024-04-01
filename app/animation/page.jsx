"use client"
import React, { useEffect, useRef } from 'react';
const FluidAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Check if window object is available (i.e., we are in the browser environment)
    if (typeof window !== 'undefined') {
      import('webgl-fluid').then(({ default: WebGLFluid }) => {
        const fluidAnimation = WebGLFluid(canvasRef.current, {
          IMMEDIATE: true,
          TRIGGER: 'hover',
          SIM_RESOLUTION: 128,
          DYE_RESOLUTION: 1024,
          CAPTURE_RESOLUTION: 512,
          DENSITY_DISSIPATION: 2,
          VELOCITY_DISSIPATION: 0.3,
          PRESSURE: 0.8,
          PRESSURE_ITERATIONS: 20,
          CURL: 30,
          SPLAT_RADIUS: 0.35,
          SPLAT_FORCE: 6000,
          SPLAT_COUNT: Number.parseInt(Math.random() * 20) + 5,
          SHADING: true,
          COLORFUL: true,
          COLOR_UPDATE_SPEED: 20,
          PAUSED: false,
          BACK_COLOR: { r: 4, g: 4, b: 2 },
          TRANSPARENT: true,
          BLOOM: false,
          BLOOM_ITERATIONS: 8,
          BLOOM_RESOLUTION: 256,
          BLOOM_INTENSITY: 0.8,
          BLOOM_THRESHOLD: 0.6,
          BLOOM_SOFT_KNEE: 0.7,
          SUNRAYS: true,
          SUNRAYS_RESOLUTION: 196,
          SUNRAYS_WEIGHT: 1.0,
        });

        return () => {
          fluidAnimation.destroy();
        };
      });
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',  inset:'0', maxHeight: '100vh',}}
    />
  );
};

export default FluidAnimation;
