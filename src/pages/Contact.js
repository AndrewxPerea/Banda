import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container style={{ backgroundColor: 'black', color: 'yellow', padding: '20px', marginTop: '20px' }}>
      <h2>Contacto</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre" />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu email" />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Escribe tu mensaje" />
        </Form.Group>
        <Button variant="warning" type="submit">Enviar</Button>
      </Form>
    </Container>
  );
}

export default Contact;
