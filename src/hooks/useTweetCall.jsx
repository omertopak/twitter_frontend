import { fetchFail, fetchStart, getDataSuccess,getMyDataSuccess } from '../features/dataSlice'
import { useDispatch } from 'react-redux'
import useAxios from './useAxios'
import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify'
import { useNavigate } from "react-router-dom"

const useTweetCall = () => {
  const dispatch = useDispatch()
  const { axiosPublic, axiosWithToken } = useAxios()
  const navigate = useNavigate()
 
  const refresh = () => window.location.reload(true)

  const getTweet = async (url) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken(`/tweets/${url}/`)
      // console.log(data);
      dispatch(getDataSuccess({ data, url }))
      
     
      
      

    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      //..
      toastErrorNotify("HATA")
    }
  }
  const newTweet = async (data) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.post(`/tweets/`,data)
      toastSuccessNotify("New Post Created")
      getTweet("blogs")
      navigate("/ink")
      

    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      toastErrorNotify("Error!")
    }
  }
  const getTimeline = async (url, id) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken(`/tweets/${url}/${id}/`)
      // toastSuccessNotify("get data by id calisti")
      getTweet("blogs")
      
      

    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      toastErrorNotify("HATA")
    }
  }
  const getTimeline2 = async (url, id) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.put(`/tweets/blogs/${url}/${id}/`)
      getTweet("blogs")
      
      

    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      toastErrorNotify("Error!")
    }
  }

  
  const updateBlog = async (data,id) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.put(`/tweets/blogs/${id}/`,data)
      toastSuccessNotify("Post Updated")
      getTweet("blogs")
      navigate(-1)
      

    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      toastErrorNotify("Error!")
    }
  }
  const pushComment = async (data,id) => {
    dispatch(fetchStart())
    try {
      // console.log(data,id);
      await axiosWithToken.put(`/tweets/blogs/pushComments/${id}/`,data)
      toastSuccessNotify("Comment created!")
      getTweet("blogs")
      // navigate(-1)
      

    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      toastErrorNotify("Error!")
    }
  }
  const pullComment = async (data,id) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.put(`/tweets/blogs/pullComments/${id}/`,data)
      toastSuccessNotify("Comment Deleted!")
      getTweet("blogs")
      // navigate(-1)
      

    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      toastErrorNotify("Error!")
    }
  }

  const myBlog = async (id,url) => {
    dispatch(fetchStart())
    try {
      const data = await axiosWithToken.get(`/tweets/blogs/?SEARCH[author]=${id}`)
      dispatch(getMyDataSuccess({ data, url }))
      
      

    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      toastErrorNotify("Error!")
    }
  }
  const del = async (id) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.delete(`/tweets/blogs/${id}/`)
      toastSuccessNotify("Deleted")
      refresh()
    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      toastErrorNotify("Error!")
    }
  }
 
  return { getData,getViews,like ,newBlog,myBlog,updateBlog,pushComment,pullComment,del}
}

export default useTweetCall