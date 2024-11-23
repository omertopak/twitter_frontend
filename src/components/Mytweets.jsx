import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Twit from './Twit';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTweetCall from '../hooks/useTweetCall';
import { useSelector } from 'react-redux';
import Replied from './Replied';
import { useParams } from 'react-router-dom';

const MyTweets = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const isSmallScreen = useMediaQuery('(max-width:700px)');
  const { userTweets } = useTweetCall();
  const { userId } = useSelector((state) => state.auth);
  const { AnyUserTweets = [] } = useSelector((state) => state.profile || {});
  const ProfilePageId = useParams();
  const IsUser = userId === ProfilePageId.userId;
  const profileInfoData = IsUser ? userId : ProfilePageId.userId;

  // Profil değiştiğinde veri çekme ve sayfa sıfırlama
  useEffect(() => {
    setPage(1);
    userTweets(profileInfoData); // Profil değiştiğinde yeni veriyi çek
  }, [profileInfoData, userTweets]);

  // Infinite scroll işlevi
  useEffect(() => {
    const fetchMoreData = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 10
      ) {
        setLoading(true);
        setPage((prevPage) => prevPage + 1); // Sayfa sayısını artır
      }
    };

    window.addEventListener('scroll', fetchMoreData);
    return () => window.removeEventListener('scroll', fetchMoreData);
  }, []);

  // Sayfa değiştikçe yeni veriyi Redux'tan al
  useEffect(() => {
    if (AnyUserTweets.length > 0) {
      setLoading(false); // Veriler geldiyse loading'i kapat
    }
  }, [AnyUserTweets]);

  // Yalnızca yeni veriler geldiyse render et
  const tweetsToDisplay = AnyUserTweets.slice(0, page * 10); // 10'lu gruplar halinde yükleme

  return (
    <Box sx={{
      width: isSmallScreen ? '80vw' : '610px',
      minWidth: '430px'
    }}>
      {tweetsToDisplay.length === 0 ? (
        <div>No tweets available</div>
      ) : (
        tweetsToDisplay.map((tweet) => {
          const hasReposted = tweet.reposted_by && Object.keys(tweet.reposted_by).length > 0;
          const hasLiked = tweet.favorites && Object.keys(tweet.favorites).length > 0;
          const hasBookmarked = tweet.bookmarks && Object.keys(tweet.bookmarks).length > 0;
          const hasReplied = tweet.repliedTo && Object.keys(tweet.repliedTo).length > 0;

          // currentUser reposted_by içinde var mı kontrolü
          const isCurrentUserReposted = hasReposted && tweet.reposted_by.includes(userId);
          const isCurrentUserliked = hasLiked && tweet.favorites.includes(userId);
          const isCurrentUserbookmarked = hasBookmarked && tweet.bookmarks.includes(userId);

          return hasReplied ? (
            <Replied
              key={tweet._id}
              tweet={tweet}
              isCurrentUserReposted={isCurrentUserReposted}
              isCurrentUserliked={isCurrentUserliked}
              isCurrentUserbookmarked={isCurrentUserbookmarked}
            />
          ) : (
            <Twit
              key={tweet._id}
              tweet={tweet}
              isCurrentUserReposted={isCurrentUserReposted}
              isCurrentUserliked={isCurrentUserliked}
              isCurrentUserbookmarked={isCurrentUserbookmarked}
            />
          );
        })
      )}

      {loading && <div>Loading...</div>}
    </Box>
  );
};

export default MyTweets;
