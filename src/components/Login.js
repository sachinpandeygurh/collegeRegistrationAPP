import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Model from "./Model";

function Login() {
  const [modalShow, setModalShow] = useState(false);

  const formControlStyles = {
    outline: "none",
  };

  return (
    <section className="vh-100 mt-md-0 mt-5">
    <div className="container-fluid h-100 h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <Form>
            <Form.Group className="mb-3" controlId="formMobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <div className="input-group">
                <Form.Control
                  type="text"
                  placeholder="Enter Registered Mobile Number"
                  style={formControlStyles}
                />
                <Button variant="success" type="submit">
                  Send OTP
                </Button>
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formOTP">
              <Form.Label>OTP</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter OTP Received"
                disabled
              />
            </Form.Group>

            <Button
              variant="success"
              className="d-block mx-auto btn btn-muted"
              type="button"
              disabled
            >
              Submit
            </Button>

            <div className="d-flex justify-content-between align-items-center">
              <p>
                <span>First-time user? </span>
                <Link onClick={() => setModalShow(true)}>Sign up</Link>
              </p>
              <Model show={modalShow} onHide={() => setModalShow(false)} />
            </div>
          </Form>
        </div>
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid"
            alt="Sampleimage"
          />
        </div>
      </div>
    </div>
    <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
      <div className="text-white mb-3 mb-md-0">
        Copyright © 2020. All rights reserved.
      </div>

      <div>
        <a href="#!" className="text-white me-4">
          <FontAwesomeIcon icon={faGooglePlay} />
        </a>
        <a href="#!" className="text-white me-4">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#!" className="text-white me-4">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#!" className="text-white">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  </section>
  );
}

export default Login;
