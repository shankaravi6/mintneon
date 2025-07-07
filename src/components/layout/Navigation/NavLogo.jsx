import React from "react";
import {
  CrxBox,
  CrxFlex,
  CrxImg,
  CrxSpan,
  CrxSubTitle,
  CrxTitle,
} from "../../styledcomponents/globalStyles";

const NavLogo = () => {
  return (
    <CrxFlex gap="20px">
      {/* <CrxBox w='30px' h='30px'><CrxImg src={MainLogo} sw='50%' width='100%'></CrxImg></CrxBox> */}
      <CrxBox>
        <CrxTitle
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(4, 243, 236, 0.7), rgba(255, 77, 166, 0.75))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
          ls="0rem"
          fs="clamp(1rem,10vw,2rem)"
        >
          Mint-Neon
        </CrxTitle>
      </CrxBox>
    </CrxFlex>
  );
};

export default NavLogo;
