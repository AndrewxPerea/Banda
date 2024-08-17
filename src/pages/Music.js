import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

function Music() {
  const songs = [
    { title: "Bolero Romántico", description: "Un clásico bolero lleno de amor y pasión." },
    { title: "Parranda decembrina", description: "Una salsa vibrante que hará que te levantes a bailar." },
    { title: "Música Antillana", description: "Una mezcla de ritmos tradicionales de las Antillas." }
  ];

  const videos = [
    { title: "Bolero Romántico", url: "https://www.youtube.com/embed/vpDNCk1pzAM?si=_tyqDUa3Ok7R8EUo" },
    { title: "Parranda decembrina", url: "https://www.youtube.com/embed/vpDNCk1pzAM?si=_tyqDUa3Ok7R8EUo" },
    { title: "Antillana Performance", url: "https://www.youtube.com/embed/vpDNCk1pzAM?si=_tyqDUa3Ok7R8EUo" }
  ];

  return (
    <Container fluid style={{ backgroundColor: 'black', color: 'yellow', padding: '0px', marginTop: '10px' }}>
      <h2>Nuestra Música</h2>
      <Row>
        {songs.map((song, index) => (
          <Col key={index}  style={{ marginBottom: '0%' }}>
            <Card bg="dark" text="white">
              <Card.Body>
                <Card.Title>{song.title}</Card.Title>
                <Card.Text>{song.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h2>Videos</h2>
      <Row>
        {videos.map((video, index) => (
          <Col key={index} md={4} style={{ marginBottom: '20px' }}>
            <Card bg="dark" text="white">
              <Card.Body>
                <Card.Title>{video.title}</Card.Title>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src={video.url}
                    allowFullScreen
                    title={video.title}
                  ></iframe>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Music;
