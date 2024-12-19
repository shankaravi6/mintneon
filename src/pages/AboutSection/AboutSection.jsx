import React, { forwardRef, useEffect, useState } from "react";
import {
  CrxSection,
  CrxFlex,
  CrxSubTitle,
  CrxTypography,
  CrxBox,
} from "../../components/styledcomponents/globalStyles";
import Spline from "@splinetool/react-spline";
import { Fade, Hinge } from "react-awesome-reveal";
import './AboutSection.css'

const AboutSection = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  // Check visibility of the About section
  const checkVisibility = () => {
    const rect = ref.current.getBoundingClientRect();
    const isInView =
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    setIsVisible(isInView);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    return () => window.removeEventListener("scroll", checkVisibility);
  }, []);

  // Dynamic gradient style when the section is visible
  const gradientStyle = isVisible
    ? {
        color: "#e1e1e1",
        animation: "gradientFill 2s forwards", // Animate the gradient fill
      }
    : {};

  return (
    <CrxSection>
      <Fade>
      <CrxFlex
        gap="5rem"
        style={{
          minHeight: "100vh",
          padding: "50px",
        }}
      >
        <CrxBox w="100%" className="flex-col gap-5" ref={ref}>
          <Fade direction="up">
          <CrxSubTitle>About Us</CrxSubTitle>
          </Fade>
          <Fade direction="up">
          <CrxTypography className='glass-shade' style={gradientStyle}>
          MintNeon is a digital currency that operates as a globally distributed network of computers adhering to the MintNeon protocol. Serving as a robust infrastructure, MintNeon empowers communities, applications, organizations, and digital assets, facilitating their creation and utilization. Accessible from anywhere and at any time, you can establish a MintNeon account to delve into a realm of applications or develop your own. A key breakthrough lies in the ability to engage in these activities without reliance on a central authority capable of altering rules or limiting access.
          </CrxTypography>
          </Fade>
        </CrxBox>
        <CrxBox w="100%" h="500px">
          <Spline scene="https://prod.spline.design/VLYqo-y3jEqHlsCC/scene.splinecode" />
        </CrxBox>
      </CrxFlex>
      </Fade>
    </CrxSection>
  );
});

export default AboutSection;
