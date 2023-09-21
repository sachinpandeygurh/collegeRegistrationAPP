import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function Model(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Register Here
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>College Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your college name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Mobile number</Form.Label>
            <Form.Control type="tel" placeholder="Enter your mobile number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Label>Gmail Address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control type="date" placeholder="Enter your date of birth" />
          </Form.Group>
          {/* <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Label>College ID (Upload)</Form.Label>
            <Form.Control type="file" size="lg" />
          </Form.Group> */}
          <Button className='bg-success d-block mx-auto mb-3' type='Submit'>
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
      <div className="d-flex justify-content-between align-items-center">
              <p>
                <span>already Registered </span>
                <Link to="/login" onClick={props.onHide}>Login</Link>
              </p>
             
            </div>
      </Modal.Footer>
    </Modal>
  );
}

export default Model;
