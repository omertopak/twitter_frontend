
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"



import Login from '../pages/Login'
import Profile from '../pages/Profile'
import PrivateRouter from './PrivateRouter'
import Home from '../pages/Home'
import TwitDetail from '../components/TwitDetail'
import Tweet from '../pages/Tweet'

const AppRouter = () => {
  return (
    <Router>
        <Routes>
                <Route path="/:tweetId" element={<Tweet/>} />
            <Route path="/" element={<Login/>} />
                <Route path="/" element={<Profile/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/profile" element={<Profile/>} />
            <Route element={<PrivateRouter/>}>
            </Route>
            
            
        </Routes>
    </Router>
  )
}

export default AppRouter