import React from 'react'
import { CrxFlex, CrxSection, CrxSubTitle, CrxTypography } from '../../styledcomponents/globalStyles'
import { CrxFooterSection } from '../../styledcomponents/Footer/FooterStyles'

const FooterBar = () => {
  return (
    <CrxFooterSection>
       <CrxSection mp='10px' sp='10px'>
        <CrxFlex w='100%' jc='space-between'>
        <CrxFlex sw='100%' w='500px'>
        <CrxTypography fs='14px' ls='0px'>Lorem ipsum dolor sit amet consectetur adipiscing elit, quis pellentesque leo netus torquent vel, est nisi tempor ac ad himenaeos.</CrxTypography>
        </CrxFlex>
        <CrxFlex dir='column' al='flex-start'>
            <CrxTypography fs='14px'>UNISERSAL SUBJET</CrxTypography>
            <CrxSubTitle fst='normal' fs='14px'>REFINE @2024</CrxSubTitle>
        </CrxFlex>
        </CrxFlex>
       </CrxSection>
    </CrxFooterSection>
 
  )
}

export default FooterBar