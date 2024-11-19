import React from "react";
import { Avatar, Box, Button, Typography, IconButton, Divider, InputBase } from "@mui/material";
import { bracketter } from "../styles/theme";
import { iconAndText2 } from "../styles/theme";
import { iconAndText3 } from "../styles/theme";
import { iconAndText4 } from "../styles/theme";
import { iconAndText5 } from "../styles/theme";
import useTweetCall from '../hooks/useTweetCall';
import ReplyTweet from './ReplyTweet';
import { useNavigate } from 'react-router-dom';
import useUserCall from '../hooks/useUserCall'

//icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BarChartIcon from "@mui/icons-material/BarChart";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import ScreenRotationAltIcon from '@mui/icons-material/ScreenRotationAlt';

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Replies from "./Replies";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from "react-redux";
import { format } from 'date-fns';
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageBox from "./ImageBox";
const TwitDetail = () => {

  const isSmallScreen = useMediaQuery('(max-width:700px)');


  const { tweetId } = useParams(); // useParams ile id'yi yakalıyoruz
  const { getOneTweet } = useTweetCall();
  const { image: profilePhoto } = useSelector((state) => state.auth);
  useEffect(() => {
    getOneTweet(tweetId)
  }, [tweetId])



  const {userId} = useSelector((state)=>state.auth)
  // tweet DATA
  const { oneTweet } = useSelector((state) => state.tweet)
  const { replies } = useSelector((state) => state.tweet)
  const updatedAt = oneTweet?.createdAt;
  const formattedDateWithTime = updatedAt ? format(new Date(updatedAt), 'dd MMMM yyyy, hh:mm a') : '';
  // HandleData
  const [open, setOpen] = React.useState(false);
  const { reTweet,tweetLike,bookmark } = useTweetCall()
  const navigate = useNavigate()
  const {getUser} = useUserCall()
  // Currenusercheck
  const hasReposted = oneTweet.reposted_by && Object.keys(oneTweet.reposted_by).length > 0;
  const hasLiked = oneTweet.favorites && Object.keys(oneTweet.favorites).length > 0;
  const hasBookmarked = oneTweet.bookmarks && Object.keys(oneTweet.bookmarks).length > 0;
  const isCurrentUserReposted =hasReposted && oneTweet.reposted_by.includes(userId);
  const isCurrentUserliked =hasLiked && oneTweet.favorites.includes(userId);
  const isCurrentUserbookmarked =hasBookmarked && oneTweet.bookmarks.includes(userId);
  
  
  
  //!handle avatarda user id yi al
  const handleAvatarClick = (userId2) => {
    navigate(`/profile/${userId2}`); 
    getUser(userId2)
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
  
  const { pushreply } = useTweetCall();
  const [tweet, setTweet] = useState('');
  
  const handleReply = (id) => {
    const formData = new FormData();
    formData.append('tweetId', id);
    formData.append('tweet', tweet);
    formData.append('image', []);
    pushreply(id, formData)
    .then(() => {
      setTweet(''); // Alanı sıfırlayın
      getOneTweet(id); // Güncellenmiş tweet'i çekin
    })
    .catch((error) => console.error("Error posting reply:", error));
  }
  
  
  console.log("replies",replies);
  console.log("onetweet",oneTweet);

  return (
    <Box sx={{
      width: isSmallScreen ? '80vw' : '610px',
      minWidth: '430px'
    }}>
      <Box
        display="flex"
        sx={[
          bracketter,
          {
            backgroundColor: (theme) => theme.palette.background.default,
            position: "sticky",
            top: "0",
            zIndex: "1",
            alignItems: "center",
          },
        ]}
      >
        <IconButton onClick={() => navigate(-1)} sx={{ margin: "5px", marginLeft: "15px" }}>
          <ArrowBackIcon fontSize="medium" />
        </IconButton>
        <Typography sx={{ marginLeft: "15px" }}>Post</Typography>
      </Box>

      <Box sx={[{ display: "flex" }, bracketter]}>
        {/* //!avatari ekle */}
        <Avatar
          alt="X"
          src={profilePhoto}
          sx={{ width: "2rem", height: "2rem", margin: "1rem" }}
        />
        <Box>
          <Typography variant="subtitle1" component="h6">
            {oneTweet?.user?.first_name}  {oneTweet?.user?.last_name}
          </Typography>
          <Typography variant="subtitle1" component="h6" color="gray">
            @{oneTweet?.user?.username}
          </Typography>
        </Box>
      </Box>
      <Box sx={[{ justifyContent: "space-evenly", position: 'relative' }, bracketter]} padding={2}>
        <Typography sx={{ fontSize: '9px', position: 'absolute', top: '1px', right: '10px', color: 'grey' }}>{formattedDateWithTime}</Typography>
        <Typography sx={{width: '100%',marginBottom:'10px',
          overflowWrap: 'break-word', // Uzun kelimeleri böl ve alt satıra geç
          whiteSpace: 'normal', marginTop: '10px' }}>
          {oneTweet?.tweet}
        </Typography>
          <ImageBox images={oneTweet?.images || []} />
        <Divider sx={{ marginTop: '18px', marginBottom: '8px' }} />


        {/* ============= icons*/}


        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <ReplyTweet open={open} setOpen={setOpen} tweetData={oneTweet} />
          <Button onClick={() => handleRetweet(oneTweet._id)} sx={iconAndText2}>
            <ScreenRotationAltIcon sx={{ color: isCurrentUserReposted ? '#00BA7C' : 'gray' }} fontSize='small'></ScreenRotationAltIcon>
            <Typography sx={{ color: isCurrentUserReposted ? '#00BA7C' : 'gray' }}>{oneTweet?.repost_count}</Typography>
          </Button>

          <Button onClick={() => handleLike(oneTweet._id)} sx={[iconAndText3, { color: isCurrentUserliked ? '#F9197F' : 'gray' }]}>
            <FavoriteBorderIcon fontSize='small'></FavoriteBorderIcon>
            <Typography sx={{ color: isCurrentUserliked ? '#F9197F' : 'gray' }}>{oneTweet?.favorite_count}</Typography>
          </Button>
          <Button sx={iconAndText4}>
            <BarChartIcon fontSize='small'></BarChartIcon>
            <Typography >{oneTweet?.tweet_view_count}</Typography>
          </Button>
          <Box>
            <Button onClick={() => handleBookmark(oneTweet._id)} sx={[iconAndText5, { color: isCurrentUserReposted ? '#188CD8' : 'gray' }]}>
              <TurnedInNotIcon sx={{ color: isCurrentUserbookmarked ? '#188CD8' : 'gray' }} fontSize='small'></TurnedInNotIcon>
            </Button>
          </Box>
        </Box>

        {/* =============icons end */}

        <Divider sx={{ marginBottom: '8px' }} />
        <Box sx={{ display: 'flex' }}>
          <Avatar
            alt="X"
            src={profilePhoto}
            sx={{ width: "2rem", height: "2rem", margin: "1rem" }}
          />
          <InputBase 
          placeholder="Post your reply" 
          value={tweet} 
          onChange={(e) => setTweet(e.target.value)}
          sx={{ width: '80%' }} 
          />
          <Button onClick={() => handleReply(oneTweet._id)} variant='contained' sx={{backgroundColor: '#188CD8',  borderRadius: '20px', margin: '10px', justifyContent: 'flex-end' }}>
            Reply
          </Button>
        </Box>
      </Box >

      <Box sx={[{ display: "flex" }, bracketter]}>
        <Replies replies={replies}/>
      </Box>
    </Box>
  );
};

export default TwitDetail;

// tweet:
// image:
// user:
// repliedTo:
// replies:
// reply_count:
// reposted_by:
// repost_count:
// tweet_viewers:
// tweet_view_count:
// favorites:
// favorite_count:
