import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Library from '../Library'
import Feed from '../Feed'
import Trending from '../Trending'
import Player from '../Player'
import Favorites from '../Favorites'
import './home.css'
import Sidebar from '../../components/Sidebar'

export default function Home() {
  return (
    <Router>
        <div className="main-body">
            <Sidebar></Sidebar>
            <Routes>
                <Route path='/' element={<Library></Library>} />
                <Route path='/feed' element={<Feed></Feed>} />
                <Route path='/trending' element={<Trending></Trending>} />
                <Route path='/player' element={<Player></Player>} />
                <Route path='/favorites' element={<Favorites></Favorites>} />
            </Routes>
        </div>
    </Router>
  )
}
