import React from 'react';
import ReactPlayer from 'react-player';
import ReactDOM from 'react-dom/client';
import './index.css';
import Landing from './landing_page';
import About from '../../../src/about';
import Projects from '../../../src/projects';
import Skills from '../../../src/skills';
import Profiles from '../../../src/profiles';
import Contact from '../../../src/contact';
import video from './back1.mp4'
function App(){
  return(
  <div>
    <Landing />
    <About />
    <Projects />
    <Skills />
    <Profiles />
    <Contact />
  </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


