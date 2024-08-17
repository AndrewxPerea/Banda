import React from 'react';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';


function Home() {
  return (
    <Container
      fluid
      className="text-center"
      style={{
        backgroundColor: 'black',
        color: 'yellow',
        padding: '10px 0',
      }}
    >
      <Row>
        <Col >
          <Image
            src="/images/fondo.jpeg" // Asegúrate de que la ruta sea correcta
            className="img-fluid"
            alt="Siete Octavos Logo"
            fluid
            style={{ maxWidth: '15%', marginBottom: '5%' }} // Ajusta el tamaño y margen según tus necesidades
          />
          <h1 className="display-4">Bienvenidos a Siet7/8ctavos</h1>
          <p className="lead">Música de boleros, salsa y música antillana</p>
          <Button variant="warning">Explora nuestra música</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
