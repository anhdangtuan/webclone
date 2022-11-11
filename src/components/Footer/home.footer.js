import React, { useState, useEffect } from "react";

import Ssection8 from "./style.home.footer";
const HomeBlog = ({ data, product }) => {
  return (
    <Ssection8>
      <>
        {data &&
          data.length > 0 &&
          data[product].images.map((data) => {
            return (
              <div className="Section8">
                <div>
                  <img className="img-common" alt="img1" src={data} />
                </div>
              </div>
            );
          })}
      </>
    </Ssection8>
  );
};

export default HomeBlog;
