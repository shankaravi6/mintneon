import React from 'react';
import { CrxCover, CrxFlex, CrxTypography } from '../../styledcomponents/globalStyles';
import CrxButton from '../../common/CrxButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../../../store';
import { colorTokens } from '../../../context/theme/theme';


const NavButtons = () => {

  const mode = useSelector((state) => state.shopping.mode);
  const dispatch = useDispatch();

  return (
    <CrxFlex gap='20px'>
        {mode == 'light' ? <CrxCover className='cursor-pointer' onClick={() => {dispatch(setMode("dark"))}}><DarkModeIcon/></CrxCover> : <CrxCover className='cursor-pointer' onClick={() => {dispatch(setMode("light"))}}><LightModeIcon style={{color:`${colorTokens.drops[200]}`}} /></CrxCover>}
    </CrxFlex>
  );
}

export default NavButtons;
