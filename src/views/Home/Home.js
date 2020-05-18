import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Home.css';

const Home = () => (
  <Container fluid>
    <Row>
      <Col id="homecontent">
        <Row id="navcontent" className="align-items-center">
          <Col className="col-2">
            <a href="#" style={{ fontWeight: 'bold' }}>
              ngrok
            </a>
          </Col>
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
        <Row id="brand" className="justify-content-center">
          <Col>
            <h1>Uganda Governments Revenue Online</h1>
            <p>You and I can help improve Our Country and local communitys Revenue</p>
            <a href="#">
              <div>MOBILIZE AND BE PART OF GROWTH</div>
            </a>
          </Col>
        </Row>
        <Row id="about" className="align-items-center">
          <Col className="trend col-7">#sdgcompetition2020</Col>
          <Col className="col-4">Copyright@Team-266</Col>
          <Col className="col-1">
            <a href="#">Github</a>
          </Col>
        </Row>
      </Col>
      <Col id="sidebar">Black side</Col>
    </Row>
    <Row className="footer align-items-center">
      <Col id="footer_content">
        <Row className="justify-content-center align-items-center">
          <Col className="col-4">
            <a href="#" style={{ fontWeight: 'bold' }}>
              ngrok
            </a>
          </Col>
          <Col className="col-1">
            <a href="#">Goals</a>
          </Col>
          <Col className="col-1">
            <a href="#">Team</a>
          </Col>
          <Col className="col-1">
            <a href="#">Contact</a>
          </Col>
          <Col className="col-1">
            <a href="#">Initiatives</a>
          </Col>
          <Col className="col-1">
            <a href="#">Login</a>
          </Col>
          <Col className="col-1">
            <a href="#">Faqs </a>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Home;
