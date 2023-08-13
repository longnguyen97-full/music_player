import React, { useState, useEffect } from "react";
import APIKit from "../../spotify";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./library.css";

export default function Library() {
  const [playLists, setPlayLists] = useState(null);

  useEffect(() => {
    APIKit.get("me/playlists").then(function (response) {
      setPlayLists(response.data.items);
    });
  }, []);

  const navigate = useNavigate();
  const playPlayList = (id) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div className="screen-container">
      <div className="library-body">
        {playLists?.map((playList) => (
          <div
            className="playlist-card"
            key={playList.id}
            onClick={() => playPlayList(playList.id)}
          >
            <img
              src={playList.images[0].url}
              className="playlist-image"
              alt="playlist-image"
            />
            <p className="playlist-title">{playList.name}</p>
            <p className="playlist-subtitle">{playList.tracks.total} Songs</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#e99d72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
