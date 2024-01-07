import React from 'react';
import ReactPlayer from 'react-player';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Landing from './landing_page.js';
import About from './about.js';
import Projects from './projects.js';
import Skills from './skills.js';
import Profiles from './profiles.js';
import Contact from './contact.js';
import video from './back1.mp4'
function App(){
  return(
  <div>
    
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


