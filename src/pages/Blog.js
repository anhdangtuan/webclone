import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import SectionBlog from "../components/Sections/blog.api";
import Section8 from "../components/Footer/home.footer";

const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <SectionBlog />
      <Section8 />
      <Footer />
    </div>
  );
};
export default BlogPage;
