import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import arc from '../images/arc.jpg';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import icon5 from '../images/icon5.png';
import icon6 from '../images/cropsuggesterimg.png';

const About = () => {
  return (
    <div className="about-us">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1>
          <strong>Who We Are</strong>
        </h1>
      </div>
      <Container>
        <div>
          <h6>
            We are a dynamic group of people dedicated to serve the backbone of
            our nation, our Agrisage. to ensure that they get benefitted from
            the very best technology available in modern times and take benefit
            of modern technologies which would enable them to grow more and more{' '}
          </h6>
        </div>
      </Container>
      <Container>
        <div>
          <h3
            style={{
              textAlign: 'center',
              marginBottom: '2rem',
              marginTop: '2rem',
            }}
          >
            <strong> Range of features that we provide </strong>
          </h3>
          <Row className="text-center">
            <Col>
              <img src={icon6} alt="Feature 1" className="spouting-image" />
              <br />
              <span>
                <strong>Crop Recommendation</strong>
              </span>
            </Col>
            <Col>
              <img src={icon2} alt="Feature 2" className="spouting-image" />
              <br />
              <span>
                <strong>Weather and All API support</strong>
              </span>
            </Col>
            <Col>
              <img src={icon3} alt="Feature 3" className="spouting-image" />
              <br />
              <span>
                <strong>Irrigation and Modern Techniques</strong>
              </span>
            </Col>
            <Col>
              <img src={icon4} alt="Feature 4" className="spouting-image" />
              <br />
              <span>
                <strong>Cross-Platform Application</strong>
              </span>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <div>
          <h3
            style={{
              textAlign: 'center',
              marginBottom: '2rem',
              marginTop: '2rem',
            }}
          >
            <strong> How Agrisage Works </strong>
          </h3>
          <Row style={{ marginTop: '3rem', marginBottom: '3rem' }}>
            <Col>
              <img
                src={arc}
                width="500px"
                height="500px"
                alt="cross platform app"
              />
            </Col>
            <Col>
              <div>
                <h5>
                  <strong>Crop Disease Detection</strong>
                </h5>
                <p>
                  We use machine learning models and artificial intelligence to
                  predict whether a crop is diseased or not. What you need to
                  do? Just upload the picture of the crop you want to check the
                  health of and leave everything else to us. We will tell what
                  are the possible diseases your crops might be having
                </p>
              </div>
              <div>
                <h5>
                  <strong>Buy, Sell, Rent Farm Equipments</strong>
                </h5>
                <p>
                  We use machine learning models and artificial intelligence to
                  predict whether a crop is diseased or not. What you need to
                  do? Just upload the picture of the crop you want to check the
                  health of and leave everything else to us. We will tell what
                  are the possible diseases your crops might be having
                </p>
              </div>
              <div>
                <h5>
                  <strong>
                    Compelte API support for Weather Forecasting and Soil Checks
                  </strong>
                </h5>
                <p>
                  We use machine learning models and artificial intelligence to
                  predict whether a crop is diseased or not. What you need to
                  do? Just upload the picture of the crop you want to check the
                  health of and leave everything else to us. We will tell what
                  are the possible diseases your crops might be having
                </p>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: '3rem', marginBottom: '3rem' }}>
            <Col>
              <div>
                <h5>
                  <strong>Crop Disease Detection</strong>
                </h5>
                <p>
                  We use machine learning models and artificial intelligence to
                  predict whether a crop is diseased or not. What you need to
                  do? Just upload the picture of the crop you want to check the
                  health of and leave everything else to us. We will tell what
                  are the possible diseases your crops might be having
                </p>
              </div>
              <div>
                <h5>
                  <strong>Buy, Sell, Rent Farm Equipments</strong>
                </h5>
                <p>
                  We use machine learning models and artificial intelligence to
                  predict whether a crop is diseased or not. What you need to
                  do? Just upload the picture of the crop you want to check the
                  health of and leave everything else to us. We will tell what
                  are the possible diseases your crops might be having
                </p>
              </div>
              <div>
                <h5>
                  <strong>
                    Compelte API support for Weather Forecasting and Soil Checks
                  </strong>
                </h5>
                <p>
                  We use machine learning models and artificial intelligence to
                  predict whether a crop is diseased or not. What you need to
                  do? Just upload the picture of the crop you want to check the
                  health of and leave everything else to us. We will tell what
                  are the possible diseases your crops might be having
                </p>
              </div>
            </Col>
            <Col>
              <img
                src={icon5}
                width="600px"
                height="400px"
                alt="cross platform app"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
