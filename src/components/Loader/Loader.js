import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="loader-box">

        {/* Logo */}
        <img
          src={process.env.PUBLIC_URL + "/loader.png"}
          alt="logo"
          className="loader-logo"
        />

        {/* Animated border */}
        <div className="border-line loader-top"></div>
        <div className="border-line loader-right"></div>
        <div className="border-line loader-bottom"></div>
        <div className="border-line loader-left"></div>

      </div>
    </div>
  );
}