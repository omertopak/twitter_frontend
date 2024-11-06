import * as React from 'react';
import { useState,useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo_x.png'
import { fixedBar,fixedBar2 } from '../styles/theme';
import { Box, Button, Switch } from '@mui/material';
import { useTheme } from '../styles/ThemeProvider';
import { IconButton } from '@mui/material';
import useUserCall from "../hooks/useUserCall";

//icons
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PostModal from './PostModal';
import useMediaQuery from '@mui/material/useMediaQuery';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useSelector } from 'react-redux';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const LeftBar = () => {
  const { userId } = useSelector((state) => state.auth);

  const isSmallScreen = useMediaQuery('(max-width:1280px)');
  const [drawerOpen, setDrawerOpen] = useState(!isSmallScreen);

  useEffect(() => {
    setDrawerOpen(!isSmallScreen);
  }, [isSmallScreen]);

  const icons = [
    HomeIcon,
    SearchIcon,
    NotificationsNoneIcon,
    BookmarkIcon,
    MailOutlineIcon,
    PersonOutlineIcon,
    MoreHorizIcon,
  ];
  
  const listNames = ['Home', 'Explore', 'Notifications', 'Bookmarks', 'Messages', 'Profile', 'More'];
  const [open, setOpen] = React.useState(false);
  
  const { darkMode, setDarkMode } = useTheme();
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const { getUser } = useUserCall();
  const handleProfileClick = (id) => {
    getUser(id);
    console.log('getuserinleftbar', id);
  };

  return (
    <Box sx={{ position: 'relative' }}>
      {isSmallScreen ? (
        <Box sx={fixedBar2}>
     
     
        {/* //!link to nereye yap! */}
        <Avatar component={Link} to="/home" alt="X" src={Logo} sx={{ width: 50, height: 50, marginLeft:'5px' }}/>

          <List>
            {listNames.map((text, index) => (
          // !fit-content 
          <ListItem sx={{width:"fit-content"}} key={text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={text === 'Profile' ? `/profile/${userId}` : `/${text.toLowerCase()}`}
                  onClick={() => text === 'Profile' && handleProfileClick(userId)}
                  sx={{
                    borderRadius: '40px',
                    width: 'auto',
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 'auto', width: 'auto' }}>
                    {React.createElement(icons[index])}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}

            <ListItem sx={{ width: 'fit-content' }} disablePadding>
              <ListItemButton sx={{ borderRadius: '30px', width: 'auto' }}>
                <ListItemIcon sx={{ minWidth: 'auto', width: 'auto' }}>
                  <IconButton
                    onClick={handleThemeChange}
                    sx={{ color: 'inherit', padding: 0, '&:hover': { backgroundColor: 'transparent' } }}
                    disableRipple
                  >
                    {darkMode ? <Brightness7Icon /> : <Brightness6Icon />}
                  </IconButton>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>

            <PostModal open={open} setOpen={setOpen} />
          </List>
        </Box>
      ) : (
        <Box sx={fixedBar}>
          <Avatar component={Link} to="/home" alt="X" src={Logo} sx={{ width: 50, height: 50, marginLeft: '10px' }} />

          <List>
            {listNames.map((text, index) => (
              <ListItem sx={{ width: 'fit-content' }} key={text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={text === 'Profile' ? `/profile/${userId}` : `/${text.toLowerCase()}`}
                  onClick={() => text === 'Profile' && handleProfileClick(userId)}
                  sx={{ borderRadius: '30px', width: 'auto' }}
                >
                  <ListItemIcon>{React.createElement(icons[index])}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}

            <ListItem sx={{ width: 'fit-content' }} disablePadding>
              <ListItemButton sx={{ borderRadius: '30px', width: 'auto' }}>
                <ListItemIcon>
                  <Brightness6Icon />
                </ListItemIcon>
                <ListItemText primary="mode" />
                <Switch sx={{ marginLeft: '40px' }} checked={darkMode} onChange={handleThemeChange} />
              </ListItemButton>
            </ListItem>

            <PostModal open={open} setOpen={setOpen} />
          </List>
        </Box>
      )}
    </Box>
  );
};

export default LeftBar;
