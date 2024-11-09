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
 
  const refresh = () => window.location.reload(true)

  const getOneTweet = async (tweetId) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken.get(`/tweets/${tweetId}/`)
      console.log("backendden gelen datamiz",data);
      dispatch(getOneTweetSuccess({ data, tweetId }))
      
    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      //..
      // toastErrorNotify("HATA")
    }
  }
  
  const newTweet = async (data) => {
    dispatch(fetchStart())
    console.log("1");
    try {
      console.log("2");

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
      console.log("3",formData);


    } catch (error) {
      dispatch(fetchFail())
      console.error("Error:", error);
    }
  }
  const getTimeline = async () => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken.get(`/tweets/timeline/`)
      console.log('tweetcall');
      console.log('data',data);
      dispatch(getMyDataSuccess({ data }))

    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
      // toastErrorNotify("HATA")
    }
  }
  const getTimeline2 = async () => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken.get('/tweets/timeline2/')
      dispatch(getDataSuccess({ data }))
    } catch (error) {
      dispatch(fetchFail())
    }
  }

  //!update tweet yok
  // const updateBlog = async (data,id) => {
  //   dispatch(fetchStart())
  //   try {
  //     await axiosWithToken.put(`/tweets/blogs/${id}/`,data)
  //     toastSuccessNotify("Post Updated")
  //     getTweet("blogs")
  //     navigate(-1)
      

  //   } catch (error) {
  //     dispatch(fetchFail())
  //     // console.log(error)
  //     toastErrorNotify("Error!")
  //   }
  // }

  //!Profile page
  
  const userTweets = async (userId) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken.get(`tweets/user/${userId}`)
      console.log(data);
      // console.log('dataaa',data);
      dispatch(getProfileUserDataSuccess({ data }))
      // dispatch(getDataSuccess({ data }))
      // getTweet("blogs")
    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      // toastErrorNotify("Error!")
    }
  }

  

  const pushreply = async (tweetId,data) => {
    dispatch(fetchStart())
    try {
      // console.log(data,id);
      await axiosWithToken.post(`/tweets/${tweetId}`,data)
      // toastSuccessNotify("Reply created!")
      // getOneTweet(tweetId)
      // navigate(-1)
      

    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
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
      // toastSuccessNotify("deleted!")
      // getTweet(tweetId)
      // navigate(-1)
      

    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      // toastErrorNotify("Error!")
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