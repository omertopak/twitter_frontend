import React from 'react'
import { Box } from '@mui/material'
import Twit from './Twit'
import Retweet from './Retweet'
import useMediaQuery from '@mui/material/useMediaQuery';
import useTweetCall from '../hooks/useTweetCall';
import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import Replied from './Replied';
import CircularProgress from '@mui/material/CircularProgress';

const Foryou = () => {

  //*INFINITIVE SCROLL
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const {tweets} = useSelector((state)=>state.tweet)
  const {userId} = useSelector((state)=>state.auth)
  const isSmallScreen = useMediaQuery('(max-width:700px)');
  const {getTimeline2} = useTweetCall()

  useEffect(() => {
  if (!tweets.length) {
    getTimeline2(); // Sayfa yenilendiğinde veri çekmek
  } else {
    setData((prevData) => [...prevData, ...tweets]);
  }
}, [tweets,page]);

useEffect(() => {
  const fetchMoreData = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 10
    ) {
      getTimeline2();
      setLoading(true);
      setPage((prevPage) => prevPage + 1); // Sayfa sayısını artır
    }
  };

  window.addEventListener('scroll', fetchMoreData);
  return () => window.removeEventListener('scroll', fetchMoreData);
}, []);

  // console.log("tweets",tweets);
  return (
    <Box sx={{
      width: isSmallScreen ? '80vw' : '610px',
      minWidth:'430px'
    }}>
      
      {data.map((tweet) => {
      const hasReposted = tweet.reposted_by && Object.keys(tweet.reposted_by).length > 0;
      const hasLiked = tweet.favorites && Object.keys(tweet.favorites).length > 0;
      const hasBookmarked = tweet.bookmarks && Object.keys(tweet.bookmarks).length > 0;
      const hasReplied = tweet.repliedTo && Object.keys(tweet.repliedTo).length > 0;

      // currentUser reposted_by içinde var mı kontrolü
      const isCurrentUserReposted =hasReposted && tweet.reposted_by.includes(userId);
      const isCurrentUserliked =hasLiked && tweet.favorites.includes(userId);
      const isCurrentUserbookmarked =hasBookmarked && tweet.bookmarks.includes(userId);
        
      // console.log(tweet.reposted_by);
      // console.log(userId);
        // console.log(isCurrentUserReposted);
        
        // bazen retweet bazen tweet olarak basmak icin sans algoritmasi
        const showAsRetweeted = Math.random() > 0.3;
        return hasReplied 
        ? <Replied 
            key={tweet._id} 
            tweet={tweet} 
            isCurrentUserReposted={isCurrentUserReposted} 
            isCurrentUserliked={isCurrentUserliked} 
            isCurrentUserbookmarked={isCurrentUserbookmarked} 
          />
        : hasReposted 
          ? (showAsRetweeted 
              ? <Retweet 
                  key={tweet._id} 
                  tweet={tweet} 
                  isCurrentUserReposted={isCurrentUserReposted} 
                  isCurrentUserliked={isCurrentUserliked} 
                  isCurrentUserbookmarked={isCurrentUserbookmarked} 
                /> 
              : <Twit 
                  key={tweet._id} 
                  tweet={tweet} 
                  isCurrentUserReposted={isCurrentUserReposted} 
                  isCurrentUserliked={isCurrentUserliked} 
                  isCurrentUserbookmarked={isCurrentUserbookmarked} 
                />
            )
          : <Twit 
              key={tweet._id} 
              tweet={tweet} 
              isCurrentUserReposted={isCurrentUserReposted} 
              isCurrentUserliked={isCurrentUserliked} 
              isCurrentUserbookmarked={isCurrentUserbookmarked} 
            />;      
    })}

    {loading &&  <Box sx={{ display: 'flex',alignItems:'center',justifyContent:'center' }}>
      <CircularProgress />
    </Box>}
    </Box>
  )
}

export default Foryou