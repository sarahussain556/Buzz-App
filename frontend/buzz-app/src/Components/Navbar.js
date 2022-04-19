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