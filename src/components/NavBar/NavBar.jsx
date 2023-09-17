import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './../../assets/logo-nan-removebg-preview.png'
import { CartWidget } from '../CartWidget/CartWidget';


const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='nav'>
          <IconButton
          className="menu"
          id="menu"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
            <img src={logo} className='logo-nan' variant="h6" component="div"/>
          <CartWidget/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}




export default Header;