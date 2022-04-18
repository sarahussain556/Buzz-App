import React from "react";
import "../Components/Navbar.css";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = ({user}) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
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
  {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src={user.photos[0].value}
              alt=""
              className="avatar"
            />
          </li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="link" to="/login">
          Login
        </Link>
      )}
    

  
  </Container>
</Navbar>
    </>
  );
};

export default NavigationBar;