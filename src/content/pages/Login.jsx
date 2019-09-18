// Packages
import axios from 'axios'
import React from 'react'
import { Redirect } from 'react-router-dom'
import SERVER_URL from '../../constants'

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
        <form onSubmit={this.handleSubmit}>
            <div>
              <label>Email:</label>
              <input type="email" name="email" onChange={(e) => this.setState({ email: e.target.value, message: '' })} />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" name="password" onChange={(e) => this.setState({ password: e.target.value, message: '' })} />
            </div>
            <button type="submit">Beam Me Up!</button>
          </form>
      </div>
    )
  }
}

export default Login
