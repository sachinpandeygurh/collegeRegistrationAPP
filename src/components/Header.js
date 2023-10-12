import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMicrophone, faVideo, faBell, faUserTie, faBars } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.svg';
import '../App.css';
import Model from './Model';
import { Link } from 'react-router-dom';


function Header() {
  const [modalShow, setModalShow] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const inputRef = useRef(null)

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  
  const handleMic = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    if ('SpeechRecognition' in window) {
      const recognition = new window.SpeechRecognition();

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        inputRef.current.value = transcript;
      };

      recognition.start();
    }
     else {
      alert('Speech recognition is not supported in your browser.');
    }
  }
  return (
    <div className="App border pt-3 py-1">
      <button 
        className="navbar-toggler d-md-none" 
        type="button" 
        onClick={toggleNavbar} 
      >
        <FontAwesomeIcon className="text-dark" icon={faBars} /> 
      </button>

      <img src={logo} className="App-logo" alt="logo" />


      <header className={` App-header ${showNavbar ? 'show' : ''}`}>
        <div className='mt-md-0 d-flex my-3 col-12 row justify-content-around mt-5'>
          <div className='col-md-3' />

          <div className="d-flex align-items-center text-dark col-md-4 col-10">
            <div className="input-group border rounded-pill bg-white ml-3 px-2">
              <input type="text" className="form-control border-0 w-25 bg-transparent" placeholder="Search" ref={inputRef}/> 
              <div className="input-group-append">
                <button className="btn border-start rounded-start-2" type="button">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </div>

          <Link className='col-md-2 d-flex text-dark justify-content-start align-items-center col-2' onClick={handleMic}>
            <FontAwesomeIcon className='p-2 rounded-pill' icon={faMicrophone} style={{ backgroundColor: "#00000026" }} />
          </Link>

          <div className='mt-md-0 d-flex text-dark col-md-3 justify-content-evenly align-items-center mt-5 my-3'>
            <div>
                <FontAwesomeIcon icon={faVideo} />
            </div>
            <div><FontAwesomeIcon icon={faBell} /></div>
            <Link className='link' onClick={() => setModalShow(true)}><FontAwesomeIcon icon={faUserTie} /></Link>
            <Model show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;


// npm config set globalconfig "D:\npm-global\npmrc"
// npm config set prefix "D:\npm-global"
