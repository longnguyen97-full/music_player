import React from "react";
import "./albumInfo.css";

export default function albumInfo({ album }) {
  const artists = [];
  album?.artists.forEach((element) => {
    artists.push(element.name);
  });

  const artist = artists?.join(", ");

  return (
    <div className="albumInfo-card">
      <div className="albumName-container">
        <div className="marquee">
          <p>{`${album?.name} - ${artist}`}</p>
        </div>
      </div>
      <div className="album-info">
        <p>{`${album?.name} is an ${album?.album_type} by ${artist} with ${album?.total_tracks} track(s)`}</p>
      </div>
      <div className="album-release">
        <p>Release date: {album?.release_date}</p>
      </div>
    </div>
  );
}
