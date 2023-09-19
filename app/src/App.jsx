import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Qualification from "./components/Qualifications/Qualification";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";

function App() {
  return (
    <div className=" container h-screen max-w-[80%] mx-auto">
      <Header />
      <Home />
      <About />
      <Skills />
      <Work />
      <Qualification />
    </div>
  );
}

export default App;
