// Packages
import axios from 'axios'
import React from 'react'
import { Redirect } from 'react-router-dom'
import SERVER_URL from '../../constants'
import {Input, Label, Form, FormGroup} from 'reactstrap';

class Signup extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    profileUrl: '',
    message: ''
  }

  storeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value, message: '' })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // Send the user sign up data to the server
    axios.post(`${SERVER_URL}/auth/signup`, this.state)
    .then(response => {
      // Store Token in localStorage
      localStorage.setItem('mernToken', response.data.token)

      // Update App with user info
      this.props.updateUser()
    })
    .catch(err => {
      this.setState({
        message: `${err.response.status}: ${err.response.data.message}`
      })
    })
  }

  render() {
    if (this.props.user) {
      return <Redirect to="/profile" />
    }

    return (
      <div>
        <h2>Signup</h2>
        <span className="red">{this.state.message}</span>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>First Name:</Label>
            <Input name="firstname" placeholder="Your first name" onChange={this.storeInput} />
          </FormGroup>
          <FormGroup>
            <Label>Last Name:</Label>
            <Input name="lastname" placeholder="Your last name" onChange={this.storeInput} />
          </FormGroup>
          <FormGroup>
            <Label>Email:</Label>
            <Input type="email" name="email" onChange={this.storeInput} />
          </FormGroup>
          <FormGroup>
            <Label>Password:</Label>
            <Input type="password" name="password" onChange={this.storeInput} />
          </FormGroup>
          <FormGroup>
            <Label>Profile Pic URL:</Label>
            <Input type="url" name="profileUrl" onChange={this.storeInput} />
          </FormGroup>
          <button type="submit">Sign Me Up!</button>
        </Form>
      </div>
    )
  }
}

export default Signup
