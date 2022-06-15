import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';

export default function Navb() {
  return (
  <Navbar bg="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Welto Lopes</Navbar.Brand>
      <Nav.Link href="#projetos">Projetos</Nav.Link>
      <Nav.Link href="#sobremim">Sobre mim</Nav.Link>
      <Nav.Link href="#stacks">Minhas Stacks</Nav.Link>     
      <Nav.Link href="#contato">Entre em Contato</Nav.Link>
    </Container>
  </Navbar>
  )
}
