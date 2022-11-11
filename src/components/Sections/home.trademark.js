import React from "react";
import Ssection2 from "./style.home.trademark";
import { Row, Col } from "antd";

const Section2 = () => {
  return (
    <Ssection2>
      <Row xs={24} xl={12} className="section2">
        <span className="featured">Featured</span>
        <span className="lanihaw">LaniHaw</span>
        <span className="deonfive">Deon Five</span>
        <span className="knoxemus">KNOXEMUS</span>
      </Row>
    </Ssection2>
  );
};

export default Section2;
