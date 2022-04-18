import React from "react";
import "../Components/Navbar.css";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
  <div className=" d-flex pullright">
  <img 
        src="/images/profile1.jpg"
        width="30"
        height="30"
        className="avatar"
        alt="To The New"                        
      />
      
      <div className="listItem">
      <Link className="link " to="/login">
          Login
      </Link>
  </div>
    

  </div>
        
    

  
  </Container>
</Navbar>
    </>
  );
};

export default NavigationBar;