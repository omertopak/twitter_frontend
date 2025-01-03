import { fetchFail, fetchStart, getDataSuccess,getOneTweetSuccess,getMyDataSuccess } from '../features/tweetSlice'
import {getProfileDataSuccess,getProfileUserDataSuccess} from '../features/profileSlice'

import { useDispatch } from 'react-redux'
import useAxios from './useAxios'
// import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify'
import { useNavigate } from "react-router-dom"

const useTweetCall = () => {
  const dispatch = useDispatch()
  const { axiosPublic, axiosWithToken } = useAxios()
  const navigate = useNavigate()
 

  const getOneTweet = async (tweetId) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken.get(`/tweets/${tweetId}/`)
      // console.log("backendden gelen datamiz",data);
      dispatch(getOneTweetSuccess({ data }))
      
    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      //..
      // toastErrorNotify("HATA")
    }
  }
  
  const newTweet = async (data) => {
    dispatch(fetchStart())
    // console.log("1");
    try {
      // console.log("2");

      const response = await axiosWithToken.post(`/tweets/`,data,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      // getTweet("blogs")
      // navigate("/home")
      const formData = {
        tweet: data.get('tweet'),
        img: data.get('image')
      };
      // console.log("3",formData);


    } catch (error) {
      dispatch(fetchFail())
      console.error("Error:", error);
    }
  }
  const getTimeline = async () => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken.get(`/tweets/timeline/`)
      // console.log('tweetcall');
      // console.log('data',data);
      dispatch(getMyDataSuccess({ data }))

    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      // toastErrorNotify("HATA")
    }
  }
  const getTimeline2 = async () => {
    dispatch(fetchStart())
    try {
      // console.log('start');
      const { data } = await axiosWithToken.get('/tweets/timeline2/')
      // console.log('end');
      dispatch(getDataSuccess({ data }))
    } catch (error) {
      dispatch(fetchFail())
    }
  }

  
  //!Profile page
  
  const userTweets = async (userId) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken.get(`tweets/user/${userId}`)
      dispatch(getProfileUserDataSuccess({ data }))
    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      // toastErrorNotify("Error!")
    }
  }

  const pushreply = async (tweetId,data) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.post(`/tweets/${tweetId}`,data,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

    } catch (error) {
      dispatch(fetchFail())
      // toastErrorNotify("Error!")
    }
  }

  const reTweet = async (tweetId) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.put(`/tweets/${tweetId}/`)
    } catch (error) {
      dispatch(fetchFail())
    }
  }

  const del = async (tweetId) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.delete(`/tweets/${tweetId}/`)

    } catch (error) {
      dispatch(fetchFail())
    }
  }

  const tweetLike = async (tweetId) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.put(`/tweets/${tweetId}/like`)
    } catch (error) {
      dispatch(fetchFail())
    }
  }
  const bookmark = async (tweetId) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.put(`/tweets/${tweetId}/bookmark`)
    } catch (error) {
      dispatch(fetchFail())
    }
  }
 
  return { getOneTweet,newTweet,getTimeline,getTimeline2 ,pushreply,reTweet,tweetLike,bookmark,del,userTweets}
}

export default useTweetCall