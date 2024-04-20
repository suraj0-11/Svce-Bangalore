import React from 'react';
import Navbar from '../NavBar/NavBar';
import video from '../Home/video.mp4';
import './styles.css'; // Import the provided CSS styles

const Main = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="parallax-wrapper">
        <video
          src={video}
          autoPlay
          loop
          muted
          className="w-full h-50vh object-cover fixed z-0"
        />
        <div className="absolute top-0 left-0 md:left-10 w-full h-full flex flex-col justify-center text-white z-10">
          <p className="text-6xl font-bold">WE <br />DON'T JUST <br />DREAM IT, <br /> WE ENGINEER IT.</p>
        </div>
        <div className="background background--spring">
          <h2 className="title">Spring</h2>
        </div>
        <section className="season-desc">
          <div className="desc-wrapper">
            <h3 className="season--title">Sri Venkateshwara College</h3>
            <h3 className="season--title">of Engineering</h3>
            <p className="season--about">For over decade SVCE has provided peerless academic, administrative and pastoral support to students hoping to succeed and beyond. From academic aspirations to the simple day-to-day challenges of living, we understand the importance of every part of the student journey.</p>
          </div>
        </section>
        <div className="background background--summer">
          <h2 className="title">Summer</h2>
        </div>
        <section className="season-desc">
          <div className="desc-wrapper">
            <h3 className="season--title">Summer</h3>
            <p className="season--about">Summer is the hottest of the four temperate seasons, falling after spring and before autumn. At the summer solstice, the days are longest and the nights are shortest, with day-length decreasing as the season progresses after the solstice. The date of the beginning of summer varies according to climate, tradition, and culture. When it is summer in the Northern Hemisphere, it is winter in the Southern Hemisphere, and vice versa.</p>
          </div>
        </section>
        <div className="background background--fall">
          <h2 className="title">Autumn</h2>
        </div>
        <section className="season-desc">
          <div className="desc-wrapper">
            <h3 className="season--title">Autumn</h3>
            <p className="season--about">Autumn, also known as fall in American English and sometimes in Canadian English,[1] is one of the four temperate seasons. Autumn marks the transition from summer to winter, in September (Northern Hemisphere) or March (Southern Hemisphere), when the duration of daylight becomes noticeably shorter and the temperature cools down considerably. One of its main features is the shedding of leaves from deciduous trees.</p>
          </div>
        </section>
        <div className="background background--winter">
          <h2 className="title">Winter</h2>
        </div>
        <section className="season-desc">
          <div className="desc-wrapper">
            <h3 className="season--title">Winter</h3>
            <p className="season--about">Winter is the coldest season of the year in polar and temperate zones (winter does not occur in most of the tropical zone). It occurs after autumn and before spring in each year. Winter is caused by the axis of the Earth in that hemisphere being oriented away from the Sun. Different cultures define different dates as the start of winter, and some use a definition based on weather. When it is winter in the Northern Hemisphere, it is summer in the Southern Hemisphere, and vice versa. In many regions, winter is associated with snow and freezing temperatures.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
