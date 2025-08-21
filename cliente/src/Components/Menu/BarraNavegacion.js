import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const BarraNavegacion = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Mi App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>

            {/* Clientes */}
            <NavDropdown title="Clientes" id="clientes-dropdown">
              <NavDropdown.Item as={Link} to="/clientes">Lista de clientes</NavDropdown.Item>
            </NavDropdown>

            {/* Pedidos */}
            <NavDropdown title="Pedidos" id="pedidos-dropdown">
              <NavDropdown.Item as={Link} to="/pedidos">Nuevos pedidos</NavDropdown.Item>
            </NavDropdown>

            {/* Facturación */}
            <NavDropdown title="Facturación" id="facturacion-dropdown">
              <NavDropdown.Item as={Link} to="/facturacion/nueva">Nueva Factura</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/facturacion/lista">Lista de Facturas</NavDropdown.Item>
            </NavDropdown>

            {/* Productos */}
            <NavDropdown title="Productos" id="productos-dropdown">
              <NavDropdown.Item as={Link} to="/productos/lista">Inventarios</NavDropdown.Item>
            </NavDropdown>

            {/* Proveedores */}
            <NavDropdown title="Proveedores" id="proveedores-dropdown">
              <NavDropdown.Item as={Link} to="/proveedores/lista">Lista de Proveedores</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Usuario */}
          <Nav>
            <NavDropdown title={`Bienvenido, ${user?.nombre || "Invitado"}`} id="user-dropdown">
              <NavDropdown.Item as={Link} to="/perfil">Perfil</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/logout">Cerrar sesión</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
