import React from "react";
import Ssection1 from "./style.aboutme.section1";
const Section1_aboutme = () => {
  return (
    <Ssection1>
      <div className="Section1">
        <div className="text1">
          <h1 className="title">So, who am I?!</h1>
          <div className="content1">
            I'm your new social media bestie. My mission is to help small and
            medium-sized businesses grow their audience and brand recognition
            through social media. My goal is to help you understand the power of
            social media and create connections that go beyond the internet.
          </div>
          <button className="button1"> Contact me</button>
        </div>

        <div className="img1 ">
          <img
            src="https://company.senspark.com/static/media/Hung-Nguyen.bb5c99b01a9f57416832.png"
            alt=""
          />
        </div>
      </div>
    </Ssection1>
  );
};

export default Section1_aboutme;
