import React, { useEffect, useState } from "react";
import { Table, Button, Container, Row, Col, Form, Alert, Spinner } from "react-bootstrap";
import { Link } from 'react-router-dom';

const ListaClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    cargarClientes();
  }, []);

  const cargarClientes = async () => {
    try {
      setLoading(true);
      const data = await clienteService.getClientes();
      setClientes(data);
      setError(null);
    } catch (error) {
      setError("Error al cargar los clientes");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const buscarCliente = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = await clienteService.buscarClientes(filtro);
      setClientes(data);
      setError(null);
    } catch (error) {
      setError("Error al buscar los clientes");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const eliminarCliente = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este cliente?")) {
      try {
        setLoading(true);
        await clienteService.eliminarCliente(id);
        await cargarClientes();
        setError(null);
      } catch (error) {
        setError("Error al eliminar el cliente");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h2>Lista de clientes</h2>
        </Col>
        <Col className="text-end">
          <Button as={Link} to="/Cliente/crear" variant="primary">Crear Cliente</Button>
        </Col>
      </Row>

      <Form onSubmit={buscarCliente} className="mb-4">
        <Row>
          <Col md={10}>
            <Form.Control
              type="text"
              placeholder="Buscar nombre o correo"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <Button type="submit" variant="outline-primary" className="w-100">
              Buscar
            </Button>
            <Button
              variant="outline-secondary"
              className="w-100 mt-2"
              onClick={cargarClientes}
            >
              Limpiar
            </Button>
          </Col>
        </Row>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.nombre}</td>
              <td>{cliente.correo}</td>
              <td>{cliente.telefono}</td>
              <td>{cliente.direccion}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  as={Link}
                  to={`/Cliente/editar/${cliente.id}`}
                  className="me-2"
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => eliminarCliente(cliente.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListaClientes;
