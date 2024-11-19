import React from 'react'
import { Avatar, Box, IconButton,Button, TextField, Typography } from '@mui/material';
import { bracketter } from '../styles/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from "../assets/logo_x.png"
import background from "../assets/bacgroundimage.jpeg"
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useUserCall from '../hooks/useUserCall';
import { useEffect } from 'react';
import { useState } from 'react';
//icons
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const HeaderProfile = () => {

  const navigate = useNavigate()
  const {getUser} = useUserCall()
  
  // const IsLocked = true
  const isSmallScreen = useMediaQuery('(max-width:700px)');
  const {userId} = useSelector((state)=>state.auth)
  const {ProfileofAnyUser} = useSelector((state)=>state.profile)
  const { count } = useSelector((state) => state.profile)

  const  ProfilePageId  = useParams();
  
  const IsUser = (userId === ProfilePageId.userId);
  
  

  const IsFollowing = ProfileofAnyUser?.followers?.includes(userId)
  const IsLocked = ProfileofAnyUser?.private
  // DATE
  const createdAt = ProfileofAnyUser?.createdAt;
  const formattedDate = createdAt ? format(new Date(createdAt), 'MMMM yyyy') : '';
  // FOLLOW-UNFOLOW
  const { userFollow } = useUserCall();
  

  let updateUser
  if (IsUser){
    updateUser = userId
  }else{
    updateUser = ProfilePageId.userId
  }
  const [triggerEffect, setTriggerEffect] = useState(false);
  // useEffect, triggerEffect state'ine bağımlıdır
  useEffect(() => {
    getUser(updateUser)
    if (triggerEffect) {
      getUser(updateUser)
    }
    // useEffect çalıştıktan sonra triggerEffect'i tekrar false yapıyoruz
    setTriggerEffect(false);  // Her tıklamada tetiklenmesini sağlamak için sıfırlıyoruz
  }, [triggerEffect]);  // triggerEffect ve count değişince çalışır

  const follow = (id) => {
    userFollow(id)
    setTriggerEffect(true);
  };
  
  return (
    <Box sx={{
      width: isSmallScreen ? '80vw' : '610px',
      minWidth:'430px'
    }}>
        
      <Box display='flex' sx={[bracketter,{position:'sticky',top:'0',zIndex:'1',backgroundColor: (theme) => theme.palette.background.default  }]}> 
    
        <IconButton onClick={() => navigate(-1)} sx={{margin:'5px',marginLeft:'15px'}}><ArrowBackIcon fontSize='medium'/></IconButton>
        <Box sx={{marginLeft:'15px'}}>
        <Box sx={{display:'flex'}}>
        <Typography >{ProfileofAnyUser?.first_name} {ProfileofAnyUser?.last_name}</Typography>
       { IsLocked ? <LockIcon fontSize='small'/> : <LockOpenIcon/>}
        </Box>
        <Typography>{count} posts</Typography>
         </Box>
      </Box>

    <Box sx={[{display:'flex',flexDirection:'column'},bracketter]}>
        {/* background */}
         <Box sx={{height:'200px', alignContent:'center',overflow:'clip'}}>
         <img
            src={background}
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
            <Avatar alt="X" src={ProfileofAnyUser.image} sx={{ width: '120px', height: '120px', margin:'1rem',border:'1px black solid',backgroundColor:'black' }}/>
            {IsUser ? <Box></Box> : IsFollowing ?
             <Button onClick={() => follow(ProfileofAnyUser._id)} sx={{background:"#188CD8",marginTop:'90px',marginRight:'10px',border:'1px black solid',height:'35px',borderRadius:'25px', width:'110px'}} variant='contained'>unfollow</Button>:
             <Button onClick={() => follow(ProfileofAnyUser._id)} sx={{background:"#188CD8",marginTop:'90px',marginRight:'10px',border:'1px black solid',height:'35px',borderRadius:'25px', width:'110px'}} variant='contained'>follow</Button>
               }
            
        </Box>
        {/* details */}
      <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
        <Box sx={{display:'flex',flexDirection:'column'}}>
            <Box sx={{display:'flex',gap:'10px'}}>
                 <Typography>{ProfileofAnyUser?.first_name} {ProfileofAnyUser?.last_name} </Typography>
                { IsLocked ? <LockIcon fontSize='small'/> : <LockOpenIcon/>}  
            </Box>
            <Typography>{ProfileofAnyUser?.username} </Typography>
        </Box>
            <Typography>Joined {formattedDate}</Typography>
        <Box sx={{display:'flex',gap:'15px',marginBottom:'10px'}}>
            <Typography>{ProfileofAnyUser?.following_count} Following</Typography>
            <Typography>{ProfileofAnyUser?.followers_count} Followers</Typography>
        </Box>
        
      </Box>
      </Box>
    </Box>

  </Box>
  )
}

export default HeaderProfile