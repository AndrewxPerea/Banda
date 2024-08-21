import React from 'react';
import { Nav } from 'react-bootstrap';

function SidebarAbout() {
  return (
    <div className="sidebar">
      <Nav defaultActiveKey="/about" className="flex-column">
        <Nav.Link href="/about">Sobre Nosotros</Nav.Link>
        <Nav.Link href="/about/experience">Experiencia</Nav.Link>
        <Nav.Link href="/about/formatos">Formatos</Nav.Link>
      </Nav>
    </div>
  );
}

export default SidebarAbout;
