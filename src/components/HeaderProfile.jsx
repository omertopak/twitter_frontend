import React from 'react'
import { Avatar, Box, IconButton,Button, TextField, Typography } from '@mui/material';
import { bracketter } from '../styles/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from "../assets/logo_x.png"
import bckg from "../assets/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//icons
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const HeaderProfile = () => {

  const navigate = useNavigate()


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
    console.log("1",userId);
    console.log("2",userInfo);
    console.log("3",count);
    console.log("4",ProfilePageId.userId);
    
    // console.log(IsUser);
    const profileInfoData = IsUser ? userInfo.user : ProfileofAnyUser ;
    console.log("profileInfoData",profileInfoData);
  
    const IsFollowing = profileInfoData?.followers?.includes(userId)
    const IsLocked = profileInfoData?.private
    // DATE
    const createdAt = profileInfoData?.createdAt;
    const formattedDate = createdAt ? format(new Date(createdAt), 'MMMM yyyy') : '';
    
  return (
    <Box sx={{
      width: isSmallScreen ? '80vw' : '610px',
      minWidth:'430px'
    }}>
        
      <Box display='flex' sx={[bracketter,{position:'sticky',top:'0',zIndex:'1',backgroundColor: (theme) => theme.palette.background.default  }]}> 
    
        <IconButton onClick={() => navigate(-1)} sx={{margin:'5px',marginLeft:'15px'}}><ArrowBackIcon fontSize='medium'/></IconButton>
        <Box sx={{marginLeft:'15px'}}>
        <Box sx={{display:'flex'}}>
        <Typography >{profileInfoData?.first_name} {profileInfoData?.last_name}</Typography>
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
            {IsUser ? <Box></Box> : IsFollowing ?
             <Button sx={{marginTop:'90px',marginRight:'10px',border:'1px black solid',height:'35px',borderRadius:'25px', width:'110px'}} variant='contained'>unfollow</Button>:
             <Button sx={{marginTop:'90px',marginRight:'10px',border:'1px black solid',height:'35px',borderRadius:'25px', width:'110px'}} variant='contained'>follow</Button>
               }
            
        </Box>
        {/* details */}
      <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
        <Box sx={{display:'flex',flexDirection:'column'}}>
            <Box sx={{display:'flex',gap:'10px'}}>
                 <Typography>{profileInfoData?.first_name} {profileInfoData?.last_name} </Typography>
                { IsLocked ? <LockIcon fontSize='small'/> : <LockOpenIcon/>}  
            </Box>
            <Typography>{profileInfoData?.username} </Typography>
        </Box>
            <Typography>Joined {formattedDate}</Typography>
        <Box sx={{display:'flex',gap:'15px',marginBottom:'10px'}}>
            <Typography>{profileInfoData?.following_count} Following</Typography>
            <Typography>{profileInfoData?.followers_count} Followers</Typography>
        </Box>
        
      </Box>
      </Box>
    </Box>

  </Box>
  )
}

export default HeaderProfile