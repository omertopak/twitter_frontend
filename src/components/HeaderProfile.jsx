import React from 'react'
import { Avatar, Box, IconButton,Button, TextField, Typography } from '@mui/material';
import { bracketter } from '../styles/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from "../assets/logo_x.png"
import bckg from "../assets/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';
import useUserCall from '../hooks/useUserCall'

//icons
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const HeaderProfile = () => {
    // const IsLocked = true
    const isSmallScreen = useMediaQuery('(max-width:700px)');
    const {userId} = useSelector((state)=>state.auth)
    const { userInfo } = useSelector((state) => state.auth)
    const {ProfileofAnyUser} = useSelector((state)=>state.profile)
    const { count } = useSelector((state) => state.profile)


    console.log(ProfileofAnyUser);
    const  ProfilePageId  = useParams();
    // console.log("ppageid",ProfilePageId);
    // console.log("userId",userId);
    const IsUser = (userId === ProfilePageId);
    // console.log(IsUser);
    const profileInfoData = IsUser ? userInfo : ProfileofAnyUser ;

  
    
    // console.log(count);
    console.log("userinfo",userInfo?.user);
    const IsFollowing = userInfo.user.followers.includes(userId)
    const IsLocked = userInfo.user.private
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
       { IsLocked ? <LockIcon fontSize='small'/> : <LockOpenIcon/>}
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
            {IsUser ? IsFollowing ?
            <Button sx={{marginTop:'90px',marginRight:'10px',border:'1px black solid',height:'35px',borderRadius:'25px', width:'110px'}} variant='contained'>follow</Button> :
            <Button sx={{marginTop:'90px',marginRight:'10px',border:'1px black solid',height:'35px',borderRadius:'25px', width:'110px'}} variant='contained'>unfollow</Button> :
             <Box></Box>  }
            
        </Box>
        {/* details */}
      <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
        <Box sx={{display:'flex',flexDirection:'column'}}>
            <Box sx={{display:'flex',gap:'10px'}}>
                 <Typography>{userInfo?.user?.first_name} {userInfo?.user?.last_name} </Typography>
                { IsLocked ? <LockIcon fontSize='small'/> : <LockOpenIcon/>}  
            </Box>
            <Typography>{userInfo?.user?.username} </Typography>
        </Box>
            <Typography>Joined {formattedDate}</Typography>
        <Box sx={{display:'flex',gap:'15px',marginBottom:'10px'}}>
            <Typography>{userInfo?.user?.following_count} Following</Typography>
            <Typography>{userInfo?.user?.followers_count} Followers</Typography>
        </Box>
        
      </Box>
      </Box>
    </Box>

  </Box>
  )
}

export default HeaderProfile