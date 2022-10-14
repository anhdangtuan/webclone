import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutmePage from "./pages/Aboutme";
import BlogPage from "./pages/Blog";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutmePage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </>
  );
}

export default App;
