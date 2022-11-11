import React, { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import SectionBlog from "../components/Sections/blog.api";
import Section8 from "../components/Footer/home.footer";
// import BlogFetch from "../components/Myblog/blogFetch";

// function BlogPage() {

// }

export default function BlogPage() {
  return (
    <div>
      {/* <Navbar /> */}
      <SectionBlog />
      <Section8 />
      <Footer />

      {/* <BlogFetch /> */}
    </div>
  );
}
