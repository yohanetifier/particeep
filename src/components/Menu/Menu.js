import * as React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonOnDrawer = styled(Button)`
  position: relative;
  right: 60px;
  top: 35px;
  margin-bottom: 20px;
  & > svg {
    color: blue; 
  }
`;

export default function Menu({ menu, handleClose, datas}) {
  return (
    <div>
      <Drawer variant="temporary" open={menu} onClose={handleClose}>
        <ButtonOnDrawer onClick={handleClose}>
          <MenuRoundedIcon />
        </ButtonOnDrawer>
        <List>
          {datas.map((data) => (
            <ListItem key={data.text}>
              <ListItemIcon>{data.icon}</ListItemIcon>
              <ListItemText>{data.text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

Menu.propTypes = {
  menu: PropTypes.bool,
  handleClose: PropTypes.func,
  datas: PropTypes.array,
};
