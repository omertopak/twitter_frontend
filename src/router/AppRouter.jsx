
import React from 'react'
import Login from '../pages/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from '../pages/Register'

import Profile from '../pages/Profile'
import PrivateRouter from './PrivateRouter'
import Home from '../pages/Home'

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/" element={<Login/>} />
            <Route path="/" element={<Register/>} />
            <Route path="/" element={<PrivateRouter/>}>
                <Route path="/" element={<Home/>} />
                <Route path="/" element={<Profile/>} />
            </Route>
            
            
        </Routes>
    </Router>
  )
}

export default AppRouter