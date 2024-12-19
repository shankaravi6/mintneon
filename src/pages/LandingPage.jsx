import React, { useEffect, useState, useRef, Suspense, lazy } from "react";
import NavBar from "../components/layout/Navigation/NavBar";
import { CrxContainer } from "../components/styledcomponents/globalStyles";
import BannerSection from "./BannerSection/BannerSection";
import AboutSection from "./AboutSection/AboutSection";
import FogEffect from "./FogEffect";
import PricingSection from "./PricingSection/PricingSection";
import MissionSection from "./MissionSection/MissionSection";
import ListinSection from "./ListinSection/ListinSection";
import KeySection from "./KeySection/KeySection";
import RoadmapSection from "./RoadmapSection/RoadmapSection";
import FooterSection from "./FooterSection/FooterSection";

// Lazy-load the Spline component to improve initial load time
// const Spline = lazy(() => import('@splinetool/react-spline'));

const LandingPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const aboutRef = useRef(null);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const bannerHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        const progress = Math.min(scrollTop / bannerHeight, 1); // Clamp between 0 and 1
        setScrollProgress(progress);
      }, 50); // Throttle scroll updates
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <CrxContainer bg="#000607">
      <FogEffect />
      <NavBar />
      <BannerSection />
      <AboutSection ref={aboutRef} />
      <ListinSection />
      {/* <RoadmapSection/> */}
      <KeySection />
      <MissionSection />
      <PricingSection />
      <FooterSection/>
    </CrxContainer>
  );
};

export default LandingPage;
