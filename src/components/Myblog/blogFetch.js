import React, { useState, useEffect } from "react";

export default function BlogFetch() {
  const [data, setData] = useState([]);

  console.log(data);
  const getData = () => {
    fetch(`https://dummyjson.com/products?limit=2`)
      .then((res) => res.json())
      .then((res) => setData(res.products));
  };
  useEffect(() => {
    getData("https://dummyjson.com/products?limit=2");
  }, []);

  return (
    <>
      <ul>
        {data.map((item, i) => {
          return (
            <li key={i}>
              {item.thumbnail}
              {item.title}
              {item.description}
              {item.price}
            </li>
          );
        })}
      </ul>
    </>
  );
}
