import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
	AccountBoxOutlined,
	BusinessCenterRounded,
	ConnectWithoutContactOutlined,
	InfoOutlined,
  } from "@mui/icons-material";


function Navbars() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <AccountBoxOutlined/>
      <Nav.Item as="li">
          <Link className="nav" to="/">
            Home
          </Link>
        </Nav.Item>

	  <BusinessCenterRounded/>
        <Nav.Item as="li">
          <Link className="nav" to="/project">
            Projects
          </Link>
        </Nav.Item>
      
      <ConnectWithoutContactOutlined/>
        <Nav.Item as="li">
          <Link className="nav" to="/contact">
            Contact
          </Link>
        </Nav.Item>
      
      <InfoOutlined/>
        <Nav.Item as="li">
          <Link className="nav" to="/about">
            About
          </Link>
        </Nav.Item>
    </Nav>
  );
}

export default Navbars;
