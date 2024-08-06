import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <Container
      fluid
      className="text-center"
      style={{
        backgroundColor: 'black',
        color: 'yellow',
        padding: '100px 0',
      }}
    >
      <Row>
        <Col>
          <h1>Bienvenidos a Siete Octavos</h1>
          <p>Música de boleros, salsa y música antillana</p>
          <Button variant="warning">Explora nuestra música</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
