import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../Library";
import Feed from "../Feed";
import Trending from "../Trending";
import Player from "../Player";
import Favorites from "../Favorites";
import "./home.css";
import Sidebar from "../../components/Sidebar";
import Login from "../Auth/login";
import { setClientToken } from "../../spotify";

export default function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  });
  return !token ? (
    <Login></Login>
  ) : (
    <Router>
      <div className="main-body">
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<Library></Library>} />
          <Route path="/feed" element={<Feed></Feed>} />
          <Route path="/trending" element={<Trending></Trending>} />
          <Route path="/player" element={<Player></Player>} />
          <Route path="/favorites" element={<Favorites></Favorites>} />
        </Routes>
      </div>
    </Router>
  );
}
