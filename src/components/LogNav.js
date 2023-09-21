import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function LogNav() {
const toggleNavbar=()=>{
    const navbarNav = document.getElementById("menu");
    navbarNav.classList.toggle("navmanu");
}
  return (
    <>
      <Navbar className='bg-brand fixed-top' data-bs-theme="dark"> 
        <Container className='d-flex'>
          <Navbar.Brand className='' to="#home">MVR Shashtri.com</Navbar.Brand>
          <button
        className={`navbar-toggler d-md-none show d-flex `}
        type="button"
        onClick={toggleNavbar}
      >
        <FontAwesomeIcon className='text-dark' icon={faBars} />
      </button>
          <Nav className="  " id='menu'>
            <Nav.Link className='px-md-3 ' to="/login">About</Nav.Link>
            <Nav.Link className='px-md-3 ' to="/login">Contact</Nav.Link>
            <Nav.Link className='px-md-3 active'  to="/login">Login</Nav.Link>
          </Nav>
          
        </Container>
      </Navbar>
      

    </>
  );
}

export default LogNav;