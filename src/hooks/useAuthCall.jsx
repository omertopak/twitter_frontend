import React from 'react'
import { fetchFail, fetchStart, getAuthSuccess,logoutSuccess } from '../features/authSlice'
import { useDispatch } from 'react-redux'
import useAxios from './useAxios'
import { useNavigate } from "react-router-dom"

const useAuthCall = () => {
   const dispatch = useDispatch()
   const {axiosPublic} = useAxios() 
    const navigate = useNavigate()


    const login = async (userdata)=>{
    dispatch(fetchStart())
    try {
    const {data} = await axiosPublic.post(`/auth/login/`,userdata)
    navigate("/home")
    dispatch(getAuthSuccess(data))
    } catch (error) {
      dispatch(fetchFail())
    }
  }
  const register = async (userdata)=>{
    dispatch(fetchStart())
    try {
    await axiosPublic.post(`/users/register/`,userdata)
    login(userdata)
    } catch (error) {
      dispatch(fetchFail())
    }
  }

  const logout = async () => {
    dispatch(fetchStart())
    try {
      await axiosPublic.post(`/auth/logout/`)
      dispatch(logoutSuccess())
      navigate("/")
    } catch (error) {
      dispatch(fetchFail())
    }
  }


  return {login,register,logout}
}

export default useAuthCall