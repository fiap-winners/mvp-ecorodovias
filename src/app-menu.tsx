import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import { bases } from "./shared/data";
import { Option } from "./shared/types";

export default function AppMenu() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">MVP EcoRodovias</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink exact to="/" className="nav-link">
            Dashboard
          </NavLink>
          <NavDropdown title="Base de Atendimento" id="basic-nav-dropdown">
            {bases.map((base: Option) => (
              <NavDropdown.Item style={{ padding: 0 }}>
                <NavLink
                  className="dropdown-item"
                  key={base.name}
                  to={`/bases-de-atendimento/${base.id}`}
                >
                  {base.name}
                </NavLink>
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <NavLink to="/ocorrencias" className="nav-link">
            Ocorrências
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
