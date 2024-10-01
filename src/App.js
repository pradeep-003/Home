import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import FAQ from "./components/faq";
import Speaker from "./components/Speakers";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Faq" element={<FAQ />} />
        <Route path="/Speakers" element={<Speaker />} />
      </Routes>
    </Router>
  );
}

export default App;
