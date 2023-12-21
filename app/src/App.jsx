import { useState } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer.jsx/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Qualification from "./components/Qualifications/Qualification";
import Scrollup from "./components/Scrollup/Scrollup";
import Skills from "./components/Skills/Skills";
import Testimonials from "./components/Testimonials/Testimonials";
import Work from "./components/Work/Work";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );
  return (
    <div
      className={`${
        theme === "color" ? "color" : ""
      } min-h-100% min-w-full overflow-hidden bg-white transition-all duration-1000 ease-in-out dark:bg-slate-950`}
    >
      <div className=" container mx-auto sm:max-w-[80%]">
        <Header theme={theme} setTheme={setTheme} />
        <Home />
        <About />
        <Skills />
        <Work />
        <Qualification />
        <Projects />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
        <Scrollup />
      </div>
    </div>
  );
}

export default App;
