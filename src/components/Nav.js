import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMicrophone,  faUserTie, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Model from './Model';

export function Nav() {
  const [modalShow, setModalShow] = useState(false);
  const [searchmodalShow, setSearchmodalShow] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const openSearchModel = () => {
    setSearchmodalShow(true);
  };

  return (
    <div className="App h-25 container border position-relative d-flex justify-content-between align-items-center">
      <img src={logo} className="App-logo" alt="logo" />
      <button
        className="navbar-toggler"
        type="button"
        onClick={openSearchModel} // Opens the SearchModel
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <SearchModel show={searchmodalShow} onHide={() => setSearchmodalShow(false)} />

      <img src={logo} className="App-logo d-none" alt="logo" />
      <Link className="" onClick={() => setModalShow(true)}> {/* Opens the Model */}
        <FontAwesomeIcon icon={faUserTie} />
      </Link>
      <Model show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  
  );
}


export const SearchModel =(props)=>{
  return(<>
   <Modal {...props} aria-labelledby="contained-modal-title-vcenter top" centered style={{top:"-12.7em"}}>
      <Modal.Body>
        <Form className='d-flex row'>
        <Link className='col-md-2 d-flex text-dark justify-content-start align-items-center col-2' onClick={props.onHide}>
            <FontAwesomeIcon className='p-2 rounded-pill' icon={faArrowLeftLong} style={{ backgroundColor: "#00000012" }} />
          </Link>
        <div className="d-flex align-items-center text-dark col-8">
            <div className="input-group border rounded-pill bg-white ml-3 px-2">
              <input type="text" className="form-control border-0 w-25 bg-transparent" placeholder="Search" />
              <div className="input-group-append">
                <button className="btn border-start rounded-start-2" type="button">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </div>

          <div className='col-md-2 d-flex text-dark justify-content-start align-items-center col-2'>
            <FontAwesomeIcon className='p-2 rounded-pill' icon={faMicrophone} style={{ backgroundColor: "#00000026" }} />
          </div>
        </Form>
      </Modal.Body>
      
     
    </Modal>
  </>)
}