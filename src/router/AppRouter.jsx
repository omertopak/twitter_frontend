
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"



import Login from '../pages/Login'
import Profile from '../pages/Profile'
import PrivateRouter from './PrivateRouter'
import Home from '../pages/Home'

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route element={<PrivateRouter/>}>
                <Route path="/home" element={<Home/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/" element={<Profile/>} />
            </Route>
            
            
        </Routes>
    </Router>
  )
}

export default AppRouter