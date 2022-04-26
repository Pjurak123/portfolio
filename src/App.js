import './App.css';
import About from './components/About-me/About';
import Landing from './components/Landing-page/Landing.js';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="app-container">
      <Landing />
      <About />
      <Projects />
    </div>
  );
}

export default App;
