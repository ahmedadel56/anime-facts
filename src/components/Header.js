import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';
import Logo from '../assets/logo.jpeg';

const Header = () => (
  <Row style={{ background: '#588cef', color: 'white', marginBottom: '3rem' }}>
    <Col style={{ paddingLeft: '0' }}><Image src={Logo} alt="Logo Image" /></Col>
    <Col style={{
      textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center',
    }}
    >
      <h1>ANIMES FACTS</h1>
      <h2>13 awesome Animes </h2>
    </Col>
  </Row>
);

export default Header;
