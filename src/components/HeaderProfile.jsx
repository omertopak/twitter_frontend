import React from 'react'
import { Avatar, Box, IconButton,Button, TextField, Typography } from '@mui/material';
import { bracketter } from '../styles/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from "../assets/logo_x.png"
import bckg from "../assets/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
import { useSelector } from 'react-redux';
import { format } from 'date-fns';


//icons
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const HeaderProfile = () => {
    const private2 = true
    const isSmallScreen = useMediaQuery('(max-width:700px)');
    const { userInfo } = useSelector((state) => state.auth)
    const { count } = useSelector((state) => state.profile)
    // console.log(count);
    console.log("userinfo",userInfo?.user);

    // DATE
    const createdAt = userInfo?.user?.createdAt;
    const formattedDate = createdAt ? format(new Date(createdAt), 'MMMM yyyy') : '';

  return (
    <Box sx={{
      width: isSmallScreen ? '80vw' : '610px',
      minWidth:'430px'
    }}>
        
      <Box display='flex' sx={[bracketter,{backgroundColor:'white',position:'sticky',top:'0',zIndex:'1'}]}> 
    
        <IconButton sx={{margin:'5px',marginLeft:'15px'}}><ArrowBackIcon fontSize='medium'/></IconButton>
        <Box sx={{marginLeft:'15px'}}>
        <Box sx={{display:'flex'}}>
        <Typography >{userInfo?.user?.first_name} {userInfo?.user?.last_name}</Typography>
       { private2 ? <LockIcon fontSize='small'/> : <LockOpenIcon/>}
        </Box>
        <Typography>{count} posts</Typography>
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
                 <Typography>{userInfo?.user?.first_name} {userInfo?.user?.last_name} </Typography>
                { private2 ? <LockIcon fontSize='small'/> : <LockOpenIcon/>}  
            </Box>
            <Typography>{userInfo?.user?.username} </Typography>
        </Box>
            <Typography>Joined {formattedDate}</Typography>
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