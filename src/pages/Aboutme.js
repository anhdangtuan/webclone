/* eslint-disable react/jsx-pascal-case */
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Section1_aboutme from "../components/Sections/aboutme.section1";
import Section2 from "../components/Sections/home.trademark";
import Section2_aboutme from "../components/Sections/aboutme.changing";
import Section3_aboutme from "../components/Myblog/aboutme.myblog";
import Section8 from "../components/Footer/home.footer";

const AboutmePage = () => {
  return (
    <div>
      <Navbar />
      <Section1_aboutme />
      <Section2 />
      <Section2_aboutme />
      <Section3_aboutme />
      <Section8 />
      <Footer />
    </div>
  );
};
export default AboutmePage;
