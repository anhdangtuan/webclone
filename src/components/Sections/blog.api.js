import React, { useState } from "react";
import Ssection1 from "./style.blog.api";
const SectionBlog = () => {
  return (
    <Ssection1>
      <div className="Section_blog">
        <div className="Section1_blog">
          <div>
            <img
              className="img1 "
              src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-9-481x600.jpg"
            />
          </div>
          <div className="text1">
            <h2 className="title1">
              10 Ways to Improve Your Digital Marketing Strategy
            </h2>
            <div className="content1">
              Tired of not having a clear direction for your online marketing
              activities? It's easy to regain focus and structure with our 10
              tips.
            </div>
            <div>11/16/2021 . 1 min read</div>
          </div>
        </div>
        <div className="Section2_blog">
          <div>
            <img
              className="img2 "
              src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-12-600x600.jpg"
            />
          </div>
          <div className="text2">
            <h2 className="title2">
              How I Built My Instagram Audience: A Lesson of Athenticity
            </h2>
            <div className="content2">
              While you might think that Instagram is only a visual platform,
              it's more a place for storytelling and authentic branding. Here's
              my story.
            </div>
            <div>11/16/2021 . 1 min read</div>
          </div>
        </div>
      </div>
    </Ssection1>
  );
};

export default SectionBlog;
