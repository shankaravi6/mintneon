import React, { useEffect, useRef } from "react";
import "./RoadmapSection.css";
import { CrxFlex, CrxSubTitle, CrxSubTitle2, CrxSubTitleNor } from "../../components/styledcomponents/globalStyles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RoadmapSection = () => {
  const ballRef = useRef(null);
  const pathRef = useRef(null);
  const cardsRefs = useRef([]);

  useEffect(() => {
    const initAnimation = () => {
      if (!pathRef.current || !ballRef.current) return;

      const pathLength = pathRef.current.getTotalLength(); // Get total path length

      // GSAP animation for the ball following the path
      gsap.to(ballRef.current, {
        scrollTrigger: {
          trigger: ".roadmap-container",
          start: "top center",
          end: "bottom center",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress * pathLength;
            const point = pathRef.current.getPointAtLength(progress);
            ballRef.current.setAttribute("cx", point.x);
            ballRef.current.setAttribute("cy", point.y);

            // Check for card animations based on progress
            cardsRefs.current.forEach((card, index) => {
              const stopAt = (index + 1) / cardsRefs.current.length; // Define stops
              if (self.progress >= stopAt - 0.05 && self.progress <= stopAt + 0.05) {
                // Trigger animation for the card
                gsap.to(card, {
                  scale: 1.2,
                  opacity: 1,
                  duration: 0.2,
                  ease: "power2.out",
                });
              } else {
                // Reset card when out of range
                gsap.to(card, {
                  scale: 1,
                  opacity: 0.8,
                  duration: 0.5,
                  ease: "power2.in",
                });
              }
            });
          },
        },
      });
    };

    // Delay animation initialization
    requestAnimationFrame(() => {
      initAnimation();
      ScrollTrigger.refresh(); // Ensure ScrollTrigger recalculates positions
    });

    // Cleanup animations on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all active triggers
    };
  }, []);

  const timeline = [
    { id: 1, label: "Crx Wallet", description: "1st Quarter of 2025.", position: { x: 150, y: 380 } },
    { id: 2, label: "Crx Blockchain", description: "3rd Quarter of 2025.", position: { x: 400, y: 140 } },
    { id: 3, label: "DEZTA Social Media", description: "1st Quarter of 2026.", position: { x: 620, y: 490 } },
    { id: 4, label: "Crx Bank", description: "2nd Quarter of 2027", position: { x: 890, y: 190 } },
    { id: 5, label: "Crx Card", description: "4th Quarter of 2027", position: { x: 1100, y: 510 } },
    {
        id: 6,
        label: "Crx Exchange",
        description: "4th Quarter of 2028",
        position: { x: 1400, y: 220 },
    },
  ];

  return (
    <>
      <CrxFlex dir="column" gap="5px">
        <CrxSubTitle fs="5rem">Roadmap</CrxSubTitle>
      </CrxFlex>
      <div className="roadmap-container">
        <svg
          className="roadmap-svg"
          viewBox="0 0 900 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
            id="s-path"
            d="M0,0 C100,160 200,50 300,130 
               C400,210 500,70 600,150 
               C700,230 800,90 900,170"
            fill="none"
            stroke="url(#pipe-gradient)"
            strokeWidth="40"
            strokeLinecap="round"
          />

          <defs>
            <linearGradient id="pipe-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5abeec" />
              <stop offset="100%" stopColor="#fec5fb" />
            </linearGradient>
          </defs>

          <circle ref={ballRef} r="12" fill="url(#ball-gradient)" />

          <defs>
            <radialGradient id="ball-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00ffff" />
              <stop offset="100%" stopColor="rgba(255, 255, 255)" />
            </radialGradient>
          </defs>
        </svg>

        {timeline.map((item, index) => (
          <div
            key={item.id}
            className="timeline-card"
            style={{
              left: `${item.position.x}px`,
              top: `${item.position.y}px`,
            }}
            ref={(el) => (cardsRefs.current[index] = el)}
          >
            <CrxSubTitle2 fs='1.5rem'>{item.label}</CrxSubTitle2>
            <CrxSubTitleNor fs='1rem'>{item.description}</CrxSubTitleNor>
          </div>
        ))}
      </div>
    </>
  );
};

export default RoadmapSection;
