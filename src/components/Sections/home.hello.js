import React from "react";
import Ssection1 from "./style.home.hello";
const HomeHello = () => {
  return (
    <Ssection1>
      <div className="Section1">
        <div className="text1">
          <h1 className="title">Hello, so good to see you!</h1>
          <div className="content1">
            I help small and medium-sized businesses grow their audience and
            brand recognition through social media.
          </div>
          <button className="button1"> Contact me</button>
        </div>

        <div className="img1 ">
          <img src="https://company.senspark.com/static/media/Hung-Nguyen.bb5c99b01a9f57416832.png" />
        </div>
      </div>
    </Ssection1>
  );
};

export default HomeHello;
