import React, { Component } from 'react';
import './index.css';
import {Form,Col,Row,Button} from 'react-bootstrap'

class Login extends Component {
render(){
    return(
        <Form   classname='login-form'>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    )
}
}

export default Login;