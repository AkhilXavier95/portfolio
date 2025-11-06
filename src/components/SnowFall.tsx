"use client";

import React, { useEffect, useRef } from "react";

const Snowfall = ({ snowflakeCount = 50, speed = 1 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // TypeScript doesn't track null checks in closures, so we use non-null assertions
    const canvasEl: HTMLCanvasElement = canvas;
    const ctx2d: CanvasRenderingContext2D = ctx;

    let animationFrameId: number | undefined;
    const snowflakes: Snowflake[] = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvasEl.width = window.innerWidth;
      canvasEl.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Snowflake class
    class Snowflake {
      x: number;
      y: number;
      radius: number;
      speed: number;
      wind: number;
      opacity: number;

      constructor() {
        this.x = 0;
        this.y = 0;
        this.radius = 0;
        this.speed = 0;
        this.wind = 0;
        this.opacity = 0;
        this.reset();
        this.y = Math.random() * canvasEl.height;
      }

      reset() {
        this.x = Math.random() * canvasEl.width;
        this.y = -10;
        this.radius = Math.random() * 3 + 1;
        this.speed = Math.random() * 1 + 0.5;
        this.wind = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.6 + 0.4;
      }

      update() {
        this.y += this.speed * speed;
        this.x += this.wind;

        // Reset when snowflake goes off screen
        if (this.y > canvasEl.height) {
          this.reset();
        }
        if (this.x > canvasEl.width || this.x < 0) {
          this.x = Math.random() * canvasEl.width;
        }
      }

      draw() {
        ctx2d.save();
        ctx2d.translate(this.x, this.y);
        ctx2d.rotate((this.x * 0.01) % (Math.PI * 2)); // Slow rotation based on position
        ctx2d.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx2d.lineWidth = 1;
        ctx2d.lineCap = "round";

        const size = this.radius * 2;
        const branches = 6; // 6 arms for a snowflake

        // Draw snowflake with 6 arms
        for (let i = 0; i < branches; i++) {
          ctx2d.save();
          ctx2d.rotate((Math.PI * 2 * i) / branches);

          // Main arm
          ctx2d.beginPath();
          ctx2d.moveTo(0, 0);
          ctx2d.lineTo(0, size);
          ctx2d.stroke();

          // Side branches on each arm
          for (let j = 1; j <= 2; j++) {
            const branchPos = (size * j) / 3;
            const branchLength = size * 0.3;

            // Left branch
            ctx2d.beginPath();
            ctx2d.moveTo(0, branchPos);
            ctx2d.lineTo(-branchLength * 0.5, branchPos + branchLength * 0.5);
            ctx2d.stroke();

            // Right branch
            ctx2d.beginPath();
            ctx2d.moveTo(0, branchPos);
            ctx2d.lineTo(branchLength * 0.5, branchPos + branchLength * 0.5);
            ctx2d.stroke();
          }

          ctx2d.restore();
        }

        // Center dot
        ctx2d.beginPath();
        ctx2d.arc(0, 0, this.radius * 0.3, 0, Math.PI * 2);
        ctx2d.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx2d.fill();

        ctx2d.restore();
      }
    }

    // Initialize snowflakes
    for (let i = 0; i < snowflakeCount; i++) {
      snowflakes.push(new Snowflake());
    }

    // Animation loop
    const animate = () => {
      ctx2d.clearRect(0, 0, canvasEl.width, canvasEl.height);

      snowflakes.forEach((snowflake) => {
        snowflake.update();
        snowflake.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameId !== undefined) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [snowflakeCount, speed]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999
      }}
    />
  );
};

export default Snowfall;
