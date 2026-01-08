import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Navbar from './components/navBar';
import ParticlesBackground from "./utils.js/ParticlesBackground";

function App() {

  // for Partiles show in Only home page (if you want to show in all tabs then remove renderParticlesIsInHomePage )
  const location = useLocation();
  const renderParticlesIsInHomePage = location.pathname == "/";

  return (
    <div className="App">

      {/* Particles js */}
      {renderParticlesIsInHomePage && <ParticlesBackground />}


      {/* navbar */}
      <Navbar />

      <div className='App_main-page-contain'>
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
    </div>
  );
}

export default App;
