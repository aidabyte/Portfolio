import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="image text-center Hero" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Hero;
