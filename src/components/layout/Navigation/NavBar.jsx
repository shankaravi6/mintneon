import React, { useState } from 'react';
import { CrxCover, CrxFlex, CrxSection } from '../../styledcomponents/globalStyles';
import { NavSection, FullScreenMenu, CloseIconWrapper, MenuIconWrapper } from '../../styledcomponents/Navigation/NavStyles';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import { useThemeContext } from '../../../context/theme/ThemeContext';
import { FiMenu, FiX } from 'react-icons/fi';
import NavButtons from './NavButtons';

const NavBar = () => {
  const { palette } = useThemeContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <CrxCover>
      <NavSection h="70px">
        <CrxSection p='10px'>
          <CrxFlex p="15px 0px" jc="space-between" ai="center">
            <NavLogo />
            <CrxFlex gap="25px" className="nav-links">
              <NavLinks />
            </CrxFlex>
            <CrxFlex className="menu-icon" onClick={toggleMenu}>
              <MenuIconWrapper>
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </MenuIconWrapper>
            </CrxFlex>
          </CrxFlex>
        </CrxSection>
      </NavSection>

      {isMenuOpen && (
        <FullScreenMenu>
          <CloseIconWrapper onClick={toggleMenu}>
            <FiX size={24} />
          </CloseIconWrapper>
          <CrxFlex gap="25px" className="menu-links">
            <NavLinks />
            <NavButtons/>
          </CrxFlex>
        </FullScreenMenu>
      )}
    </CrxCover>
  );
};

export default NavBar;
