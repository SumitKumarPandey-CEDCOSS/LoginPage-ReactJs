
import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { Route, Routes, Link } from "react-router-dom";
import Home from './dashboard.js';
import Setting from './setting.js';
import About from './about.js';

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "test",
      password: "123"
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(document.forms[0]);
    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };


  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name="uname" placeholder="Enter Username" required />
        <div className="text-danger">{renderErrorMessage("uname")}</div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="pass" placeholder="Password" required />
        <div className="text-danger">{renderErrorMessage("pass")}</div>

      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );

  const routing = (
    <div className="App">
      <div className="list">
        <ul>
          <li><Link style={{ textDecoration: 'none', color: 'white' }} to="/">Home</Link></li>
          <li><Link style={{ textDecoration: 'none', color: 'white' }} to="about">About</Link></li>
          <li><Link style={{ textDecoration: 'none', color: 'white' }} to="setting">Setting</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title text-center"><h2>Login Form</h2></div>
        {isSubmitted ? routing : renderForm}
      </div>
    </div>
  );
}

export default App;
