import * as React from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { AppBar, Toolbar } from '@mui/material';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import logo2 from '../../assets/logo2.png';


const ButtonOnAppBar = styled(IconButton)`
  position: relative;
  right: 20px;
`;

const LogoContainer = styled.div`
  width: 100%;
  text-align: center;
  & > img {
    width: 25%; 
  }
`;

export default function Header({ handleClick }) {
  return (
    <div>
      <AppBar
        sx={{
          backgroundColor: 'white ',
        }}
        elevation="0"
      >
        <Toolbar>
          <ButtonOnAppBar onClick={handleClick} sx={{ color: 'blue' }}>
            <MenuRoundedIcon />
          </ButtonOnAppBar>
          <LogoContainer>
            <img src={logo2} />
          </LogoContainer>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  handleClick: PropTypes.func,
};
