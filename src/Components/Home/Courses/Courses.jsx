import React, { useEffect, useRef } from "react";
import "./Courses.css";

const Courses = () => {
  const imgContainerRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const imgContainer = imgContainerRef.current;
      const last = imgContainer.firstElementChild;
      last.remove();
      imgContainer.appendChild(last);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section>
      <div className="card">
        <h2>3D image slider</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minus
          tempore velit quisquam, cupiditate fugit reprehenderit.
        </p>
        <div className="shadow"></div>
      </div>
      <div id="img-container" ref={imgContainerRef}>
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
