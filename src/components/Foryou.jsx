import React from 'react'
import { Box } from '@mui/material'
import Twit from './Twit'
import Retweet from './Retweet'
import useMediaQuery from '@mui/material/useMediaQuery';
import useTweetCall from '../hooks/useTweetCall';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Foryou = () => {

  const isSmallScreen = useMediaQuery('(max-width:700px)');
  const {getTimeline2} = useTweetCall()

  useEffect(() => {
    getTimeline2()
    console.log('useefect calisti');
  }, [])

  const {tweets} = useSelector((state)=>state.tweet)
  const {userId} = useSelector((state)=>state.auth)
  // console.log("tweets",tweets);
  return (
    <Box sx={{
      width: isSmallScreen ? '80vw' : '610px',
      minWidth:'430px'
    }}>
      
      {tweets.map((tweet) => {
      const hasReposted = Array.isArray(tweet.reposted_by) && tweet.reposted_by.length > 0;
      const hasReplied = tweet.repliedTo && Object.keys(tweet.repliedTo).length > 0;

      // currentUser reposted_by içinde var mı kontrolü
      const isCurrentUserReposted =hasReposted && tweet.reposted_by.includes(userId);
      // console.log(tweet.reposted_by);
      // console.log(userId);
        console.log(isCurrentUserReposted);

      return (hasReposted || hasReplied) ? 
        <Retweet tweet={tweet} isCurrentUserReposted={isCurrentUserReposted}/> : 
        <Twit tweet={tweet} isCurrentUserReposted={isCurrentUserReposted}/>;
    })}


    </Box>
  )
}

export default Foryou