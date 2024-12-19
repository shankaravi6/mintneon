import React from "react";
import {
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
import Divider from "@mui/material/Divider";
import CrxButton from "../../components/common/CrxButton";

const PricingSection = () => {
  return (
    <CrxSection p='5rem 0 5rem 0'>
      <Fade>
        <CrxFlex dir="column" gap="5px">
          <CrxSubTitle fs="5rem">Plans that scale with you</CrxSubTitle>
          <CrxTypography fs="2rem">
            Choose a plan that's right for you
          </CrxTypography>
        </CrxFlex>
        <CrxFlex p="2.5rem 0 0 0">
          <CrxGrid columns="repeat(3, 1fr)">
            <CrxGlassCard p="1rem 2rem 2rem 2rem" h="100%">
              <CrxFlex gap=".5rem" dir="column" jc="left" al="start">
                <CrxSubTitleNor>Silver Plan</CrxSubTitleNor>
                <CrxTypography fs="1rem" className="pb-5">
                  One request at a time. Pause or cancel anytime.
                </CrxTypography>
              </CrxFlex>
              <hr style={{ border: ".88px solid rgb(255 255 255 / 15%)" }} />
              <CrxFlex p="0.25rem 0" dir="column" gap="1rem">
                <CrxSubTitle2 fs="5rem">$ 300</CrxSubTitle2>
                <CrxFlex dir="column" al="start" gap="1.5rem">
                  <CrxTypography fs="1rem">
                    7% monthly ROI in OBD tokens
                  </CrxTypography>
                  <CrxTypography fs="1rem">
                    5% direct referral commission
                  </CrxTypography>
                  <CrxTypography fs="1rem">Ideal for beginners</CrxTypography>
                  <CrxFlex w="100%" p="1rem 0 0 0">
                    <CrxButton>Select Plan</CrxButton>
                  </CrxFlex>
                </CrxFlex>
              </CrxFlex>
            </CrxGlassCard>
            <CrxCard p="1rem 2rem" h="100%">
              <CrxFlex gap=".5rem" dir="column" jc="left" al="start">
                <CrxSubTitleNor>Platinum Plan</CrxSubTitleNor>
                <CrxTypography fs="1rem" className="pb-5">
                  Double the requests. Pause or cancel anytime.
                </CrxTypography>
              </CrxFlex>
              <hr style={{ border: ".88px solid rgb(255 255 255 / 15%)" }} />
              <CrxFlex p="0.25rem 0" dir="column" gap="1rem">
                <CrxSubTitle2 fs="5rem">$ 1000</CrxSubTitle2>
                <CrxFlex dir="column" al="start" gap="1.5rem">
                  <CrxTypography fs="1rem">
                    7% monthly ROI in OBD tokens
                  </CrxTypography>
                  <CrxTypography fs="1rem">
                    6% direct referral commission
                  </CrxTypography>
                  <CrxTypography fs="1rem">
                    For investors seeking mid returns
                  </CrxTypography>
                  <CrxFlex w="100%" p="1rem 0 0 0">
                    <CrxButton>Select Plan</CrxButton>
                  </CrxFlex>
                </CrxFlex>
              </CrxFlex>
            </CrxCard>
            <CrxGlassCard p="1rem 2rem" h="100%">
              <CrxFlex gap=".5rem" dir="column" jc="left" al="start">
                <CrxSubTitleNor>Gold Plan</CrxSubTitleNor>
                <CrxTypography fs="1rem" className="pb-5">
                  Many at a time. Pause or cancel anytime.
                </CrxTypography>
              </CrxFlex>
              <hr style={{ border: ".88px solid rgb(255 255 255 / 15%)" }} />
              <CrxFlex p="0.25rem 0" dir="column" gap="1rem">
                <CrxSubTitle2 fs="5rem">$ 2500</CrxSubTitle2>
                <CrxFlex dir="column" al="start" gap="1.5rem">
                  <CrxTypography fs="1rem">
                    7% monthly ROI in OBD tokens
                  </CrxTypography>
                  <CrxTypography fs="1rem">
                    7% direct referral commission
                  </CrxTypography>
                  <CrxTypography fs="1rem">For those seeking higher returns</CrxTypography>
                  <CrxFlex w="100%" p="1rem 0 0 0">
                    <CrxButton>Select Plan</CrxButton>
                  </CrxFlex>
                </CrxFlex>
              </CrxFlex>
            </CrxGlassCard>
          </CrxGrid>
        </CrxFlex>
      </Fade>
    </CrxSection>
  );
};

export default PricingSection;
