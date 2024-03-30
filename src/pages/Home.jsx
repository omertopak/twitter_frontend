import React from 'react'

import Middleflow from '../components/Middleflow'
import Rightbar from '../components/Rightbar'
import Leftbar from '../components/LeftBar'

const Home = () => {
  return (
    <div>
        <Leftbar/>
        <Middleflow/>
        <Rightbar/>
    </div>
  )
}

export default Home