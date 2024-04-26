import React from 'react'
import { fetchFail, fetchStart, getAuthSuccess,logoutSuccess } from '../features/authSlice'
import { useDispatch } from 'react-redux'
import useAxios from './useAxios'
import { toastErrorNotify,toastSuccessNotify } from '../helper/ToastNotify'
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';

const useAuthCall = () => {
   const dispatch = useDispatch()
   const {axiosPublic} = useAxios() 
   const {axiosWithToken} = useAxios() 
    const navigate = useNavigate()

    const {userId} = useSelector((state)=>state.auth)

    const login = async (userdata)=>{
    dispatch(fetchStart())
    try {
    const {data} = await axiosPublic.post(`/users/auth/login/`,userdata)
    navigate("/ink")
    // console.log(data);
    dispatch(getAuthSuccess(data))
    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
    }
  }
  const register = async (userdata)=>{
    dispatch(fetchStart())
    try {
    const {data} = await axiosPublic.post(`/users/register/`,userdata)
    login(userdata)
    // navigate("/ink")
    // toastSuccessNotify("Successfully registered.")
    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      // toastErrorNotify("Register unsuccesfull!")
    }
  }

  const logout = async () => {
    dispatch(fetchStart())
    try {
      await axiosPublic.post(`/users/auth/logout/`)
      dispatch(logoutSuccess())
      toastSuccessNotify("logout islemi basarili")
      navigate("/")
    } catch (error) {
      // console.log(error)
      dispatch(fetchFail())
      toastErrorNotify("Logout unsuccesfull!")
    }
  }

  const changePass = async (userdata)=>{
    dispatch(fetchStart())
    try {
    const data = await axiosWithToken.put(`/users/${userId}`,userdata)
    // console.log(data);
    navigate("/")
    dispatch(getAuthSuccess(data))
    } catch (error) {
    }
  }

  return {login,register,logout,changePass}
}

export default useAuthCall