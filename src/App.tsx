import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialProfiles from "./components/SocialProfiles";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Blogs />
        <SocialProfiles check="any" />
      </div>
    </BrowserRouter>
  );
}

export default App;
