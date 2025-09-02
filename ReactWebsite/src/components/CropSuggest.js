import React from 'react';
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

class CropSuggest extends React.Component {
  state = {
    modal: false,
    n: '',
    p: '',
    k: '',
    temp: '',
    hum: '',
    ph: '',
    rain: '',
    show: false,
    crop: null,
  };

  static propTypes = {
    getQuestions: PropTypes.func, // Remove `.isRequired`
    question: PropTypes.object,
    isAuthenticated: PropTypes.bool,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(
      this.state.n,
      this.state.p,
      this.state.k,
      this.state.temp,
      this.state.hum,
      this.state.ph,
      this.state.rain
    );
    this.setState({ show: true });

    axios({
      method: 'POST',
      url: 'http://localhost:8000/predict',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      data: {
        features: [
          parseFloat(this.state.n),
          parseFloat(this.state.p),
          parseFloat(this.state.k),
          parseFloat(this.state.temp),
          parseFloat(this.state.hum),
          parseFloat(this.state.ph),
          parseFloat(this.state.rain),
        ],
      },
    })
      .then((response) => {
        console.log('Full API Response:', response); // Log the full response
        console.log('Response Data:', response.data);
        console.log('Crop Data Received:', response.data.crop); // Log the crop data
        this.setState({ crop: response.data.prediction[0], modal: false });
      })
      .catch((error) => {
        console.error('Error occurred:', error);
      });
  };

  render() {
    return (
      <Container>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2>Not sure which crop to grow?</h2>
          <br />
          <h5>Submit your soil profile for crop suggestion</h5>
        </div>

        <div className="d-flex justify-content-center">
          <Button color="success" onClick={this.toggle}>
            Answer now
          </Button>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div
          className={
            this.state.crop ? 'text-center crop-suggest' : 'text-center'
          }
        >
          {this.state.crop ? (
            <p>
              Best suitable crop for your soil is <span>{this.state.crop}</span>
            </p>
          ) : null}
        </div>

        <br />
        <br />
        <br />
        <br />

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Answer the question</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Nitrogen</Label>
                <Input
                  type="text"
                  name="n"
                  id="n"
                  placeholder="Ratio of nitrogen content in soil"
                  value={this.state.n}
                  style={{ marginBottom: '1rem' }}
                  onChange={this.onChange}
                />

                <Label for="item">Phosphorus</Label>
                <Input
                  type="text"
                  name="p"
                  id="p"
                  placeholder="Ratio of Phosphorus content in soil"
                  value={this.state.p}
                  style={{ marginBottom: '1rem' }}
                  onChange={this.onChange}
                />

                <Label for="item">Potassium</Label>
                <Input
                  type="text"
                  name="k"
                  id="k"
                  placeholder="Ratio of Potassium content in soil"
                  value={this.state.k}
                  style={{ marginBottom: '1rem' }}
                  onChange={this.onChange}
                />

                <Label for="item">Temperature</Label>
                <Input
                  type="text"
                  name="temp"
                  id="temp"
                  placeholder="Temperature in degree celsius"
                  value={this.state.temp}
                  style={{ marginBottom: '1rem' }}
                  onChange={this.onChange}
                />

                <Label for="item">Relative Humidity</Label>
                <Input
                  type="text"
                  name="hum"
                  id="hum"
                  placeholder="Relative humidity in percentage"
                  value={this.state.hum}
                  style={{ marginBottom: '1rem' }}
                  onChange={this.onChange}
                />

                <Label for="item">pH</Label>
                <Input
                  type="text"
                  name="ph"
                  id="ph"
                  placeholder="pH value of soil"
                  value={this.state.ph}
                  style={{ marginBottom: '1rem' }}
                  onChange={this.onChange}
                />

                <Label for="item">Rainfall</Label>
                <Input
                  type="text"
                  name="rain"
                  id="rain"
                  placeholder="Rainfall in mm"
                  value={this.state.rain}
                  style={{ marginBottom: '1rem' }}
                  onChange={this.onChange}
                />

                <Button color="dark" style={{ marginTop: '2rem' }} block>
                  Submit
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

export default CropSuggest;
