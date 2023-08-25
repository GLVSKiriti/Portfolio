import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialProfiles from "./components/SocialProfiles";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Home />
        <SocialProfiles />
      </div>
    </BrowserRouter>
  );
}

export default App;
