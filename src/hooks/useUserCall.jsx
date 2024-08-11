import { fetchFail, fetchStart, getDataSuccess,getMyDataSuccess } from '../features/dataSlice'
import { useDispatch } from 'react-redux'
import useAxios from './useAxios'
import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify'
import { useNavigate } from "react-router-dom"

const useUserCall = () => {
  const dispatch = useDispatch()
  const { axiosPublic, axiosWithToken } = useAxios()
  const navigate = useNavigate()
 
  const refresh = () => window.location.reload(true)

  const getUser = async (userId) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken.get(`/user/${userId}/`)
      // console.log(data);
      dispatch(getDataSuccess({ data, tweetId }))
      
    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      //..
      toastErrorNotify("HATA")
    }
  }
  
 
  const userFollow = async (userId) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken.post(`/user/${userId}/follow`)
      // console.log(data);
      dispatch(getDataSuccess({ data, tweetId }))
      
    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      //..
      toastErrorNotify("HATA")
    }
  }

  return { getUser,userFollow}
}

export default useUserCall