import React from 'react';
import { Container } from 'react-bootstrap';
import SidebarAbout from '../components/SidebarAbout';
function Formatos() {
  return (
      <div className="d-flex">
             <SidebarAbout />
    <Container style={{ backgroundColor: 'black', color: 'yellow', padding: '20px', marginTop: '20px' }}>
      <h2>Formatos</h2>
      <p>
      Actualmente tenemos dos formatos a tener en cuenta
      </p>
      <ul>
        <li> Música Antillana</li>
        <li> Parranda decembrina </li>
      </ul>
      <p>
      El formato de música antillana tiene un costo de 1,8 Millones para dos
salidas de 45 minutos
      </p>
      <p>
      contamos con nuestra propia amplificación para brindar un servicio de
calidad.

      </p>
      <p> 
      Nuestro formato de parranda decembrina tiene un costo de 1,8
Millones para dos salidas de 45 minutos.

      </p>
      <p> 
      Contáctanos para saber de otros paquetes de servicio ofrecemos
según la necesidad y el presupuesto de nuestra clientela.

      </p>
    </Container>
    </div>
  );
}

export default Formatos;
