import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <div>
      <article className="wrapper">
        <h1 className="title text-left font-bold">WELCOME TO SVCE</h1>
        <img
          id="image-to-scale"
          src="https://art.pixilart.com/9c7c9b241567221.png"
          alt=""
          width="800px"
          height="800px"
        />
        <main>
          <p
            className="text-3xl leading-8 text-justify px-4 text-gray-250 font-bold font-bold text-center "
            id="observed-target"
          >
            For over decade SVCE has provided peerless academic, administrative
            and pastoral support to students hoping to succeed and beyond. From
            academic aspirations to the simple day-to-day challenges of living,
            we understand the importance of every part of the student journey.
          </p>
        </main>
        <h1 className="title text-left font-bold">VISION</h1>
        <img
          id="image-to-scale"
          src="https://art.pixilart.com/9c7c9b241567221.png"
          alt=""
          width="800px"
          height="800px"
        />
        <main>
          <p
            className="text-3xl leading-8 text-justify px-4 pl-13 text-gray-250 font-bold font-bold text-center"
            id="observed-target1"
          >
            To be a premier institute for addressing the challenges in global
            perspective.
          </p>
        </main>
        <h1 className="title text-left font-bold">MISSION</h1>
        <img
          id="image-to-scale"
          src="https://art.pixilart.com/9c7c9b241567221.png"
          alt=""
          width="800px"
          height="800px"
        />
        <main>
          <p
            className="text-3xl leading-12 text-justify px-4 text-gray-250 font-bold font-bold text-center"
            id="observed-target"
          >
            <ul>
              <li>
                M1: Nurture students with professional and ethical outlook to
                identify needs, analyze, design and innovate sustainable
                solutions through lifelong learning in service of society as
                individual or a team.
              </li>
              <li>
                M2: Establish state-of-the-art Laboratories and Information
                Resource centre for education and research.
              </li>
              <li>
                M3: Collaborate with Industry, Government Organization and
                Society to align the curriculum and outreach activities.
              </li>
            </ul>
          </p>
        </main>
      </article>
    </div>
  );
};

export default Cards;
