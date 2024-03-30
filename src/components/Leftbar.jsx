import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo_x.png'

//icons
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const LeftBar = () =>{
  const icons = [HomeIcon,SearchIcon,NotificationsNoneIcon,MailOutlineIcon,PersonOutlineIcon,MoreHorizIcon]

  const listNames = ['Home', 'Explore', 'Notifications', 'Messages','Profile','More']
  return (
    <div>
      <Toolbar /> 
      {/* //!linkto nereye yap! */}
      <Avatar component={Link} to="/" alt="X" src={Logo} sx={{ width: 50, height: 50 }}/>
      <List>
        {listNames.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {React.createElement(icons[index])} 
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}



export default LeftBar;
