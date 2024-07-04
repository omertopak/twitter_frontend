import * as React from 'react';
import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
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
import Button from '@mui/material/Button'
//icons
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PostModal from './PostModal';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
//import { useTheme } from '@mui/material/styles';


const LeftBar = () =>{

  //!changed
  // const theme = useTheme();
  // const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  //!changed

  //*MediaQuery========================
  const isSmallScreen = useMediaQuery('(max-width:1280px)');
  const [drawerOpen, setDrawerOpen] = useState(!isSmallScreen); // Küçük ekranlarda varsayılan olarak kapalı, büyük ekranlarda açık
  useEffect(() => {
    setDrawerOpen(!isSmallScreen); // Ekran boyutu değiştiğinde drawerOpen durumunu güncelle
  }, [isSmallScreen]);
  //*MediaQuery========================

    
  //*List========================
  const icons = [HomeIcon,SearchIcon,NotificationsNoneIcon,MailOutlineIcon,PersonOutlineIcon,MoreHorizIcon]
  const listNames = ['Home', 'Explore', 'Notifications', 'Messages','Profile','More']
  const [open, setOpen] = React.useState(false); // Modalın açık veya kapalı olduğunu takip etmek için bir state
  //*List========================

  
  return (
    <Box sx={{position:'relative'}}>
    
      {isSmallScreen ? 
      // todo logo
        <Box sx={fixedBar2}>
     
     
        {/* //!link to nereye yap! */}
        <Avatar component={Link} to="/" alt="X" src={Logo} sx={{ width: 50, height: 50, marginLeft:'5px' }}/>
        
       <List>
        {listNames.map((text, index) => (
          // !fit-content 
          <ListItem sx={{width:"fit-content"}} key={text} disablePadding>
            <ListItemButton 
            sx={{ 
            borderRadius: '40px',
            width:'auto',
            
        }}>
              <ListItemIcon sx={{ minWidth: 'auto', width: 'auto',
                 }}>
                {React.createElement(icons[index])} 
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
         {/* <Button  variant='contained' sx={{borderRadius:'20px',width:'100%',padding:'10px',marginTop:'5px'}} onClick={handlePostClick}>
            Post
          </Button> */}
         <PostModal  open={open} setOpen={setOpen} />
      </List> 
       </Box>
      :
      // todo logo with text
      <Box sx={fixedBar}>
     
     
      {/* //!link to nereye yap! */}
      <Avatar component={Link} to="/" alt="X" src={Logo} sx={{ width: 50, height: 50, marginLeft:'10px' }}/>
      
        <List>
        {listNames.map((text, index) => (
          // !fit-content 
          <ListItem sx={{width:"fit-content"}} key={text} disablePadding>
            <ListItemButton 
            //!onclick de adres olarak indexte ne varsa oraya gitsin istiyorum
            to={`/${text.toLowerCase()}`}
            sx={{
            borderRadius: '30px',
            width:'auto',
            
        }}>
              <ListItemIcon >
                {React.createElement(icons[index])} 
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
         {/* <Button  variant='contained' sx={{borderRadius:'20px',width:'100%',padding:'10px',marginTop:'5px'}} onClick={handlePostClick}>
            Post
          </Button> */}
         <PostModal open={open} setOpen={setOpen} />
      </List>
       </Box>
      }
     
     {/* PostModal bileşenini, post butonuna tıklandığında açılacak şekilde yerleştirin */}
    

    </Box>
  );
}



export default LeftBar;
