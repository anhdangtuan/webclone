import React, { useState, useEffect } from "react";

import Ssection8 from "./style.home.footer";
const HomeBlog = ({ data, product }) => {
  console.log(data);
  console.log(product);
  return (
    <Ssection8>
      <>
        {data &&
          data.length > 0 &&
          data[product].images.map((item) => {
            return (
              <div className="Section8">
                <div>
                  <img className="img-common" alt="img1" src={item} />
                </div>
              </div>
            );
          })}
      </>
    </Ssection8>
  );
};

export default HomeBlog;
