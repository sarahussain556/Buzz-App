import React from "react";
import "../Components/Navbar.css";
import { Link } from "react-router-dom";
import { Navbar, Container} from "react-bootstrap";

const NavigationBar = ({user}) => {
  
  return (
    <>
    <Navbar className="p-0" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container className="m-0">
    <Navbar.Brand href="#">
      <Link className="link" to="/">
      <img
        src="/images/ttnlogo2.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="To The New"                        
      />
        <Navbar.Brand className="p-2">TO THE NEW</Navbar.Brand>
      </Link>

     
  </Navbar.Brand>


 <nav className="navbar navbar-light bg-light searchbar">
  <div className="container-fluid">
    <form className="d-flex searchbar">
      <input className="form-control me-2" type="search" placeholder="Start a post..." aria-label="Search" />
     
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16">
  <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
  <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/>
</svg> &nbsp; &nbsp;
    
     <h5 className="searchbar">Photo/Video</h5>
    </form>
  </div>
</nav>


  <div className="  pullright">
  <ul className="list d-flex">
    <li className="listItem">
      <img 
        src="/images/profile1.jpg"
        width="30"
        height="30"
        className="avatar"
        alt="To The New"                        
      />
    </li>
    <li className="listItem">
      Taylor Smith
    </li>
    <li className="listItem">
      logout
    </li>
      
  </ul> 
  </div>
  </Container>
</Navbar>
    </>
  );
};

export default NavigationBar;