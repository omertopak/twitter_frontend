import React from 'react'
import { Box } from '@mui/material'
import Twit from './Twit'
import Retweet from './Retweet'
import useMediaQuery from '@mui/material/useMediaQuery';
import useTweetCall from '../hooks/useTweetCall';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const MyTweets = () => {
  const isSmallScreen = useMediaQuery('(max-width:700px)');
  const {userTweets} = useTweetCall()
  const { userInfo } = useSelector((state) => state.auth)
  const userId = userInfo?.user?._id

  
  useEffect(() => {
    userTweets(userId)
  }, [])

  const {tweets} = useSelector((state)=>state.tweet)
  // console.log("tweets",tweets);
  return (
    <Box sx={{
      width: isSmallScreen ? '80vw' : '610px',
      minWidth:'430px'
    }}>
      
      {tweets.map((tweet) => {
      const hasReposted = Array.isArray(tweet.reposted_by) && tweet.reposted_by.length > 0;
      const hasReplied = tweet.repliedTo && Object.keys(tweet.repliedTo).length > 0;

      return (hasReposted || hasReplied) ? 
        <Retweet tweet={tweet} /> : 
        <Twit tweet={tweet} />;
    })}


    </Box>
  )
}

export default MyTweets