import { fetchFail, fetchStart, getProfileDataSuccess,getProfileofAnyUser } from '../features/profileSlice'
import { useDispatch } from 'react-redux'
import useAxios from './useAxios'
import { useNavigate } from "react-router-dom"

const useUserCall = () => {
  const dispatch = useDispatch()
  const { axiosPublic, axiosWithToken } = useAxios()
  const navigate = useNavigate()
 
  const refresh = () => window.location.reload(true)

  const getUser = async (userId) => {
    dispatch(fetchStart())
    try {
      // console.log("user isdd",userId);
      const { data } = await axiosWithToken.get(`/user/${userId}/`)
      // console.log("useusercall data",data);
      dispatch(getProfileofAnyUser({ data}))
      
    } catch (error) {
      dispatch(fetchFail())

    }
  }
  
 
  const userFollow = async (userId) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken.post(`/user/${userId}/follow`)
      // console.log(data);
      
    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      //..
    }
  }

  return { getUser,userFollow}
}

export default useUserCall