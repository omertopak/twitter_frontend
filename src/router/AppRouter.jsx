
import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"

import Login from '../pages/Login'
import Profile from '../pages/Profile'
import PrivateRouter from './PrivateRouter'
import Home from '../pages/Home'
import Tweet from '../pages/Tweet'
import Foryou from '../components/Foryou'
import Following from '../components/Following'
const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
                {/* <Route path="/home" element={<Home/>} /> */}
                <Route path="/home" element={<Home />} >
                  <Route index element={<Foryou/>}/>
                  <Route path="following" element={<Following/>}/>
                </Route>
                <Route path="/:tweetId" element={<Tweet/>} />
                {/* <Route path="/tweet" element={<Tweet/>} /> */}
                <Route path="/profile/:userId" element={<Profile/>} /> 
                {/* <Route path="/user" element={<Profile/>} />  */}
                {/* yada username olacak  */}
            <Route element={<PrivateRouter/>}>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter