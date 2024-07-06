import React from 'react'
import { Avatar, Box, IconButton,Button, TextField, Typography } from '@mui/material';
import { bracketter } from '../styles/theme';

import logo from "../assets/logo_x.png"
import bckg from "../assets/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"

//icons
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useMediaQuery from '@mui/material/useMediaQuery';

const HeaderProfile = () => {
    const private2 = true
    const isSmallScreen = useMediaQuery('(max-width:700px)');

  return (
    <Box sx={{
      width: isSmallScreen ? '80vw' : '610px',
      minWidth:'430px'
    }}>
        
      <Box display='flex' sx={[bracketter,{backgroundColor:'white',position:'sticky',top:'0',zIndex:'1'}]}> 
    
        <IconButton sx={{margin:'5px',marginLeft:'15px'}}><ArrowBackIcon fontSize='medium'/></IconButton>
        <Box sx={{marginLeft:'15px'}}>
        <Box sx={{display:'flex'}}>
        <Typography >Omer Topak</Typography>
       { private2 ? <LockIcon fontSize='small'/> : <LockOpenIcon/>}
        </Box>
        <Typography>30 posts</Typography>
         </Box>
      </Box>

    <Box sx={[{display:'flex',flexDirection:'column'},bracketter]}>
        {/* background */}
         <Box sx={{height:'200px', alignContent:'center',overflow:'clip'}}>
         <img
            src={bckg}
            alt="xLogo"
            width="maxWidth"
            style={{ 
            display: "inline-block", 
            width: '100%',
        }}  />
        </Box>   
        {/* pp */}
        <Box sx={{marginLeft:'20px'}}>
        <Box sx={{marginTop:'-80px',marginLeft:'-20px',display:'flex',justifyContent:'space-between'}}> 
            <Avatar alt="X" src={logo} sx={{ width: '120px', height: '120px', margin:'1rem',border:'1px black solid',backgroundColor:'black' }}/>
            {private2 ?
            <Button sx={{marginTop:'90px',marginRight:'10px',border:'1px black solid',height:'35px',borderRadius:'25px', width:'110px'}} variant='contained'>follow</Button> : 
            <Button sx={{marginTop:'90px',marginRight:'10px',border:'1px black solid',height:'35px',borderRadius:'25px', width:'110px'}} variant='contained'>unfollow</Button> }
            
        </Box>
        {/* details */}
      <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
        <Box sx={{display:'flex',flexDirection:'column'}}>
            <Box sx={{display:'flex',gap:'10px'}}>
                 <Typography>Omer topak</Typography>
                { private2 ? <LockIcon fontSize='small'/> : <LockOpenIcon/>}  
            </Box>
            <Typography>username Omer topak</Typography>
        </Box>
            <Typography>Joined july 2016</Typography>
        <Box sx={{display:'flex',gap:'15px',marginBottom:'10px'}}>
            <Typography>356 following</Typography>
            <Typography>356 followers</Typography>
        </Box>
        
      </Box>
      </Box>
    </Box>

  </Box>
  )
}

export default HeaderProfile