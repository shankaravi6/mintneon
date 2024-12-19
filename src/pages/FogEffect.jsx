import React, { useEffect, useRef } from "react";

const FogEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Resize canvas to fit the screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Fog properties
    const fogParticles = [];
    const fogCount = 20; // Number of fog particles
    const fogColors = [
      "rgba(4, 243, 236, 0.25)", // First fog color
      "rgba(255, 77, 166, 0.35)", // Second fog color
    ];

    // Initialize fog particles
    for (let i = 0; i < fogCount; i++) {
      fogParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 100 + 150, // Size of particles
        speed: Math.random() * 0.5 + 0.2, // Speed of movement
        waveOffset: Math.random() * Math.PI * 2, // Starting wave offset
        waveAmplitude: Math.random() * 10 + 10, // Zigzag amplitude
        waveFrequency: Math.random() * 0.003 + 0.1, // Wave frequency
        color: fogColors[i % fogColors.length], // Alternate colors
      });
    }

    // Animation function
    const animateFog = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and move fog particles
      fogParticles.forEach((p) => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius
        );
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;

        // Move the particles in a zigzag motion
        p.x -= p.speed; // Horizontal movement
        p.y += Math.sin(p.waveOffset) * p.waveAmplitude; // Zigzag pattern

        // Update waveOffset
        p.waveOffset += p.waveFrequency;

        // Draw particle
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Wrap around edges
        if (p.x + p.radius < 0) p.x = canvas.width + p.radius; // Reset on left edge
        if (p.y - p.radius > canvas.height) p.y = -p.radius; // Reset on bottom edge
      });

      requestAnimationFrame(animateFog);
    };

    animateFog();

    // Adjust canvas size on window resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);

    return () => {
      // Cleanup event listener on unmount
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width="100%"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: "0", // Ensure canvas is behind content
      }}
    />
  );
};

export default FogEffect;
