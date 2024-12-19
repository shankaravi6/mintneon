import styled from "styled-components";
import { connect } from "react-redux";

import React, { memo } from "react";
import { useThemeContext } from "../../context/theme/ThemeContext.jsx";

const mapStateToProps = (state) => ({
  mode: state.shopping.mode,
});

const CrxComponent = (StyledComponent) => {
  //HOC
  const ConnectedStyledComponent = connect(mapStateToProps)(
    ({ dispatch, ...rest }) => {
      const { palette } = useThemeContext();
      return <StyledComponent {...rest} palette={palette} />;
    }
  );

  return ConnectedStyledComponent;
};

export const CrxBackground = styled.div`
  width: 100%;
  height: ${(props) => (props.h ? props.h : "100vh")};
  background: ${(props) =>
    props.bg ? props.bg : `${props.palette.background.high}`};
`;

export const CrxContainer = CrxComponent(styled.div`
  width: 100%;
  background: ${(props) => (props.bg ? props.bg : `unset`)};
  @media screen and (max-width: 768px) {
    max-width: 1300px;
  }
`);

export const CrxCenterContainer = CrxComponent(styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.bg ? props.bg : `unset`)};
  @media screen and (max-width: 768px) {
    max-width: 1300px;
  }
`);

export const CrxSection = CrxComponent(styled.section`
  width: 100%;
  height: ${(props) => (props.h ? props.h : "unset")};
  max-width: ${(props) => (props.mw ? props.mw : "1300px")};
  margin: ${(props) => props.m ? props.m : '0 auto'};
  background: ${(props) => (props.bg ? props.bg : `unset`)};
  padding: ${(props) => (props.p ? props.p : "unset")};
  @media screen and (max-width: 970px) {
    padding: ${(props) => (props.sp ? props.sp : "unset")};
    height: ${(props) => (props.sh ? props.sh : "unset")};
  }
  @media screen and (max-width: 1125px) {
    width: ${(props) => (props.mw ? props.mw : "none")};
    padding: ${(props) => (props.mp ? props.mp : "unset")};
  }
`);

export const CrxCover = CrxComponent(styled.div`
  width: ${(props) => (props.w ? props.w : "unset")};
  height: ${(props) => (props.h ? props.h : "unset")};
  box-shadow: ${(props) => (props.bs ? props.bs : "unset")};
  transform: ${(props) => (props.tr ? props.tr : "unset")};
  background: ${(props) => (props.bg ? props.bg : `unset`)};
  padding: ${(props) => (props.p ? props.p : "unset")};
  margin: ${(props) => (props.m ? props.m : "unset")};
  border-radius: ${(props) => (props.br ? props.br : "unset")};
  border: ${(props) => (props.border ? props.border : "unset")};
  @media screen and (max-width: 970px) {
    padding: ${(props) => (props.sp ? props.sp : "none")};
    height: ${(props) => (props.sh ? props.sh : "none")};
  }
`);

export const CrxFlex = CrxComponent(styled.div`
  display: flex;
  align-items: ${(props) => (props.al ? props.al : "center")};
  justify-content: ${(props) => (props.jc ? props.jc : "center")};
  flex-direction: ${(props) => (props.dir ? props.dir : "row")};
  width: ${(props) => (props.w ? props.w : "unset")};
  height: ${(props) => (props.h ? props.h : "unset")};
  padding: ${(props) => (props.p ? props.p : "unset")};
  margin: ${(props) => (props.m ? props.m : "unset")};
  gap: ${({ gap }) => (gap ? gap : "unset")};
  box-shadow: ${(props) => (props.bs ? props.bs : "unset")};
  background-color: ${(props) => (props.bg ? props.bg : "unset")};
  border-radius: ${(props) => (props.br ? props.br : "unset")};

  @media screen and (max-width: 970px) {
    flex-direction: ${(props) => (props.sm_dir ? props.sm_dir : "column")};
    padding: ${(props) => (props.sp ? props.sp : "none")};
    align-items: ${(props) => (props.sal ? props.sal : "center")};
    justify-content: ${(props) => (props.sjc ? props.sjc : "center")};
    width: ${(props) => (props.sw ? props.sw : "unset")};
    height: ${(props) => (props.sh ? props.sh : "unset")};
  }
`);

export const CrxGrid = CrxComponent(styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.columns ? props.columns : "repeat(auto-fit, minmax(250px, 1fr))"};
  gap: ${(props) => (props.gap ? props.gap : "16px")};
  width: ${(props) => (props.w ? props.w : "100%")};
  padding: ${(props) => (props.p ? props.p : "unset")};
  margin: ${(props) => (props.m ? props.m : "unset")};

  @media screen and (max-width: 1125px) {
    grid-template-columns: ${(props) =>
      props.sm_columns ? props.sm_columns : "repeat(2, 1fr)"};
    gap: ${(props) => (props.sm_gap ? props.sm_gap : "12px")};
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: ${(props) =>
      props.xs_columns ? props.xs_columns : "1fr"};
    gap: ${(props) => (props.xs_gap ? props.xs_gap : "8px")};
  }
`);

export const CrxBox = styled.div`
  display: ${(props) => (props.display ? props.display : "flex")};
  width: ${(props) => (props.w ? props.w : "auto")};
  height: ${(props) => (props.h ? props.h : "auto")};
  background: ${(props) => (props.bg ? props.bg : "unset")};
  padding: ${(props) => (props.p ? props.p : "unset")};
  margin: ${(props) => (props.m ? props.m : "unset")};
  box-shadow: ${(props) => (props.bs ? props.bs : "unset")};
  border: ${(props) => (props.border ? props.border : "unset")};
  border-radius: ${(props) => (props.br ? props.br : "unset")};

  @media screen and (max-width: 970px) {
    width: ${(props) => (props.sw ? props.sw : "auto")};
    height: ${(props) => (props.sh ? props.sh : "auto")};
    transform: translateX(0) !important;
    display: ${(props) => (props.sdisplay ? props.sdisplay : "flex")};
  }
  @media screen and (max-width: 1125px) {
    width: ${(props) => (props.mw ? props.mw : "none")};
  }
`;

export const CrxCard = CrxComponent(styled.div`
  width: ${(props) => (props.w ? props.w : "350px")};
  height: ${(props) => (props.h ? props.h : "350px")};
  padding: ${(props) => (props.p ? props.p : "auto")};
  margin: ${(props) => (props.m ? props.m : "auto")};
  border-radius: ${(props) => (props.br ? props.br : "15px")};
  background: ${(props) => (props.bg ? props.bg : `unset`)};
  border: 0.88px solid rgb(255 255 255 / 25%);
  box-shadow: ${(props) => (props.bs ? props.bs : `unset`)};
  transition: all 0.3s ease;
  @media screen and (max-width: 960px) {
    width: ${(props) => (props.sw ? props.sw : "300px")};
    height: ${(props) => (props.sh ? props.sh : "300px")};
  }

  &:hover {
    transition: all 0.3s ease;
    border: 1px solid rgb(255 255 255 / 35%);
  }
`);

export const CrxGlassCard = CrxComponent(styled.div`
  width: ${(props) => (props.w ? props.w : "350px")};
  height: ${(props) => (props.h ? props.h : "350px")};
  padding: ${(props) => (props.p ? props.p : "auto")};
  margin: ${(props) => (props.m ? props.m : "auto")};
  border-radius: ${(props) => (props.br ? props.br : "15px")};
  background: ${(props) => (props.bg ? props.bg : `rgba(255, 255, 255, .07)`)};
  box-shadow: ${(props) => (props.bs ? props.bs : `unset`)};
  border: 1px solid rgb(255 255 255 / 25%);
  backdrop-filter: blur(9px);
  transition: all 0.3s ease;
  @media screen and (max-width: 960px) {
    width: ${(props) => (props.sw ? props.sw : "300px")};
    height: ${(props) => (props.sh ? props.sh : "300px")};
  }

  &:hover {
    transition: all 0.3s ease;
    backdrop-filter: blur(9px);
    background: ${(props) =>
      props.bg ? props.bg : `rgba(255, 255, 255, .10)`};
  }
`);

export const CrxImg = styled.img`
  width: ${(props) => (props.w ? props.w : "100%")};
  border-radius: ${(props) => (props.br ? props.br : "unset")};
  @media screen and (max-width: 970px) {
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    width: ${(props) => (props.sw ? props.sw : "unset")};
  }
`;

export const CrxBackImg = styled.div`
  width: ${(props) => (props.w ? props.w : "100%")};
  height: ${(props) => (props.h ? props.h : "100%")};
  background: ${(props) => (props.url ? `url(${props.url})` : "none")};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 970px) {
    width: ${(props) => (props.sw ? props.sw : "unset")};
  }
`;

export const CrxForm = styled.form`
  width: ${(props) => (props.w ? props.w : "100%")};
  height: ${(props) => (props.h ? props.h : "auto")};
`;

export const CrxMainTitle = CrxComponent(styled.h1`
  font-family: "Satoshi-Med", sans-serif;
  font-size: ${(props) => (props.fs ? props.fs : "clamp(2rem, 10vw, 15rem)")};
  text-align: center;
  color: ${(props) => (props.color ? props.color : props.palette.text.title)};
  animation: lights 5s 750ms linear infinite;
  letter-spacing: ${(props) => (props.ls ? props.ls : "unset")};


  @keyframes lights {
    0% {
      color: hsl(230, 40%, 80%);
      text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.2),
        0 0 0.125em hsla(320, 100%, 60%, 0.3),
        -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
        1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
    }

    30% {
      color: hsl(230, 80%, 90%);
      text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.5),
        0 0 0.125em hsla(320, 100%, 60%, 0.5),
        -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
        0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
    }

    40% {
      color: hsl(230, 100%, 95%);
      text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.5),
        0 0 0.125em hsla(320, 100%, 90%, 0.5),
        -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
        0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
    }

    70% {
      color: hsl(230, 80%, 90%);
      text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.5),
        0 0 0.125em hsla(320, 100%, 60%, 0.5),
        0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
        -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
    }

    100% {
      color: hsl(230, 40%, 80%);
      text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.2),
        0 0 0.125em hsla(320, 100%, 60%, 0.3),
        1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
        -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
    }
  }
`);

export const CrxTitle = CrxComponent(styled.h1`
  font-family: "Satoshi-Med", sans-serif;
  font-size: ${(props) => (props.fs ? props.fs : "clamp(2rem, 10vw, 15rem)")};
  text-align: center;
  letter-spacing: ${(props) => (props.ls ? props.ls : "unset")};
  color: ${(props) => (props.color ? props.color : props.palette.text.low)};
  text-transform: ${(props) => (props.tt ? props.tt : "unset")};
  margin: unset;
  /* animation: glow 5s ease-in-out infinite alternate; */

  @media screen and (max-width: 960px) {
    text-align: center;
    margin-left: ${(props) => (props.s_ml ? props.s_ml : "30px")};
  }

  /* @keyframes glow {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073,
        0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    }

    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6,
        0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
    }
  } */
  /* &::before {
    content: "";
    display: inline-block;
    height: 8px;
    width: 100px;
    background-color: ${(props) => props.palette.text.main};
  }
  
  &::after {
    content: "";
    display: inline-block;
    height: 8px;
    width: 100px;
    background-color: ${(props) => props.palette.text.main};
  } */
`);

export const CrxSubTitleNor = CrxComponent(styled.h1`
  font-family: "Satoshi-Reg", sans-serif;
  font-size: ${(props) => (props.fs ? props.fs : "clamp(1rem, 5vw, 2rem)")};
  text-align: ${(props) => (props.ta ? props.ta : "left")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "0px")};
  color: ${(props) => (props.color ? props.color : "transparent")};
  text-shadow: ${(props) => (props.ts ? props.ts : "unset")};
  background: ${(props) =>
    props.bg
      ? props.bg
      : "linear-gradient(89deg, rgb(255 255 255) 30%, rgb(75 75 75 / 62%) 100%)"};
  font-weight: ${(props) => (props.fw ? props.fw : "unset")};
  text-transform: ${(props) => (props.tt ? props.tt : "unset")};
  margin: unset;
  background-clip: text;
  transition: all 0.5s ease;
  opacity: 0.55;

  &:hover {
    opacity: 0.85;
    transition: all 1s ease;
  }

  /* &::before {
    content: "";
    display: inline-block;
    height: 65px;
    width: 70px;
    background: ${(props) => (props.bg ? props.bg : `rgb(61 191 200 / 42%)`)};
    backdrop-filter: blur(9px);
    position:absolute;
    left:-15px;
  } */
`);

export const CrxSubTitle = CrxComponent(styled.h1`
  font-family: "Satoshi-Reg", sans-serif;
  font-size: ${(props) => (props.fs ? props.fs : "clamp(1rem, 5vw, 2.5rem)")};
  text-align: ${(props) => (props.ta ? props.ta : "center")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "0px")};
  color: ${(props) => (props.color ? props.color : "transparent")};
  text-shadow: ${(props) => (props.ts ? props.ts : "unset")};
  background: ${(props) =>
    props.bg
      ? props.bg
      : "linear-gradient(250deg, rgb(255 255 255) 30%, rgb(4 243 236 / 84%) 100%)"};
  font-weight: ${(props) => (props.fw ? props.fw : "unset")};
  text-transform: ${(props) => (props.tt ? props.tt : "unset")};
  margin: unset;
  background-clip: text;
  transition: all 0.5s ease;
  opacity: 0.55;

  &:hover {
    opacity: 0.75;
    transition: all 0.5 ease;
    background: ${(props) =>
      props.bg
        ? props.bg
        : "linear-gradient(90deg, rgb(255 255 255) 30%, rgb(4 243 236 / 84%) 100%)"};
    background-clip: text;
    color: transparent;
  }

  /* &::before {
    content: "";
    display: inline-block;
    height: 65px;
    width: 70px;
    background: ${(props) => (props.bg ? props.bg : `rgb(61 191 200 / 42%)`)};
    backdrop-filter: blur(9px);
    position:absolute;
    left:-15px;
  } */
`);

export const CrxSubTitle2 = CrxComponent(styled.h1`
  font-family: "Satoshi-Reg", sans-serif;
  font-size: ${(props) => (props.fs ? props.fs : "clamp(1rem, 5vw, 2.5rem)")};
  text-align: ${(props) => (props.ta ? props.ta : "left")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "0px")};
  color: ${(props) => (props.color ? props.color : "transparent")};
  text-shadow: ${(props) => (props.ts ? props.ts : "unset")};
  background: ${(props) =>
    props.bg
      ? props.bg
      : "linear-gradient(250deg, rgb(255 255 255) 30%, rgba(255, 77, 166) 100%)"};
  font-weight: ${(props) => (props.fw ? props.fw : "unset")};
  text-transform: ${(props) => (props.tt ? props.tt : "unset")};
  margin: unset;
  background-clip: text;
  transition: all 0.5s ease;
  opacity: 0.55;

  &:hover {
    opacity: 0.85;
    transition: all 1s ease;
  }

  /* &::before {
    content: "";
    display: inline-block;
    height: 65px;
    width: 70px;
    background: ${(props) => (props.bg ? props.bg : `rgb(61 191 200 / 42%)`)};
    backdrop-filter: blur(9px);
    position:absolute;
    left:-15px;
  } */
`);

export const CrxNavText = CrxComponent(styled.p`
  font-family: "Satoshi-Reg", serif;
  font-size: ${(props) => (props.fs ? props.fs : "clamp(1rem, 5vw, 1rem)")};
  text-align: center;
  color: ${(props) => (props.color ? props.color : props.palette.text.low)};
  transition: all 0.5s ease;
  text-shadow: ${(props) => (props.ts ? props.ts : "unset")};
  background: ${(props) => (props.bg ? props.bg : "unset")};
  font-weight: ${(props) => (props.fw ? props.fw : "unset")};
  text-transform: ${(props) => (props.tt ? props.tt : "unset")};
  margin: unset;
  opacity: 0.9;

  &::after {
    content: "";
    display: block;
    width: 0%;
    opacity: 0;
    border-bottom: ${(props) => `2px solid ${props.palette.text.nav}`};
  }

  &:hover::after {
    opacity: 0.7;
    width: 100%;
    transition: all 0.5s ease;
  }
`);

export const CrxTypography = CrxComponent(styled.p`
  font-size: ${(props) => (props.fs ? props.fs : "clamp(1rem, 5vw, 1.5rem)")};
  font-weight: ${(props) => (props.fw ? props.fw : "normal")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "1px")};
  font-family: ${(props) => (props.fm ? props.fm : "Satoshi-Reg, sans-serif")};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  color: ${(props) => (props.color ? props.color : props.palette.text.mid)};
  text-align: ${(props) => (props.ta ? props.ta : "justify")};
  text-shadow: ${(props) => (props.ts ? props.ts : "unset")};
  text-transform: ${(props) => (props.tt ? props.tt : "unset")};
  opacity: 0.75;
`);

export const CrxSpan = CrxComponent(styled.span`
  font-size: ${(props) => (props.fs ? props.fs : "clamp(1rem, 5vw, 1.5rem)")};
  font-weight: ${(props) => (props.fw ? props.fw : "normal")};
  letter-spacing: 1px;
  font-family: ${(props) => (props.fm ? props.fm : `Satoshi-Reg, sans-serif`)};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  color: ${(props) => (props.color ? props.color : props.palette.text.main)};
  text-align: ${(props) => (props.ta ? props.ta : "justify")};
  text-shadow: ${(props) => (props.ts ? props.ts : "unset")};
  font-style: ${(props) => (props.fst ? props.fst : "normal")};
  text-transform: ${(props) => (props.tt ? props.tt : "unset")};
`);

export const CrxCustDiv = CrxComponent(styled.div`
  display: block;
`);
