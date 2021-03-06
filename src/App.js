// Import packages
import axios from 'axios'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

// Resources and custom components
import './App.css';
import Content from './content/Content'
import Header from './nav/Header'
import Nav from './nav/Nav'
import SERVER_URL from './constants'

class App extends React.Component {
  state = {
    user: null
  }
  componentDidMount() {
    // Go look for a token
    this.getUser()
  }

  getUser = () => {
    // See if there's a token
    let token = localStorage.getItem('mernToken')
    // If there's a token, try to use it to get the user info
    if (token) {
      //console.log('token was', token)
      axios.get(`${SERVER_URL}/auth/current/user`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(response => {
        //console.log('Success', response)
        this.setState({ user: response.data.user })
      })
      .catch(err => {
        console.log('Error with token', err)
      })
    }
    else {
      this.setState({ user: null })
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav updateUser={this.getUser} user={this.state.user} />
          <Header />
          <Content updateUser={this.getUser} user={this.state.user} />
        </div>
      </Router>
    );
  }
}

export default App;
