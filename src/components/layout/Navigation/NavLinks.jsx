import React from 'react';
import { CrxNavText, CrxFlex } from '../../styledcomponents/globalStyles';
import { Link } from "react-router-dom";
import { navLinks } from '../../../datas/NavData';

const NavLinks = () => {
  return (
    <CrxFlex gap='clamp(0.5rem,5vw,1.5rem)'>
      {navLinks.map((data, index) => {
        return <Link key={index} to={data.to} className='nav-link'><CrxNavText>{data.name}</CrxNavText></Link>
      })}
    </CrxFlex>
  );
}

export default NavLinks;
