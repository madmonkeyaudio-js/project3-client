// Packages
import axios from 'axios'
import React from 'react'
import { Redirect } from 'react-router-dom'
import SERVER_URL from '../../constants'
import { Form, FormGroup, Input, Label} from 'reactstrap';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    message: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${SERVER_URL}/auth/login`, this.state)
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
        <h2>Login</h2>
        <span className="red">{this.state.message}</span>
        <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label>Email:</Label>
              <Input type="email" name="email" onChange={(e) => this.setState({ email: e.target.value, message: '' })} />
            </FormGroup>
            <FormGroup>
              <Label>Password:</Label>
              <Input type="password" name="password" onChange={(e) => this.setState({ password: e.target.value, message: '' })} />
            </FormGroup>
            <button type="submit">Beam Me Up!</button>
          </Form>
      </div>
    )
  }
}

export default Login
