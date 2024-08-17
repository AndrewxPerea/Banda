import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

function Gallery() {
  const carouselItemStyle = {
    height: '10%',  // Ajusta la altura según lo necesites
    objectFit: 'cover',
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '50%',
    maxWidth: '50%',
    margin: '0 auto',
  };

  return (
    <Container fluid style={{ backgroundColor: 'black', color: 'yellow', padding: '50px 0' }}>
      <h2 className="text-center mb-4">Galería de Fotos</h2>
      <Carousel>
        <Carousel.Item>
          <img
            style={carouselItemStyle}
            src="/images/foto1.jpeg"
            alt="Primera imagen"
          />
          <Carousel.Caption>
            <h3>Primera Imagen</h3>
            <p>Descripción de la primera imagen.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={carouselItemStyle}
            src="/images/foto2.jpeg"
            alt="Segunda imagen"
          />
          <Carousel.Caption>
            <h3>Segunda Imagen</h3>
            <p>Descripción de la segunda imagen.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={carouselItemStyle}
            src="/images/foto3.jpeg"
            alt="Tercera imagen"
          />
          <Carousel.Caption>
            <h3>Tercera Imagen</h3>
            <p>Descripción de la tercera imagen.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Gallery;
