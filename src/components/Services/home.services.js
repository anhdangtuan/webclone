import React from "react";
import Ssection4 from "./style.home.services";
import { Row, Col } from "antd";

const Section4 = () => {
  return (
    <Ssection4>
      <Row className="Section4">
        <Col xs={24} xl={12} className="img4 ">
          <img src="https://company.senspark.com/static/media/Dinh-Nguyen.6d5a9eda4cf3b1d9feec.png" />
        </Col>
        <Col xs={24} xl={12} className="text4">
          <h2 className="title4">Services</h2>
          <div className="content4">
            From campaign planning and consultation to content creation and
            extended social media campaigning, I'm here to help your brand sound
            like you online.
          </div>
          <div className="button-services">
            <button className="button4"> Read more</button>
          </div>
        </Col>
      </Row>
    </Ssection4>
  );
};

export default Section4;
