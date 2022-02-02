import "./CheckOurEvents.css";
import React, { useState } from "react";
import Quiz from "../../../Assets/CheckOurEvents/quiz.jpg";
import Autokriti2 from "../../../Assets/CheckOurEvents/Autokriti2.png";
import Au2Poster from "../../../Assets/CheckOurEvents/Au2Poster.jpg";

function CheckEvents() {
  return (
    <>
      <div className="CheckOurEvents-main">
        <div className="CheckOurEvents-main_container">
          <h2 className="CheckOurEvents-heading">
            Check out our <b className="CheckOurEvents-subheading"> EVENTS </b>
          </h2>
          <div className="CheckOurEvents-events">
            <Session
              title="Quiz"
              status="Venue: D2C"
              date="Date: 29-January-2022"
              image={Quiz}
              url="https://dare2compete.com/p/quiz-on-wheelsautomotive-quiz-national-institute-of-technology-nit-kurukshetra-256604?lb=rt7C3ad/"
            />
            {/* <Session title="Autokriti 2.0"
              status="Venue: TBC"
              date="Date: Coming Soon"
              image={Autokriti2}/> */}
            <Session
              title="Autokriti 2.0"
              status="Venue: Online"
              date="Starts 12th Feb On Weekends"
              image={Au2Poster}
              url="/autokriti/register"
            />

            {/* <Session title="Understanding Transmission"
          status="online"
          date="24th-January-2021"
          image={poster}/> */}
          </div>
          <div className="CheckOurEvents-showmore">
            {/* <p className="CheckOurEvents-heading1">
            NO EVENTS <b className="CheckOurEvents-subheading1"> AS OF NOW </b> 
            <FontAwesomeIcon id="CheckOurEvents-button1" className="CheckOurEvents-icon" icon={faAngleDoubleDown} />{" "}
          </p>*/}
          </div>
        </div>
      </div>
    </>
  );
}

function Session(props) {
  return (
    <>
      <div className="CheckOurEvents-card">
        <img className="CheckOurEvents-image" src={props.image} alt="Avatar" />
        <div className="CheckOurEvents-container">
          <h2>
            <b>{props.title}</b>
          </h2>
          <p style={{fontSize: '16px'}}>
            {props.status}
            <br />
            {props.date}
            <br/>
          </p>

          {/* <div className="CheckOurEvents-register"></div> */}
          <a
            className="CheckOurEvents-register"
            href={props.url}
            target="_blank"
          >
            <button id="event-register">Register Now</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default CheckEvents;
