import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import { FaHome } from "react-icons/fa";
import { FaTable } from "react-icons/fa";

export const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link
            className="nav-sidebar-link"
            as={Link}
            to="/home"
            active={location.pathname === "/home"}
          >
            <FaHome />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="nav-sidebar-link"
            as={Link}
            to="/maintainer"
            active={location.pathname === "/maintainer"}
          >
            <FaTable />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
