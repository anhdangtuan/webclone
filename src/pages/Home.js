import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Section1 from "../components/Sections/home.hello";
import Section2 from "../components/Sections/home.trademark";
import Section3 from "../components/Sections/home.myname";
import Section4 from "../components/Services/home.services";
import Section5 from "../components/Sections/home.areyouready";
import Section6 from "../components/Myblog/home.myblog";
import Section7 from "../components/Sections/home.maxim";
import Section8 from "../components/Footer/home.footer";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
    </>
  );
};
export default HomePage;
