import React from "react";
import musicImage from "../assets/G.jpg";
import "./Home.css";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        backgroundImage: `url(${musicImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center 90%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="overlay"></div>
      <div className="hero-content">
        {/* <h2>Welcome to Your Local Music Shop!!</h2> */}
        <h2>Website Under Development</h2>
      </div>
    </section>
  );
};

export default Hero;
