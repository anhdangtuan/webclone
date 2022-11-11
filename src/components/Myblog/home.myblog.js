import React from "react";
import Ssection6 from "./style.home.myblog";
import { Row, Col } from "antd";
const Section6 = () => {
  return (
    <Ssection6>
      <Row className="Section6">
        <Col xl={12} xs={24} className="text6">
          <h1 className="title6">My blog</h1>
          <div className="content6">
            I'll let you in on some trade secrets and share my top tips on how
            to successfully promote your brand online.
          </div>
          <button className="button6"> Read blog</button>
        </Col>

        <Col xl={12} xs={24} className="img6 ">
          <img
            alt="anh3"
            src="https://company.senspark.com/static/media/Hai-Hoang.9e087eb5e142c2225fcf.png"
          />
        </Col>
      </Row>
    </Ssection6>
  );
};

export default Section6;
