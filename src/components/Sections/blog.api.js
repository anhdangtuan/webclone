import React, { useState, useEffect } from "react";
import HomeBlog from "../Footer/home.footer";
import { Pagination } from "antd";
import Ssection1 from "./style.blog.api";
const SectionBlog = () => {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState(0);
  const [skip, setSkip] = useState(0);

  const handleClickPage = (page, pageSize) => {
    if (page !== 1) {
      setSkip(2 * (page - 1));
    } else {
      setSkip(0);
    }
    // console.log("Page: ", page);
  };
  const handleClick = (i) => {
    if (i === 0) {
      setProduct(0);
    } else {
      setProduct(1);
    }
    // getData("https://dummyjson.com/products?limit=2");
    // if (!== 0) {
    //   setProduct(1);
    // } else {
    //   setProduct(0);
    // }
  };
  // console.log(data[0]);
  const getData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res.products));
  };
  useEffect(() => {
    getData(`https://dummyjson.com/products?limit=2&skip=${skip}`);
  }, [skip]);
  return (
    <Ssection1>
      <div>
        <div className="img">
          {data.map((item, i) => {
            // console.log(i);
            console.log(item);
            return (
              <>
                <div className="Section_blog">
                  <div className="Section1_blog">
                    <img
                      onClick={() => handleClick(i)}
                      className="img1 "
                      alt="ảnh 2"
                      src={item.thumbnail}
                    />
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
        <Pagination
          className="pagination"
          defaultCurrent={1}
          onChange={handleClickPage}
          total={50}
        />
      </div>
      <div className="product">
        {data.length > 0 && <HomeBlog data={data} product={product} />}
      </div>
    </Ssection1>
  );
};

export default SectionBlog;
