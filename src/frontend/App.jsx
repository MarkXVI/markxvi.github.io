import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CV from './components/cv/cv.component.jsx';
import OS from './components/os/os.component.jsx';
import Start from './components/start/start.component.jsx';
import Contact from './components/contact/contact.component.jsx';
import Loading from './components/constant_components/loading/loading.component.jsx';
import Terminal from './components/terminal/terminal.component.jsx';
import ThreeCV from './components/threeCV/threeCV.component.jsx';
import ThreeStart from './components/threeStart/threeStart.component.jsx';

import Header from './components/constant_components/header/header.component.jsx';

import './stylesheets/App.stylesheet.css';

function App() {
  const [activePanel, setActivePanel] = useState('start');

  const setCurrentPage = () => {
    console.log("Setting Current Page...");

    switch (activePanel) {

      case 'loading':
        return < Loading />
      case 'cv':
        return (
          <div className='AppHeaderSpace'>
            < Header activePanel={activePanel} setActivePanel={setActivePanel} />
            < CV />
          </div>
        )
      case 'start':
        return (
          <div className='AppHeaderSpace'>
            < Header activePanel={activePanel} setActivePanel={setActivePanel} />
            < Start />
          </div>
        )
      case 'contact':
        return (
          <div className='AppHeaderSpace'>
            < Header activePanel={activePanel} setActivePanel={setActivePanel} />
            < Contact />
          </div>
        )
      case '3dcv':
        return (
          <div className='AppHeaderSpace'>
            < Header activePanel={activePanel} setActivePanel={setActivePanel} />
            < ThreeCV />
          </div>
        )
      case '3dstart':
        return (
          <div className='AppHeaderSpace'>
            < Header activePanel={activePanel} setActivePanel={setActivePanel} />
            < ThreeStart />
          </div>
        )
    }

  }

  return (
    <Router>
      <Routes>
        <Route path="" element={setCurrentPage()} />
        <Route path="/terminal" element={< Terminal />} />
        <Route path="/os" element={< OS />} />
      </Routes>
    </Router>
  )
}

export default App
