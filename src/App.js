/* eslint-disable no-unused-expressions */
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutmePage from "./pages/Aboutme";
import BlogPage from "./pages/Blog";
import { Button } from "antd";
import { useState } from "react";
import "./App.css";

function App() {
  <div className="App">
    <Button type="primary">Button</Button>
  </div>;

  // const [test, setTest] = useState(false);

  // let d = {};
  // const sum = (a, b, c) => {
  //   if (test === false) {
  //     // if (a > b) {
  //     //   alert("a lon hon b");
  //     // } else {
  //     //   alert("a be hon b");
  //     // }
  //     a > b ? alert("a lon hon b") : alert("b lon hon a");
  //     console.log(a ?? b);
  //   } else {
  //     const c = a + b;
  //     console.log(c);
  //   }
  // };
  // // sum(a, b);
  // const abc = () => {};
  return (
    <>
      {/* <button onClick={(e) => sum(abc, 10, e)}>Alert </button>
      <button onClick={abc}>Alert </button> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutmePage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </>
  );
}

export default App;
