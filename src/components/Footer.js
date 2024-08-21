import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'black',
        color: 'yellow',
        padding: '20px 0',
        marginTop: '0',
        textAlign: 'center',
      }}
    >
      <Container>
        <Row>
          <Col>
            <h5>Siete Octavos</h5>
            <p>&copy; 2024 Siete Octavos. Todos los derechos reservados.</p>
            <p>
              <a href="https://www.facebook.com/7.8ctavos/" style={{ color: 'yellow' }} target="_blank" rel="noopener noreferrer">Facebook</a> | 
              <a href="https://www.twitter.com" style={{ color: 'yellow' }} target="_blank" rel="noopener noreferrer">Twitter</a> | 
              <a href="https://www.instagram.com" style={{ color: 'yellow' }} target="_blank" rel="noopener noreferrer">Instagram</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
