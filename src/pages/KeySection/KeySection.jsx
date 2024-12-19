import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import {
  CrxSection,
  CrxCenterContainer,
  CrxFlex,
  CrxSubTitle,
  CrxTypography,
  CrxMainTitle,
  CrxTitle,
  CrxBox,
  CrxSubTitle2,
  CrxCustDiv,
  CrxCard,
} from "../../components/styledcomponents/globalStyles";
import { Fade } from "react-awesome-reveal";
import Spline from '@splinetool/react-spline';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const KeySection = () => {
  const lenisRef = useRef(null);
  const [leftTitle, setLeftTitle] = useState(
    "https://lottie.host/36b4d9c4-1e55-49b4-ae84-ee0d43d8ca8a/ecg8iDsHIJ.lottie"
  ); // Default left title

  useEffect(() => {
    // Initialize Lenis for global smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      smooth: true,
    });

    const handleRAF = (time) => {
      lenis.raf(time);
      requestAnimationFrame(handleRAF);
    };

    requestAnimationFrame(handleRAF);

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".fea_tab");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newTitle = entry.target.getAttribute("data-title");
            setLeftTitle(newTitle);
          }
        });
      },
      { threshold: 0.5 } // Change title when at least 50% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <CrxSection>
      <Fade>
        <CrxFlex dir="column" gap="5px">
          <CrxSubTitle fs="5rem">Key features of MintNeon</CrxSubTitle>
          <CrxTypography fs="2rem">
            Discover the powerful capabilities that drive innovation and
            performance.
          </CrxTypography>
        </CrxFlex>
        <CrxBox className="flex w-full gap-20">
          {/* Left Side: Fully Sticky */}
          <CrxFlex w="40%" h="100vh" className="sticky top-0">
            <CrxCard w="500px" h="400px" p="2rem">
            <DotLottieReact
      src={leftTitle}
      loop
      autoplay
    />
            {/* <Spline scene={leftTitle} /> */}
              {/* <CrxSubTitle2 ta="center">{leftTitle}</CrxSubTitle2> */}
            </CrxCard>
          </CrxFlex>

          {/* Right Side: Scrollable Content */}
          <CrxCustDiv className="w-3/5">
            {/* Section 1 */}
            <CrxFlex
              h="100vh"
              dir="column"
              className="fea_tab"
              data-title="https://lottie.host/36b4d9c4-1e55-49b4-ae84-ee0d43d8ca8a/ecg8iDsHIJ.lottie"
              gap="1.5rem"
              al="start"
            >
              <CrxSubTitle2>High security and transparency through blockchain technology</CrxSubTitle2>
              <CrxTypography>
                MintNeon utilizes the Binance Smart Chain (BSC) to ensure topnotch
                security and transparency. Every transaction is immutable and
                traceable on the blockchain, providing users with confidence in
                a secure, decentralized ecosystem that eliminates the risk of
                fraud or tampering.
              </CrxTypography>
            </CrxFlex>

            {/* Section 2 */}
            <CrxFlex
              h="100vh"
              dir="column"
              className="fea_tab"
              data-title="https://lottie.host/a0eb3184-bad4-4d16-aff4-4de118fbc4ff/4Oo3ZvbvPb.lottie"
              gap="1.5rem"
            >
              <CrxSubTitle2>Accessibility and ease of use</CrxSubTitle2>
              <CrxTypography>
                Designed for seamless integration, MintNeon offers a user-friendly
                platform that ensures easy access to decentralized finance
                (DeFi) opportunities. With low transaction fees and fast
                processing times, users worldwide can participate in staking and
                other financial activities without any barriers.
              </CrxTypography>
            </CrxFlex>

            {/* Section 3 */}
            <CrxFlex
              h="100vh"
              dir="column"
              className="fea_tab"
              data-title="https://lottie.host/96a4d787-dc18-40da-9de2-aa6ebb27829b/tmBZefpwnt.lottie"
              gap="1.5rem"
            >
              <CrxSubTitle2>Daily ROI distribution</CrxSubTitle2>
              <CrxTypography>
                MintNeon provides daily Return on Investment (ROI) to its users,
                rewarding their participation in the platform. This daily
                distribution model enhances liquidity, offers consistent
                returns, and encourages long-term engagement, allowing users to
                steadily grow their investments over time.
              </CrxTypography>
            </CrxFlex>

            {/* Section 4 */}
            <CrxFlex
              h="100vh"
              dir="column"
              className="fea_tab"
              data-title="https://lottie.host/659786cb-e7a6-4bef-ae45-08e4b39cfaef/SdTrwjuLwg.lottie"
              gap="1.5rem"
            >
              <CrxSubTitle2>Staking opportunities with multiple plans</CrxSubTitle2>
              <CrxTypography>
                MintNeon offers a variety of staking plans catering to different risk
                profiles and investment goals. Users can choose from Basic,
                Premium, or Ultra plans, each with unique terms and rewards,
                allowing participants to earn consistent returns through
                flexible staking opportunities.
              </CrxTypography>
            </CrxFlex>
          </CrxCustDiv>
        </CrxBox>
      </Fade>
    </CrxSection>
  );
};

export default KeySection;