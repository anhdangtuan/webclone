import React, { useState, useEffect } from "react";
import HomeBlog from "../Footer/home.footer";

import Ssection1 from "./style.blog.api";
const SectionBlog = () => {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState(0);

  console.log(data[0]);
  const getData = () => {
    fetch(`https://dummyjson.com/products?limit=2`)
      .then((res) => res.json())
      .then((res) => setData(res.products));
  };
  useEffect(() => {
    getData("https://dummyjson.com/products?limit=2");
  }, []);
  return (
    <Ssection1>
      <div>
        <div className="img">
          {data.map((item, i) => {
            return (
              <>
                <div className="Section_blog">
                  <div className="Section1_blog">
                    <img className="img1 " alt="ảnh 2" src={item.thumbnail} />
                  </div>
                  <div className="text1">
                    <h2 className="title1">{item.title}</h2>
                    <div className="content1">{item.description}</div>
                    <div>{item.price} $</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="product">
        {data.length > 0 && <HomeBlog data={data} product={product} />}
      </div>
    </Ssection1>
  );
};

export default SectionBlog;
