import React from 'react'
import { Box } from '@mui/material'
import Twit from './Twit'
import Retweet from './Retweet'
import useMediaQuery from '@mui/material/useMediaQuery';
import useTweetCall from '../hooks/useTweetCall';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Following = () => {

  const isSmallScreen = useMediaQuery('(max-width:700px)');
  const {getTimeline} = useTweetCall()

  useEffect(() => {
    getTimeline()
    console.log('usefect following calisti');
  }, [])
  //! FOLLOWING TWEETS BASILACAK========= ========= ========= ========= ========= ========= ========= ========= 
  const {following} = useSelector((state)=>state.tweet)
  console.log(following);
  return (
    <Box sx={{
      width: isSmallScreen ? '80vw' : '610px',
      minWidth:'430px'
    }}>
      
      {following.map((tweet) => {
  const hasReposted = tweet.reposted_by && Object.keys(tweet.reposted_by).length > 0;
  const hasReplied = tweet.repliedTo && Object.keys(tweet.repliedTo).length > 0;

  return (hasReposted || hasReplied) ? 
    <Retweet tweet={tweet} /> : 
    <Twit tweet={tweet} />;
})}

    </Box>
  )
}

export default Following