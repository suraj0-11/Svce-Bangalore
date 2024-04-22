import React, { useEffect } from "react";
import "./Courses.css";

const Courses = () => {
  const imgContainer = React.createRef();

  useEffect(() => {
    const interval = setInterval(() => {
      const last = imgContainer.current.firstElementChild;
      last.remove();
      imgContainer.current.appendChild(last);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="card">
        <h2>OUR PROGRAMS</h2>
        <p>Discover our programs to assuage your choice</p>
        <div className="shadow"></div>
      </div>
      <div id="img-container" ref={imgContainer}>
        <div className="box">
          <img
            src="https://i1.sndcdn.com/artworks-000137479333-rpqogd-t500x500.jpg"
            alt=""
          />
        </div>
        <div className="box">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/7/76/Primetimeofyourlife.jpg"
            alt=""
          />
        </div>
        <div className="box">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/8/84/RobotRock.DaftPunk.single.jpg"
            alt=""
          />
        </div>
        <div className="box">
          <img
            src="https://i1.sndcdn.com/artworks-000655973617-9rv0tb-t500x500.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Courses;
