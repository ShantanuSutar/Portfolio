import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className=" container h-screen max-w-[80%] mx-auto">
      <Header />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
