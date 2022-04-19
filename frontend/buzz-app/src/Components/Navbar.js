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
    {
      user ? (

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

      ) : (

        <Link className="link" to = "/login"> Login </Link>
      )
    }
    

  
  </Container>
</Navbar>
    </>
  );
};

export default NavigationBar;