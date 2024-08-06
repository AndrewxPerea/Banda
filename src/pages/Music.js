import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

function Music() {
  const songs = [
    { title: "Bolero Romántico", description: "Un clásico bolero lleno de amor y pasión." },
    { title: "Salsa en el Corazón", description: "Una salsa vibrante que hará que te levantes a bailar." },
    { title: "Ritmos Antillanos", description: "Una mezcla de ritmos tradicionales de las Antillas." }
  ];

  return (
    <Container style={{ backgroundColor: 'black', color: 'yellow', padding: '20px', marginTop: '20px' }}>
      <h2>Nuestra Música</h2>
      <Row>
        {songs.map((song, index) => (
          <Col key={index} md={4} style={{ marginBottom: '20px' }}>
            <Card bg="dark" text="white">
              <Card.Body>
                <Card.Title>{song.title}</Card.Title>
                <Card.Text>{song.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Music;
