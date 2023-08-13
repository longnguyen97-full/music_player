import React from "react";
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipBack, IoPlaySkipForward, IoPlay } from "react-icons/io5";
import "./controls.css";

export default function Controls({
  isPlaying,
  isBroken,
  setIsPlaying,
  handleNext,
  handlePrev,
}) {
  return (
    <IconContext.Provider value={{ size: "15px", color: "#c4d0e3" }}>
      <div className="controls-wraper flex">
        <div className="action-btn" onClick={handlePrev}>
          <IoPlaySkipBack />
        </div>
        <div
          className={
            isPlaying ? "play-pause-btn flex active" : "play-pause-btn flex"
          }
          onClick={() => {
            if (!isBroken) {
              setIsPlaying(!isPlaying);
            }
          }}
        >
          {isPlaying && !isBroken ? <FaPause /> : <IoPlay />}
        </div>
        <div className="action-btn" onClick={handleNext}>
          <IoPlaySkipForward />
        </div>
      </div>
    </IconContext.Provider>
  );
}
