import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <About />
      </div>
    </BrowserRouter>
  );
}

export default App;
