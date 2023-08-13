import React, { useState, useEffect } from "react";
import "./sidebar.css";
import SidebarButton from "./SidebarButton";
import { MdSpaceDashboard } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import apiClient from "../../spotify";

export default function Sidebar() {
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFE1TLNwq1NCa0w83VMLY8Qj4iCZ6d95FNBw&usqp=CAU"
  );

  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);
  return (
    <div className="sidebar-container">
      <img src={image} className="profile-img" alt="profile" />
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
}
