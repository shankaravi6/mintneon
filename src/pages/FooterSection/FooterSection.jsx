import React from 'react';
import { CrxFlex, CrxSection, CrxSubTitle2, CrxTypography } from '../../components/styledcomponents/globalStyles';

const FooterSection = () => {
  return (
    
      <CrxSection mp='10px' sp='10px'>
        <CrxFlex w='100%' p='0 0 2rem 0' jc='space-between'>
        <CrxFlex sw='100%' w='500px'>
        <CrxTypography fs='14px' ls='0px'>Lorem ipsum dolor sit amet consectetur adipiscing elit, quis pellentesque leo netus torquent vel, est nisi tempor ac ad himenaeos.</CrxTypography>
        </CrxFlex>
        <CrxFlex dir='column' al='flex-start'>
            <CrxTypography fs='14px'>UNISERSAL SUBJET</CrxTypography>
            <CrxSubTitle2 fst='normal' fs='14px'>MINTNEON @2024</CrxSubTitle2>
        </CrxFlex>
        </CrxFlex>
       </CrxSection>
    
  );
}

export default FooterSection;
