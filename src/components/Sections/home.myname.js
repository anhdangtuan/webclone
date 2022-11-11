import React from "react";
import Ssection3 from "./style.home.myname";
import { Row, Col } from "antd";

const Section3 = () => {
  return (
    <Ssection3>
      <Row className="Section3">
        <Col xs={24} className="text3">
          <h1 className="title3">My name is Dovile!</h1>
          <div className="content3">
            I'm your new social media bestie. My mission is to help small and
            medium-sized businesses grow their audience and brand recognition
            through social media. To do that, I believe it's paramount to create
            a committed and genuine community that has a positive influence on
            people’s lives beyond the online sphere. My goal is to help you
            understand the power of social media and create connections that go
            beyond the internet.
          </div>
        </Col>
      </Row>
    </Ssection3>
  );
};

export default Section3;
