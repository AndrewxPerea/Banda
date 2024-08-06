import React from 'react';
import { Container } from 'react-bootstrap';

function About() {
  return (
    <Container style={{ backgroundColor: 'black', color: 'yellow', padding: '20px', marginTop: '20px' }}>
      <h2>Sobre Nosotros</h2>
      <p>
        Siete Octavos es una banda dedicada a la música de boleros, salsa y música antillana. 
        Con un sonido único y una pasión por la música latina, nos esforzamos por traer alegría y ritmo a nuestro público.
      </p>
      <p>
        Nuestra misión es preservar y promover la rica herencia musical de los boleros y la música antillana, 
        mientras que infundimos nuestro propio estilo moderno y energético.
      </p>
      <p>
        ¡Gracias por acompañarnos en este viaje musical!
      </p>
    </Container>
  );
}

export default About;
