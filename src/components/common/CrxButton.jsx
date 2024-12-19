import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useThemeContext } from "../../context/theme/ThemeContext.jsx";
import { colorTokens } from "../../context/theme/theme.js";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';



const mapStateToProps = (state) => ({
    mode: state.shopping.mode,
  });
  
  const CrxComponent = (StyledComponent) => {
    const ConnectedStyledComponent = connect(mapStateToProps)(
      ({ dispatch, ...rest }) => {
        const { palette } = useThemeContext();
        return <StyledComponent {...rest} palette={palette} />;
      }
    );
  
    return ConnectedStyledComponent;
  };

const StyledButton = CrxComponent(styled.button`
  text-align: center;
  letter-spacing: 1.5px;
  border: 1.85px solid #d6f5f5;
  border-bottom: none;
  box-shadow: ${(props) => props.palette.shadow.main} 0px;
  color: ${(props) => props.palette.text.lowmid};
  transition: all 0.3s ease;
  font-weight: 400;
  padding: 7px 25px;
  width: ${(props) => (props.width ? props.width : 'auto')};
  display: block;
  border-radius: 10px;
  opacity: 0.75;
  position: relative; /* Needed for pseudo-element positioning */

  &:hover {
    opacity: 0.9;
    border: 1.85px solid #2eb8b8;
    border-bottom: none;
    transition: all 0.3s ease-out;
  }

  /* Bright line with infinite animation */
  &::before {
    content: '';
    position: absolute;
    bottom: -1.5px; /* Adjust position to align the bright line */
    left: 50%;
    transform: translateX(-50%);
    width: 50px; /* Length of the line */
    height: 1.5px; /* Height for rounded line */
    background: #ff99cc; /* Bright line color ff99cc 2eb8b8*/
    border-radius: 10px; /* Fully rounded ends */
    box-shadow: 0 0 10px #f4f3f2; /* Add brightness effect */
    animation: pulseLine 1.5s infinite ease-in-out; /* Infinite animation */
  }

  /* Animation keyframes */
  @keyframes pulseLine {
    0% {
      transform: translateX(-50%) scale(1);
      opacity: 0.75;
    }
    50% {
      transform: translateX(-50%) scale(1.15); /* Slightly enlarge */
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) scale(1);
      opacity: 0.75;
    }
  }
`);



const StyledText = CrxComponent(styled.span`
  text-align: center;
  font-size: 16px;
  line-height: 30px; 
  color: ${(props) => props.palette.text.main};
  transition: all .3s ease-out;
  display: block;
`)

const StyledOutlineButton = CrxComponent(styled.button`
  font-size: 100%;
  text-align: center;
  letter-spacing: 5px;
  color: ${(props) => props.palette.text.main};
  background-color: transparent;
  box-shadow: ${(props) => props.palette.shadow.main} 0px 2px 4px;
  transition: all 0.3s ease;
  font-weight: 500;
  padding: 10px 20px;
  width: ${(props) => (props.width ? props.width : '100%')};
  border-radius: 5px;
  border: ${(props) => `1px solid ${colorTokens.drops[200]}`};

  &:hover {
    box-shadow: ${(props) => props.palette.shadow.main} 0px 5px 15px;
    background-color: ${(props) => props.palette.background.high};
    color: ${(props) => (props.mode === "dark" ? colorTokens.drops[200] : colorTokens.drops[800])};
  }
`);



const 
CrxButton = ({ height, width, onChange, onSubmit, onClick, onBlur, type, children, style, variant }) => {
  return (
    <>
    {variant == "outline" ?
      <StyledOutlineButton
        height={height}
        width={width}
        onChange={onChange}
        onSubmit={onSubmit}
        onClick={onClick}
        onBlur={onBlur}
        type={type}
        style={style}
      >
      {children}
      </StyledOutlineButton>
      :
      <StyledButton
      height={height}
      width={width}
      onChange={onChange}
      onSubmit={onSubmit}
      onClick={onClick}
      onBlur={onBlur}
      type={type}
      style={style}
    >
    <StyledText>{children}</StyledText>
    </StyledButton>
    }
    </>
  );
};

export default CrxButton;
