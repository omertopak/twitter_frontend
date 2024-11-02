
import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"

import Login from '../pages/Login'
import Profile from '../pages/Profile'
import PrivateRouter from './PrivateRouter'
import Home from '../pages/Home'
import Tweet from '../pages/Tweet'
import Foryou from '../components/Foryou'
import Following from '../components/Following'
import MyTweets from '../components/Mytweets'
import Maintenance from '../pages/Maintenance'
import Bookmarks from '../pages/Bookmarks'
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
                <Route path="/profile/:userId" element={<Profile/>} > 
                {/* <Route path="/tweet" element={<Tweet/>} /> */}
                <Route index element={<MyTweets/>}/>
                </Route>
                <Route path="/:tweetId" element={<Tweet/>} />
                <Route path="/messages" element={<Maintenance/>} />
                <Route path="/bookmarks" element={<Bookmarks/>} />
                <Route path="/more" element={<Maintenance/>} />
                <Route path="/Notifications" element={<Maintenance/>} />
                <Route path="/Explore" element={<Maintenance/>} />
                {/* <Route path="/user" element={<Profile/>} />  */}
                {/* yada username olacak  */}
            <Route element={<PrivateRouter/>}>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter