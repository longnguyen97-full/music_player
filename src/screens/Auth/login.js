import React from "react";
import { loginEndpoint } from "../../spotify";
import "./login.css";

export default function Login() {
  return (
    <div className="login-page">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        className="img-fluid rounded-top logo"
        alt="logo-spotify"
      />
      <a href={loginEndpoint}>
        <div className="login-btn">Login</div>
      </a>
    </div>
  );
}
