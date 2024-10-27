import React from 'react'
import { Avatar, Box, Button, Typography, IconButton, Snackbar,Alert } from '@mui/material';
import { bracketter } from '../styles/theme';
import { iconAndText2 } from '../styles/theme';
import { iconAndText3 } from '../styles/theme';
import { iconAndText4 } from '../styles/theme';
import { iconAndText5 } from '../styles/theme';
import { iconAndText6 } from '../styles/theme';
import ImageBox from './ImageBox';

//icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartIcon from '@mui/icons-material/BarChart';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import IosShareIcon from '@mui/icons-material/IosShare';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ScreenRotationAltIcon from '@mui/icons-material/ScreenRotationAlt';

//calls
import useTweetCall from '../hooks/useTweetCall';
import ReplyTweet from './ReplyTweet';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Replied = ({tweet,isCurrentUserReposted,isCurrentUserliked,isCurrentUserbookmarked}) => {
  const [open, setOpen] = React.useState(false);
  const { reTweet,tweetLike,bookmark } = useTweetCall()
  const navigate = useNavigate()
  // console.log(isCurrentUserReposted);
  

  const handleAvatarClick = (userId) => {
    navigate(`/profile/${userId}`);  
  };

  const handleRetweet=(id)=> {
    reTweet(id)
    
  }
  const handleLike=(id)=> {
    tweetLike(id)
    
  }
  const handleBookmark=(id)=> {
    bookmark(id)
  }

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleCopyLink = (id) => {
    const tweetLink = `https://example.com/tweet/${id}`; // Her tweet için benzersiz bir link oluştur
    navigator.clipboard.writeText(tweetLink)
      .then(() => {
        console.log('Tweet linki panoya kopyalandı!',tweetLink);
      })
      .catch((err) => {
        console.error('Kopyalama işlemi başarısız oldu: ', err);
      });
      setOpenSnackbar(true);
  };
  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={[{display:'flex'},bracketter]}>
      <Box > 
        {/* //!avatari ekle */}
        <Avatar onClick={() => handleAvatarClick(tweet?.user?._id)} alt="X" src={tweet.user?.image} sx={{ width: '2rem', height: '2rem', margin:'1rem' }}/>
      </Box>
      <Box  sx={{justifyContent:'space-evenly',width:'90%'}} padding={2}>       
        <Box display='flex' justifyContent='space-between'>
          <Box sx={{display:'flex'}}>
          <Typography variant="subtitle1" component="h6">{tweet.user?.first_name}</Typography>
          <Typography variant="subtitle1" component="h6" color='gray'>{tweet.user?.username}</Typography>
          </Box> 
        <IconButton>
            <MoreHorizIcon fontSize='small'></MoreHorizIcon>
        </IconButton>
        </Box>
        <ImageBox images={tweet?.images || 0}/>
        <Typography 
        sx={{
          width: '100%',
          overflowWrap: 'break-word', // Uzun kelimeleri böl ve alt satıra geç
          whiteSpace: 'normal',       // Normal satır akışını kullan
        }}>{tweet?.tweet}</Typography>
        
        {/* //?ALINTI KISIM */}
        <Box sx={{display:'flex',border:1,borderColor:'grey.500',borderRadius:'16px', margin:'2'}}>
        <Box > 
            <Avatar alt="X" src={tweet?.repliedTo?.user?.image} sx={{ width: '2rem', height: '2rem', margin:'1rem' }}/>
        </Box>
      <Box  sx={[{justifyContent:'space-evenly'}]} padding={1}>
       
        <Box sx={{display:'flex',justifyContent:'space-between'}} >
          <Box sx={{display:'flex'}}>
          <Typography variant="subtitle1" component="h6">{tweet?.repliedTo?.user?.first_name}</Typography>
          <Typography variant="subtitle1" component="h6" color='gray'>@{tweet?.repliedTo?.user?.username}</Typography>
          </Box> 
        </Box>
        <ImageBox images={tweet?.repliedTo?.images || 0}/>
        <Typography 
          sx={{ 
            width: '100%', 
            overflowWrap: 'break-word',  // Uzun kelimeleri böler ve alt satıra geçirir
            whiteSpace: 'normal',        // Metni sar ve doğal satır geçişini sağla
            wordBreak: 'break-word',     // Kelime uzunluğunda kırılmayı zorla
          }}
>
  {tweet?.repliedTo?.tweet}
</Typography>

        </Box>
        
        </Box>

        {/* //? IconButtons */}
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
        <ReplyTweet  open={open} setOpen={setOpen} tweetData={tweet}/>
            <Button onClick={() => handleRetweet(tweet._id)} sx={iconAndText2}>
                    <ScreenRotationAltIcon  sx={{color: isCurrentUserReposted ? '#00BA7C' : 'gray'}}  fontSize='small'></ScreenRotationAltIcon>
                <Typography sx={{color: isCurrentUserReposted ? '#00BA7C' : 'gray'}}>{tweet?.repost_count}</Typography>
            </Button>

            <Button onClick={() => handleLike(tweet._id)} sx={[iconAndText3,{color: isCurrentUserliked ? '#F9197F' : 'gray'}]}>
                    <FavoriteBorderIcon fontSize='small'></FavoriteBorderIcon>
                <Typography sx={{color: isCurrentUserliked ? '#F9197F' : 'gray'}}>{tweet?.favorite_count}</Typography>
            </Button>
            <Button sx={iconAndText4}>
                    <BarChartIcon fontSize='small'></BarChartIcon>
                    <Typography >{tweet?.tweet_view_count}</Typography>
            </Button>
        <Box>
        <Button onClick={() => handleBookmark(tweet._id)} sx={[iconAndText5,{color: isCurrentUserReposted ? '#188CD8' : 'gray'}]}>
            <TurnedInNotIcon sx={{color: isCurrentUserbookmarked ? '#188CD8' : 'gray'}} fontSize='small'></TurnedInNotIcon><Typography></Typography>
        </Button>
        <Button sx={iconAndText6} onClick={() => handleCopyLink(tweet._id)}>
            <IosShareIcon fontSize='small' ></IosShareIcon><Typography></Typography>
        </Button>
        </Box>
        </Box>
        <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%', color:'white',backgroundColor:'#188CD8' }}>
          Copied to Clipboard!
        </Alert>
        </Snackbar>
      </Box>
      
  </Box>
  )
}

export default Replied
