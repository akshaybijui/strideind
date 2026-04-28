import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="loader-box">

        {/* Your logo */}
        <img src={process.env.PUBLIC_URL + "/loader.png"} alt="logo" className="logo-img" />

        {/* Animated rectangle */}
        <div className="border-line top"></div>
        <div className="border-line right"></div>
        <div className="border-line bottom"></div>
        <div className="border-line left"></div>

      </div>
    </div>
  );
}