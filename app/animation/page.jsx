"use client";
import React, { useEffect, useRef, useState } from 'react';

const FluidAnimation = () => {
  const canvasRef = useRef(null);
  const [fluidAnimation, setFluidAnimation] = useState(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    // Check if window object is available (i.e., we are in the browser environment)
    if (typeof window !== 'undefined') {
      import('webgl-fluid').then(({ default: WebGLFluid }) => {
        const fluid = WebGLFluid(canvasRef.current, {
          IMMEDIATE: true, // Initially set to true
          TRIGGER: 'hover', // Set trigger to hover
          SIM_RESOLUTION: 128,
          DYE_RESOLUTION: 1024,
          CAPTURE_RESOLUTION: 512,
          DENSITY_DISSIPATION: 2,
          VELOCITY_DISSIPATION: 0.3,
          PRESSURE: 0.8,
          PRESSURE_ITERATIONS: 10,
          CURL: 30,
          SPLAT_RADIUS: 0.15,
          SPLAT_FORCE: 4000,
          SPLAT_COUNT: Number.parseInt(Math.random() * 1) + 7,
          SHADING: true,
          COLORFUL: true,
          COLOR_UPDATE_SPEED: 50,
          PAUSED: false,
          BACK_COLOR: { r: 0, g: 0, b: 0 },
          TRANSPARENT: true,
          BLOOM: false,
          BLOOM_ITERATIONS: 2,
          BLOOM_RESOLUTION: 256,
          BLOOM_INTENSITY: 0.5,
          BLOOM_THRESHOLD: 0.6,
          BLOOM_SOFT_KNEE: 0.3,
          SUNRAYS: true,
          SUNRAYS_RESOLUTION: 196,
          SUNRAYS_WEIGHT: 1.0,
        });

        // Set the fluid animation instance
        setFluidAnimation(fluid);

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        return () => {
          // Remove scroll event listener
          window.removeEventListener('scroll', handleScroll);
          // Destroy fluid animation
          fluid.destroy();
        };
      });
    }
  }, []);

  const handleScroll = () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercentage >= 0 && !triggered) {
      // Reinitialize fluid animation with IMMEDIATE set to true
      if (typeof window !== 'undefined') {
        import('webgl-fluid').then(({ default: WebGLFluid }) => {
          const newFluidAnimation = WebGLFluid(canvasRef.current, {
            IMMEDIATE: true, // Initially set to true
            SIM_RESOLUTION: 256,
            DYE_RESOLUTION: 1024,
            CAPTURE_RESOLUTION: 512,
            DENSITY_DISSIPATION: 2,
            VELOCITY_DISSIPATION: 0.3,
            PRESSURE: 0.8,
            PRESSURE_ITERATIONS: 10,
            CURL: 30,
            SPLAT_RADIUS: 0.34,
            SPLAT_FORCE: 200,
            SPLAT_COUNT: Number.parseInt(Math.random() * 1) + 5,
            SHADING: false,
            COLORFUL: true,
            COLOR_UPDATE_SPEED: 20,
            PAUSED: false,
            BACK_COLOR: { r: 0, g: 0, b: 0 },
            TRANSPARENT: true,
            BLOOM: true,
            BLOOM_ITERATIONS: 2,
            BLOOM_RESOLUTION: 256,
            BLOOM_INTENSITY: 0.5,
            BLOOM_THRESHOLD: 0.6,
            BLOOM_SOFT_KNEE: 0.3,
            SUNRAYS: true,
            SUNRAYS_RESOLUTION: 64,
            SUNRAYS_WEIGHT: 1,
            // Include other options here if needed
          });

          // Destroy the previous animation
          fluidAnimation.destroy();
          // Set the new fluid animation instance
          setFluidAnimation(newFluidAnimation);
          setTriggered(true);
        });
      }
    } else if (scrollPercentage >= 20 && triggered) {
      // Reinitialize fluid animation with IMMEDIATE set to false
      if (typeof window !== 'undefined') {
        import('webgl-fluid').then(({ default: WebGLFluid }) => {
          const newFluidAnimation = WebGLFluid(canvasRef.current, {
            IMMEDIATE: false, // Initially set to false
            // Include other options here if needed
          });

          // Destroy the previous animation
          fluidAnimation.destroy();
          // Set the new fluid animation instance
          setFluidAnimation(newFluidAnimation);
          setTriggered(false);
        });
      }
    }
  };

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', inset: '0', maxHeight: '100vh' }}
    />
  );
};

export default FluidAnimation;
