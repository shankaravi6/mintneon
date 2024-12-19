import React, { Suspense, lazy, useEffect, useRef } from "react";
import {
  CrxSection,
  CrxCenterContainer,
  CrxFlex,
  CrxSubTitle,
  CrxTypography,
  CrxMainTitle,
  CrxTitle,
  CrxSubTitleNor,
  CrxSubTitle2,
} from "../../components/styledcomponents/globalStyles";
import CrxButton from "../../components/common/CrxButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const BannerSection = ({ scrollProgress }) => {
  const scale = 1 + scrollProgress * 0.5; // Scale the section as you scroll
  //const scale = 1;
  const opacity = 1 - scrollProgress; // Fade out the section based on progress
  const transitionDuration = "0.3s ease-out"; // Smooth transition
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    // GSAP Scroll Animation for the text
    gsap.fromTo(
      textElement,
      { scale: 1, opacity: 1 },
      {
        scale: 3,
        opacity: 0,
        scrollTrigger: {
          trigger: textElement,
          start: "top 50%", // Animation starts when the element is halfway visible
          end: "top top",   // Animation ends when the element reaches the top
          scrub: true,      // Smoothly ties the animation progress to the scroll position
        },
      }
    );

  }, []);
  return (
    <CrxSection m='0 auto 0 auto'>
      <CrxCenterContainer className="flex-col gap-5">
        <CrxFlex
          style={{
            position: "relative",
            top: 0,
            transform: `scale(${scale})`,
            opacity: opacity,
            transition: `transform ${transitionDuration}, opacity ${transitionDuration}`,
            display: "flex",
            gap:'2.5rem',
            width:"100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          dir="column"
          m="-155px 0 0 0"
        >
          <CrxMainTitle ref={textRef} fs="5rem" ls='0.5rem'>MINTNEON FOR LIFE</CrxMainTitle>
          <CrxSubTitle2 ta='center' fs="2rem">
            Welcome to MintNeon, where the future of digital currency and
            decentralized finance comes to life. Our platform combines innovation, security, and transparency to redefine the way you interact with financial systems
          </CrxSubTitle2>
          <CrxButton>Associate Login</CrxButton>
        </CrxFlex>
      </CrxCenterContainer>
      {/* <Suspense
        fallback={
          <CrxTypography style={{ height: "100vh", backgroundColor: "#000607" }}>
            Loading...
          </CrxTypography>
        }
      >
        <Spline scene="https://prod.spline.design/ys0Dc4M3vyVpPCh0/scene.splinecode" />
      </Suspense> */}
    </CrxSection>
  );
};

export default BannerSection;
