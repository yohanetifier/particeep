import * as React from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { AppBar, Toolbar } from '@mui/material';
import styled from 'styled-components';
import PropTypes from 'prop-types';
/* import logo from '../../assets/logo.png' */
import logo2 from '../../assets/logo2.png';
/* import SearchIcon from '@mui/icons-material/Search'; */

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

/* const SecondContainerOfMainContainer = styled.div`
display: flex; 
    align-items: center; 
    height: 40px; 
    width : 70%; 
    border: 1px solid #CCCCCC; 
    border-radius 3px; 
    margin-left: 10px; 
    
    & > input {
        width: 90%; 
        margin-left: 10px; 
        height: 30px; 
        outline: none; 
        border: none; 
        
    }
    & > button {
        background-color: #F8F8F8; 
        width: 10%; 
        height: 100%;
        border-top: none; 
        border-right: none; 
        border-left: 1px solid #CCCCCC; 
        border-bottom: none; 
        cursor: pointer; 
    }
`; */

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
          {/* <SecondContainerOfMainContainer>
            <input placeholder="Rechercher" />
            <button>
              <SearchIcon />
            </button>
          </SecondContainerOfMainContainer> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  handleClick: PropTypes.func,
};
