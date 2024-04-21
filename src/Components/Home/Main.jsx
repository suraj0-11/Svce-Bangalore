import React from "react";
import Navbar from "../NavBar/NavBar";
import video from "../Home/video.mp4";
import "./styles.css"; // Import the provided CSS styles

const Main = () => {
  return (
    
    <div className="relative">
      <div class="parallax-wrapper">
  <div class="background background--spring">
  <video
          src={video}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover fixed z-0"
        />
        <div className="absolute top-0 left-0 md:left-10 w-full h-full flex flex-col justify-center text-white z-10">
          <p className="text-6xl font-bold">
            WE <br />
            DON'T JUST <br />
            DREAM IT, <br /> WE ENGINEER IT.
          </p>
        </div>
  </div>
  <section class="season-desc" style={{ backgroundImage: `url('bgm.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
  <div class="desc-wrapper">
    <h3 class="season--title">Welcome to Sri Venkateshwara College of Engineering</h3>
    <p class="season--about">For over a decade SVCE has provided peerless academic, administrative, and pastoral support to students hoping to succeed and beyond. From academic aspirations to the simple day-to-day challenges of living, we understand the importance of every part of the student journey.</p>
  </div>
</section>

  <div class="background background--summer">
    <h2 class="title">Summer</h2>
  </div>
  <section class="season-desc">
    <div class="desc-wrapper">
      <h3 class="season--title">Summer</h3>
      <p class="season--about">Summer is the hottest of the four temperate seasons, falling after spring and before autumn. At the summer solstice, the days are longest and the nights are shortest, with day-length decreasing as the season progresses after the solstice. The date of the beginning of summer varies according to climate, tradition, and culture. When it is summer in the Northern Hemisphere, it is winter in the Southern Hemisphere, and vice versa.</p>
    </div>
  </section>
  
</div>
      <Navbar />
      
      </div>
      
  );
};

export default Main;
