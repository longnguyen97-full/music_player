import React from 'react'
import './sidebar.css'
import SidebarButton from './SidebarButton'
import { MdSpaceDashboard } from "react-icons/md"
import { FaGripfire, FaPlay } from "react-icons/fa"
import { MdFavorite } from "react-icons/md"
import { IoLibrary } from "react-icons/io5"
import { FaSignOutAlt } from "react-icons/fa"

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
        <img src="https://picsum.photos/200/300" class="profile-img" alt="profile" />
        <div>
            <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />}></SidebarButton>
            <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />}></SidebarButton>
            <SidebarButton title="Player" to="/player" icon={<FaPlay />}></SidebarButton>
            <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />}></SidebarButton>
            <SidebarButton title="Library" to="/" icon={<IoLibrary />}></SidebarButton>
        </div>
        <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />}></SidebarButton>
    </div>
  )
}
