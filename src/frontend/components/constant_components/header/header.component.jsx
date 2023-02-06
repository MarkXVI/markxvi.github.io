import {React, useState} from "react";
import '../../../stylesheets/header.stylesheet.css';
import logo from './../../../assets/MarkXVI_LOGO.svg';

const Header = (props) => {
  const { activePanel, setActivePanel } = props;
  const [ dimension, setDimension] = useState(true);

  const dimensionSwapper = () => {
    dimension ? setDimension(false) : setDimension(true);
    switch(activePanel) {
      case 'start':
        return setActivePanel('3dstart')
      case '3dstart':
        return setActivePanel('start')
      case 'cv':
        return setActivePanel('3dcv')
      case '3dcv':
        return setActivePanel('cv')
    }
  }

  const handler = (newPanel) => {
      if (dimension) {
        switch(newPanel) {
          case 'start':
            return setActivePanel('start')
          case 'cv':
            return setActivePanel('cv')
          case 'contact':
            return setActivePanel('contact')
        }
      } else {
        switch(newPanel) {
          case 'start':
            return setActivePanel('3dstart')
          case 'cv':
            return setActivePanel('3dcv')
          case 'contact':
            return setActivePanel('contact')
        }
      }

  }

  return (
      <header>
        <img src={logo} alt="Logo" className="logo" onClick={dimensionSwapper}/>
        <h1>MarkXVI.TBD</h1>
        <nav>
          <ul>
            <li><a onClick={() => handler('start')}>Home</a></li>
            {/* <li><a onClick={() => setActivePanel('3dstart')}>3D-Home</a></li> */}
            <li><a onClick={() => handler('cv')}>CV</a></li>
            {/* <li><a onClick={() => setActivePanel('3dcv')}>3D-CV</a></li> */}
            <li><a onClick={() => handler('contact')}>Contact</a></li>
          </ul>
        </nav>
      </header>
    );
};

export default Header;
