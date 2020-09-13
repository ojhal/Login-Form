import React, { Component } from 'react';
import './App.css';
// import Button from 'react-bootstrap/Button';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { FacebookLoginButton } from 'react-social-login-buttons';

class App extends Component {
  render() {
    return (
      <Form className="login-form">
        <h1>
          <span className="font-weight-bold">mywebsite</span>.com
        </h1>
        <h2 className="text-center">Welcome</h2>
        <FormGroup>
          <label>Email</label>
          <Input type="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <label>Password</label>
          <Input type="password" placeholder="Password" />
        </FormGroup>
        <button className="btn-lg btn-dark btn-block">Log In</button>
        <div className="text-center pt-3">
          or continue with your social account
        </div>
        <FacebookLoginButton className="mt-3 mb-3" />
        <div className="text-center">
          <a href="/sign-up">Sign Up</a>
          <span className="p-2">|</span>
          <a href="/sign-up">Forgot Password</a>
        </div>
      </Form>
    );
  }
}


export default App;
