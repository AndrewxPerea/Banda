import React from 'react';
import { Container } from 'react-bootstrap';
import SidebarAbout from '../components/SidebarAbout';
function Experience() {
  return (
      <div className="d-flex">
             <SidebarAbout />
    <Container style={{ backgroundColor: 'black', color: 'yellow', padding: '20px', marginTop: '20px' }}>
      <h2>Algunas de nuestras participaciones</h2>
      <ul>
        <li> Festival Nacional de teatro, Cartago Valle 2018</li> 
        <li>  Conmemoración Afrocolombianidad, Cartago 2019</li>
        <li>  Inauguración Fiestas De Cartago 2019</li>
        <li>  Misa Inculturada, Pereira 2019</li>
        <li>  Conmemoración Afrocolombianidad Cartago 2020</li>
        <li>  Conmemoración Afropereiranidad, Pereira 2021</li>
        <li>  Conmemoración Afrocolombianidad Cartago 2022</li>
        <li>  Finalización Festival de Teatro 2022</li>
        <li>   Serenata de amor a Cartago 2022</li>
        <li>   Misa Inculturada Cartago 2022</li>
        <li>  Serenata del Café 2022 (Canal Telecafé)</li>
        <li>  Festival "Montañeros en el Paraguas" 2022 El Cairo</li>
        <li>   Serenata de Amor a Cartago 2023 </li>
      </ul>
      
    </Container>
    </div>
  );
}

export default Experience;
