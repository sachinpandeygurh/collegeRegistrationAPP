import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlay,
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, Navigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OtpInput from "otp-input-react";
import Model from "./Model";
import { auth } from "../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"; 
import { initializeApp } from "firebase/app"; 

const firebaseConfig = {
  apiKey: "AIzaSyDMDNW4gPkcSYIkWJKsgxWWd7mWIi34vfI",
  authDomain: "otpauth-a08ac.firebaseapp.com",
  projectId: "otpauth-a08ac",
  storageBucket: "otpauth-a08ac.appspot.com",
  messagingSenderId: "610440294955",
  appId: "1:610440294955:web:4b57d8115fc5835e65306e",
  measurementId: "G-D5W4942BMM"
};

const app = initializeApp(firebaseConfig);

function Login() {
  const [modalShow, setModalShow] = useState(false);
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [user, setUser] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [formControlStyles, setFormControlStyles] = useState({
    outline: "none",
    border: "none",
  });

  useEffect(() => {
    const appVerifier = new RecaptchaVerifier("sign-in-button", {
      size: "invisible",
      callback: (response) => {
        // Callback function when reCAPTCHA verification is successful
        // Implement the signInWithPhoneNumber logic here
        const phoneNumber = ph + "+";
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            setShowOTP(true);
            alert("OTP Sent successfully!");
          })
          .catch((error) => {
            console.error(error.message);
          });
      },
    });
    appVerifier.render().then((widgetId) => {
      appVerifier.recaptchaWidgetId = widgetId;
    });
  }, [ph]);

  async function onSignInSubmit(e) {
    e.preventDefault();
    const phoneNumber = ph + "+";
    const appVerifier = RecaptchaVerifier.recaptchaWidgetId; 
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setShowOTP(true);
        alert("OTP Sent successfully!");
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  async function onOTPVerify() {
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        Navigate("/");
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error);
        alert("Error verifying OTP: " + error.message);
      });
  }

  return (
    <section className="vh-100 mt-md-0 mt-5">
      <div className="container-fluid h-100 h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <Form>
              {!showOTP ? (
                <Form.Group className="mb-3" controlId="formMobileNumber">
                  <Form.Label>Mobile Number</Form.Label>
                  <div className="input-group border flex-nowrap align-items-center">
                    <PhoneInput
                      type="number"
                      country={"in"}
                      placeholder="Enter Registered Mobile Number"
                      className="border-0"
                      style={formControlStyles}
                      value={ph}
                      onChange={setPh}
                      onFocus={() =>
                        setFormControlStyles({
                          ...formControlStyles,
                          outline: "none",
                          boxShadow: "none",
                        })
                      }
                    />
                    <Button
                      onClick={onSignInSubmit}
                      id="sign-in-button"
                      className="w-25"
                      variant="success"
                      type="submit"
                    >
                      Send OTP
                    </Button>
                  </div>
                </Form.Group>
              ) : (
                <>
                  <Form.Group className="mb-3" controlId="formOTP">
                    <Form.Label>OTP</Form.Label>
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      OTPLength={6}
                      otpType="number"
                      disabled={false}
                      autofocus
                    ></OtpInput>
                  </Form.Group>

                  <Button
                    variant="success"
                    className="d-block mx-auto btn btn-muted"
                    type="button"
                    disabled={false}
                    onClick={onOTPVerify}
                  >
                    Submit
                  </Button>
                </>
              )}

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
