import React, { Component } from 'react';
import './App.css';
// import Button from 'react-bootstrap/Button';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { FacebookLoginButton } from 'react-social-login-buttons';

class App extends Component {
  render() {
    return (
      <Form className="App">
        <h1>
          <span className="font-weight-bold">mywebsite</span>.com
        </h1>
        <h2>Welcome</h2>
        <label>Email</label>
      </Form>
    );
  }
}


export default App;
