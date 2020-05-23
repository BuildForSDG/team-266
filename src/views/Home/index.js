import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Footer from '../Footer';
import './Home.css';

const Home = () => (
  <Container fluid style={{ width: '100%', height: '100%' }}>
    <Row className="content">
      <Col id="homecontent">
        <Row id="navcontent" className="justify-content-center align-items-center">
          <Col className="col-3">
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
        <Row id="brand" className="justify-content-center align-items-center">
          <h2>Uganda Governments Revenue Online</h2>
          <p>You and I can help improve Our Country and local communitys Revenue</p>
          <a href="#">
            <div>MOBILIZE AND BE PART OF GROWTH</div>
          </a>
        </Row>
        <Row id="about" className="justify-content-center align-items-center">
          <Col className="trend col-6">#sdgcompetition2020</Col>
          <Col className="col-4">Copyright@Team-266</Col>
          <Col className="col-2">
            <a href="#">Github</a>
          </Col>
        </Row>
      </Col>
      <Col id="sidebar" />
    </Row>
    <Footer />
  </Container>
);

export default Home;
