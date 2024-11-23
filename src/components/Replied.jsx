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
import ScreenRotationAltIcon from '@mui/icons-material/ScreenRotationAlt';

//calls
import useTweetCall from '../hooks/useTweetCall';
import ReplyTweet from './ReplyTweet';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useUserCall from '../hooks/useUserCall'

const Replied = ({tweet,isCurrentUserReposted,isCurrentUserliked,isCurrentUserbookmarked}) => {

  //STATE YONETIMI
  const [liked, setLiked] = useState(isCurrentUserliked);
  const [reposted, setReposted] = useState(isCurrentUserReposted);
  const [bookmarked, setBookmarked] = useState(isCurrentUserbookmarked);
  const [likeCount, setLikeCount] = useState(tweet.favorite_count);
  const [repostCount, setRepostCount] = useState(tweet.repost_count);
  const [bookmarkCount, setBookmarkCount] = useState(tweet.bookmark_count);


  const [open, setOpen] = React.useState(false);
  const { reTweet,tweetLike,bookmark } = useTweetCall()
  const navigate = useNavigate()
  const {getUser} = useUserCall()
  const {getOneTweet} = useTweetCall()

  const handleAvatarClick = (event,userId) => {
    event.stopPropagation();
    navigate(`/profile/${userId}`);  
    getUser(userId)
  };

  const handleRetweet=(event,id)=> {
    event.stopPropagation();
    reTweet(id)
    setReposted(prev => !prev); 
    setRepostCount(prev => reposted ? prev - 1 : prev + 1);
  }
  const handleLike=(event,id)=> {
    event.stopPropagation();
    tweetLike(id)
    setLiked(prev => !prev); 
    setLikeCount(prev => liked ? prev - 1 : prev + 1); 
  }
  const handleBookmark=(event,id)=> {
    event.stopPropagation();
    bookmark(id)
    setBookmarked(prev => !prev);
    setBookmarkCount(prev => bookmarked ? prev - 1 : prev + 1);
  }

  const handleTweet = (id) => {
    getOneTweet(id)
    navigate(`/${id}`) 

  }
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleCopyLink = (event,id) => {
    event.stopPropagation();
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
    <Box onClick={() => handleTweet(tweet?._id)} sx={[{display:'flex'},bracketter]}>
      <Box > 
        {/* //!avatari ekle */}
        <Avatar onClick={(e) => handleAvatarClick(e,tweet?.user?._id)} alt="X" src={tweet.user?.image} sx={{ width: '2rem', height: '2rem', margin:'1rem' }}/>
      </Box>
      <Box  sx={{justifyContent:'space-evenly',width:'90%'}} padding={2}>       
        <Box display='flex' justifyContent='space-between'>
          <Box sx={{display:'flex',gap:1}}>
          <Typography variant="subtitle1" component="h6">{tweet.user?.first_name}</Typography>
          <Typography variant="subtitle1" component="h6" color='gray'>@{tweet.user?.username}</Typography>
          </Box> 
        </Box>
       
        <Typography 
        sx={{
          width: '100%',
          overflowWrap: 'break-word', // Uzun kelimeleri böl ve alt satıra geç
          marginBottom:'10px',
          whiteSpace: 'normal',       // Normal satır akışını kullan
        }}>{tweet?.tweet}</Typography>
         <ImageBox images={tweet?.images || 0}/>


        {/* //?ALINTI KISIM */}
        <Box sx={{display:'flex',border:1,borderColor:'grey.500',borderRadius:'16px', margin:'2', marginTop:'10px',marginBottom:'10px'}}>
        <Box > 
            <Avatar alt="X" src={tweet?.repliedTo?.user?.image} sx={{ width: '2rem', height: '2rem', margin:'1rem' }}/>
        </Box>
      <Box  sx={[{justifyContent:'space-evenly'}]} padding={1}>
       
        <Box sx={{display:'flex',justifyContent:'space-between'}} >
          <Box sx={{display:'flex', gap:1}}>
          <Typography variant="subtitle1" component="h6">{tweet?.repliedTo?.user?.first_name}</Typography>
          <Typography variant="subtitle1" component="h6" color='gray'>@{tweet?.repliedTo?.user?.username}</Typography>
          </Box> 
        </Box>
        
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
        <ImageBox images={tweet?.repliedTo?.images || 0}/>
        </Box>
        
        </Box>

        {/* //? IconButtons */}
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
        <ReplyTweet  open={open} setOpen={setOpen} tweetData={tweet}/>
            <Button onClick={(e) => handleRetweet(e,tweet._id)} sx={iconAndText2}>
                    <ScreenRotationAltIcon  sx={{color: reposted ? '#00BA7C' : 'gray'}}  fontSize='small'></ScreenRotationAltIcon>
                <Typography sx={{color: reposted ? '#00BA7C' : 'gray'}}>{tweet?.repost_count}</Typography>
            </Button>

            <Button onClick={(e) => handleLike(e,tweet._id)} sx={[iconAndText3,{color: liked ? '#F9197F' : 'gray'}]}>
                    <FavoriteBorderIcon fontSize='small'></FavoriteBorderIcon>
                <Typography sx={{color: liked ? '#F9197F' : 'gray'}}>{tweet?.favorite_count}</Typography>
            </Button>
            <Button onClick={(e) => e.stopPropagation()} sx={iconAndText4}>
                    <BarChartIcon fontSize='small'></BarChartIcon>
                    <Typography >{tweet?.tweet_view_count}</Typography>
            </Button>
        <Box>
        <Button onClick={(e) => handleBookmark(e,tweet._id)} sx={[iconAndText5,{color: bookmarked ? '#188CD8' : 'gray'}]}>
            <TurnedInNotIcon sx={{color: isCurrentUserbookmarked ? '#188CD8' : 'gray'}} fontSize='small'></TurnedInNotIcon><Typography></Typography>
        </Button>
        <Button sx={iconAndText6} onClick={(e) => handleCopyLink(e,tweet._id)}>
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
