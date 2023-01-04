import React from "react";
import Nav from "react-bootstrap/Nav";

function HomeNav() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="https://birdup.info" eventKey="link-1">
          birdup
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="https://shanenull.com" eventKey="link-2">
          sncom
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="nav-right">
        <input value="search"></input>
      </Nav.Item>
    </Nav>
  );
}

export default HomeNav;
