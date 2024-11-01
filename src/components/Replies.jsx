import React from 'react'
import { Box } from '@mui/material'
import Twit from './Twit'
import { useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';


const Replies = () => {
  const {userId} = useSelector((state)=>state.auth)
  const {replies} = useSelector((state)=>state.tweet)
  const isSmallScreen = useMediaQuery('(max-width:700px)');
  return (
    <Box sx={{
      width: isSmallScreen ? '80vw' : '610px',
      minWidth:'430px'
    }}>
      
      {replies?.map((tweet) => {
      const hasReposted = tweet.reposted_by && Object.keys(tweet.reposted_by).length > 0;
      const hasLiked = tweet.favorites && Object.keys(tweet.favorites).length > 0;
      const hasBookmarked = tweet.bookmarks && Object.keys(tweet.bookmarks).length > 0;
      const hasReplied = tweet.repliedTo && Object.keys(tweet.repliedTo).length > 0;

      // currentUser reposted_by içinde var mı kontrolü
      const isCurrentUserReposted =hasReposted && tweet.reposted_by.includes(userId);
      const isCurrentUserliked =hasLiked && tweet.favorites.includes(userId);
      const isCurrentUserbookmarked =hasBookmarked && tweet.bookmarks.includes(userId);
      
      return (
        <Twit
          key={tweet._id}
          tweet={tweet}
          isCurrentUserReposted={isCurrentUserReposted}
          isCurrentUserliked={isCurrentUserliked}
          isCurrentUserbookmarked={isCurrentUserbookmarked}
        />
      );      
    })}


    </Box>
  )
};

export default Replies;
