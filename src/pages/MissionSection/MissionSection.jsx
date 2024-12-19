import React from "react";
import {
  CrxBox,
  CrxCard,
  CrxFlex,
  CrxGlassCard,
  CrxGrid,
  CrxSection,
  CrxSubTitle,
  CrxSubTitle2,
  CrxSubTitleNor,
  CrxTypography,
} from "../../components/styledcomponents/globalStyles";
import { Fade } from "react-awesome-reveal";
import { GrAchievement } from "react-icons/gr";
import { GrGrow } from "react-icons/gr";

const MissionSection = () => {
  return (
    <CrxSection p='5rem 0 5rem 0'>
      <Fade>
        <CrxFlex dir="column" gap="5px">
          <CrxSubTitle fs="5rem">Our Mission and Vision</CrxSubTitle>
        </CrxFlex>
        <CrxGrid p='2.5rem 0' columns='repeat(2, 1fr)' gap='5rem'>
            <CrxGlassCard w='100%' h='225px' p='1.25rem 2.5rem'>
                <CrxFlex gap='1rem' dir='column' jc='start' al='start'>
                <Fade direction="up" delay={1}>
                <CrxFlex jc='start' al='start' gap='1rem'>
                    <CrxGlassCard bg='rgb(169 30 100 / 43%)' w='50px' h='50px'>
                        <CrxFlex h='100%'><GrAchievement color='#e7e3e3bf' fontSize='22px' /></CrxFlex>
                    </CrxGlassCard>
                    <CrxSubTitle2 fs='2rem'>Mission</CrxSubTitle2>
                </CrxFlex>
                </Fade>
                <Fade direction="up" delay={2}>
                <CrxTypography fs='1.2rem'>
                MintNeon aims to revolutionize decentralized finance by providing secure, scalable, and innovative financial solutions that empower users and promote long-term value and financial freedom.
                </CrxTypography>
                </Fade>
                </CrxFlex>
            </CrxGlassCard>
            <CrxGlassCard w='100%' h='225px' p='1.25rem 2.5rem'>
                <CrxFlex gap='1rem' dir='column' jc='start' al='start'>
                <Fade direction="up" delay={1}>
                <CrxFlex jc='start' al='start' gap='1rem'>
                    <CrxGlassCard bg='rgb(169 30 100 / 43%)' w='50px' h='50px'>
                        <CrxFlex h='100%'><GrGrow color='#e7e3e3bf' fontSize='22px' /></CrxFlex>
                    </CrxGlassCard>
                    <CrxSubTitle2 fs='2rem'>Vision</CrxSubTitle2>
                </CrxFlex>
                </Fade>
                <Fade direction="up" delay={2}>
                <CrxTypography fs='1.2rem'>
                To become a global leader in DeFi by offering comprehensive, user-friendly financial tools and fostering sustainable growth through strategic partnerships and technological innovation.
                </CrxTypography>
                </Fade>
                </CrxFlex>
            </CrxGlassCard>
        </CrxGrid>
      </Fade>
    </CrxSection>
  );
};

export default MissionSection;
