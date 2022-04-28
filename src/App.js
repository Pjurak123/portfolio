import './App.css';
import About from './components/About-me/About';
import Contact from './components/Contact-me/Contact';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing-page/Landing.js';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="app-container">
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
