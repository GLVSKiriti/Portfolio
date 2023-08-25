import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import SocialProfiles from "./components/SocialProfiles";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <About />
        <SocialProfiles />
      </div>
    </BrowserRouter>
  );
}

export default App;
