import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Navbar from './components/navBar';
import ParticlesBackground from "./utils.js/ParticlesBackground";

function App() {

  return (
    <div className="App">

      {/* Particles js */}
      <ParticlesBackground />
      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
