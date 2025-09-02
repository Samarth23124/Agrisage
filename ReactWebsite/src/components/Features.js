import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Complete from '../images/complete.PNG';
import plantDiseaseDetected from '../images/cropsuggesterimg.png';
import noInternet from '../images/noInternet.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';

const Features = () => {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div
        style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '2rem' }}
      >
        <h2>Our Salient Features</h2>
      </div>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={Complete}
                width="300"
                height="300"
                alt="detail information"
              />
              <Card.Body>
                <Card.Text>
                  Detailed information from sowing till harvesting
                </Card.Text>
                <a href="/modern">
                  <Button variant="primary">Explore More</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={plantDiseaseDetected}
                width="300"
                height="300"
              />
              <Card.Body>
                <Card.Text>
                  No idea which Crops to Grow?
                  <br />
                  Try our Crop Suggester!
                </Card.Text>
                <a href="/suggest">
                  <Button variant="primary">Suggest Crop</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={noInternet}
                width="300"
                height="300"
              />
              <Card.Body>
                <Card.Text>
                  Unique SMS based model for farmers without internet
                </Card.Text>
                <a href="/">
                  <Button variant="primary">SMS Now</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <div
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            marginBottom: '2rem',
          }}
        >
          <h2>Our Range of Services</h2>
        </div>
        <Row className="justify-content-center">
          <Col className="d-flex flex-column align-items-center mb-4">
            <img
              src={plantDiseaseDetected}
              alt="Crop Disease Detection"
              className="spouting-image"
            />
            <span className="text-center">
              <strong>Crop Recommendation</strong>
            </span>
          </Col>
          <Col className="d-flex flex-column align-items-center mb-4">
            <img
              src={icon2}
              alt="Weather and All API support"
              className="spouting-image"
            />
            <span className="text-center">
              <strong>Weather and All API support</strong>
            </span>
          </Col>
          <Col className="d-flex flex-column align-items-center mb-4">
            <img
              src={icon3}
              alt="Irrigation and Modern Farming"
              className="spouting-image"
            />
            <span className="text-center">
              <strong>Irrigation and Modern Farming</strong>
            </span>
          </Col>
          <Col className="d-flex flex-column align-items-center mb-4">
            <img
              src={icon4}
              alt="Cross-Platform Application"
              className="spouting-image"
            />
            <span className="text-center">
              <strong>Cross-Platform Application</strong>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Features;
