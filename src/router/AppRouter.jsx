
import React from 'react'
import Login from '../pages/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login/>} />
        </Routes>
    </Router>
  )
}

export default AppRouter