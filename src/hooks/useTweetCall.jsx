import { fetchFail, fetchStart, getDataSuccess,getMyDataSuccess } from '../features/tweetSlice'
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
      // console.log(data);
      dispatch(getDataSuccess({ data, tweetId }))
      
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
  const getTimeline = async (url, id) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken(`/tweets/timeline/`)
      // getTweet("blogs")
      dispatch(getDataSuccess({ data }))

    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      // toastErrorNotify("HATA")
    }
  }
  const getTimeline2 = async (url, id) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken.get(`/tweets/blogs/${url}/${id}/`)
      dispatch(getDataSuccess({ data }))

      // getTweet("blogs")
    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      // toastErrorNotify("Error!")
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
  const userTweets = async (url, userId) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken.get(`/tweets/user/${userId}/`)
      // dispatch(getDataSuccess({ data }))
      // getTweet("blogs")
    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      // toastErrorNotify("Error!")
    }
  }

  

  const pushreply = async (data,tweetId) => {
    dispatch(fetchStart())
    try {
      // console.log(data,id);
      await axiosWithToken.post(`/tweets/${tweetId}/`,data)
      // toastSuccessNotify("Reply created!")
      getOneTweet(tweetId)
      // navigate(-1)
      

    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      // toastErrorNotify("Error!")
    }
  }

  const reTweet = async (data,tweetId) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.put(`/tweets/${tweetId}/`)
      // toastSuccessNotify("Retweet!")
      // getTweet(tweetId)
      // navigate(-1)
      

    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      // toastErrorNotify("Error!")
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

  const tweetLike = async (tweetId,url) => {
    dispatch(fetchStart())
    try {
      const data = await axiosWithToken.get(`/tweets/${tweetId}/like`)
      // dispatch(getMyDataSuccess({ data, url }))
    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      // toastErrorNotify("Error!")
    }
  }
  const bookmark = async (tweetId) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.delete(`/tweets/${tweetId}/bookmark`)
      // toastSuccessNotify("Deleted")
      refresh()
    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      // toastErrorNotify("Error!")
    }
  }
 
  return { getOneTweet,newTweet,getTimeline,getTimeline2 ,pushreply,reTweet,tweetLike,bookmark,del,userTweets}
}

export default useTweetCall