import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useNavigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';


const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  let navigate = useNavigate();
  const { signOut } = useAuthenticator(); // Get signOut function from Amplify

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (param: string) => {
    setAnchorEl(null);

    if (!(param == '')) {
    console.log("GOAT: ", param)
    navigate(`/${param}`);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: '10vh' }}>
        <Toolbar sx={{ height: '100%' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* Logo or Title Here */}
          </Typography>
          <IconButton onClick={handleClick} color="inherit">
            <SettingsOutlinedIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => handleClose('')}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={() => handleClose("addItem")}>Add Item to List</MenuItem>
            <MenuItem onClick={() => handleClose("pairing")}>Pair Another User</MenuItem>
            <MenuItem onClick={signOut}>Sign Out</MenuItem> {/* Added Sign Out */}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

{/*
  // Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import Select from '@mui/material/Select'; 
import MenuItem from '@mui/material/MenuItem';



const Navbar: React.FC = () => {
  const [value, setValue] = useState('');


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: '10vh' }}> Set height to 10% 
      <Toolbar sx={{ height: '100%' }}>  Ensure Toolbar fills AppBar 
      COMMENTED OUT BELOW
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      COMMENTED OUT ABOVE
      
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        
      </Typography>
      <SettingsOutlinedIcon/>
      
      <Select
  value={value}
  onChange={(event) => setValue(event.target.value)}
  displayEmpty
>
  <MenuItem value="" disabled>Select an option</MenuItem>
  <MenuItem value="ASD">ASD</MenuItem>
  <MenuItem value="XYZ">XYZ</MenuItem>
</Select>



        COMMENTED OUT:
      <Button color="inherit">Login</Button>
    
      
    </Toolbar>
  </AppBar>
</Box>
);
};


export default Navbar;

  
*/}