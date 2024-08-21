import React from 'react';
import { Nav } from 'react-bootstrap';

function SidebarHome() {
  return (
    <div className="sidebar">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Inicio</Nav.Link>
        <Nav.Link href="/home/feature1">Feature 1</Nav.Link>
        <Nav.Link href="/home/feature2">Feature 2</Nav.Link>
      </Nav>
    </div>
  );
}

export default SidebarHome;
