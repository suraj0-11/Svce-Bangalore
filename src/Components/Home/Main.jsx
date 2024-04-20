import React from 'react';
import Navbar from '../NavBar/NavBar';
import video from '../Home/video.mp4';

const Main = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <video
        src={video}
        autoPlay
        loop
        muted
        className="w-full h-50vh object-cover" // Set height to 50% of viewport height
      />
      <div className="absolute top-0 left-0 md:left-20 w-full h-full flex flex-col justify-center text-white">
        <p className="text-7xl font-bold">WE <br />DON'T JUST <br />DREAM IT, <br /> WE ENGINEER IT.</p>
      </div>
      <div>
        card
      </div>
    </div>
  );
};

export default Main;
