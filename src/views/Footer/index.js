import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => (
  <Row className="footer align-items-center justify-content-center">
    <Col id="footer_content">
      <Row className="justify-content-center align-items-center">
        <Col className="col-4">
          <a href="#" style={{ fontWeight: 'bold' }}>
            ngrok
          </a>
        </Col>
        <Col>
          <Row>
            <Col>
              <a href="#">Goals</a>
            </Col>
            <Col>
              <a href="#">Team</a>
            </Col>
            <Col>
              <a href="#">Contact</a>
            </Col>
            <Col>
              <a href="#">Initiatives</a>
            </Col>
            <Col>
              <a href="#">Login</a>
            </Col>
            <Col>
              <a href="#">Faqs </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default Footer;
