import React from "react";
const Background = require("./Images/Artistic-4K-Wallpaper-3840x2160.jpg");

function Title(props) {
  return (
    <div
      id="Title"
      style={{
        height: "1200px",
        width: "auto",
        display: "flex",
        margin: "auto",
        color: "grey",
        backgroundImage: `url(${Background})`
      }}
    >
      <div
        id="Title"
        className="item"
        style={{
          width: "auto",
          display: "flex",
          margin: "auto",
          fontSize: "55px",
        }}
        > 
        Marc Anthony Rodriguez
      </div>
      
    </div>
  );
}
export default Title;
