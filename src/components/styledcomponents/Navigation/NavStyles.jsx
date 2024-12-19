import styled, { keyframes } from 'styled-components';
import { colorTokens } from '../../../context/theme/theme';
import { connect } from 'react-redux';
import { useThemeContext } from '../../../context/theme/ThemeContext';

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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const NavSection = CrxComponent(styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => (props.h ? props.h : 'unset')};
  background: ${(props) => props.bg || `unset`};
  padding: ${(props) => props.p || 'unset'};

  .menu-icon {
    display: none;
    cursor: pointer;
  }

  .nav-links {
    display: flex;
  }

  @media (max-width: 1024px) {
    .menu-icon {
      display: block;
    }
    .nav-links {
      display: none;
    }
  }
`);

export const FullScreenMenu = CrxComponent(styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${(props) => props.bg || `unset`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  animation: ${fadeIn} 0.5s forwards;

  .menu-links {
    text-align: center;
    font-size: 1.5em;
  }
`);

export const CloseIconWrapper = CrxComponent(styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: ${(props) => `${props.palette.background.low}`};
`);

export const MenuIconWrapper = CrxComponent(styled.div`
  cursor: pointer;
  color: ${(props) => `${props.palette.background.low}`};
`);
