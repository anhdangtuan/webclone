import React from "react";
import Ssection1 from "./style.home.hello";
import { Row, Col } from "antd";
const HomeHello = () => {
  return (
    <Ssection1>
      <Row className="Section1">
        <Col xs={24} xl={12}>
          <div className="text1">
            <h1 className="title">Hello, so good to see you!</h1>
            <div className="content1">
              I help small and medium-sized businesses grow their audience and
              brand recognition through social media.
            </div>
            <div className="button-contract">
              <button className="button1"> Contact me</button>
            </div>
          </div>
        </Col>

        <Col xs={24} xl={12}>
          <div className="img1 ">
            <img
              alt="anh2"
              className="imghello"
              src="https://company.senspark.com/static/media/Hung-Nguyen.bb5c99b01a9f57416832.png"
            />
          </div>
        </Col>
      </Row>
    </Ssection1>
  );
};

export default HomeHello;
