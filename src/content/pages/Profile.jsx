import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import SERVER_URL from '../../constants';
import TodoMainComp from '../todos/TodoMainComp';

class Profile extends React.Component {
  state = {
    email: '',
  }
  componentDidMount(){
    this.getProfile();
  }

  getProfile = () => {
    // See if there's a token
    let token = localStorage.getItem('mernToken')
    if (token) {
      axios.get(`${SERVER_URL}/profile`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(response => {
       console.log(response)
       this.setState({
         email: response.data.email,
       })
      })
      .catch(err => {
        console.log('Error with token', err)
      })
    }
    else {
      console.log('nothing');
    }
  }

render(){
    if (!this.props.user) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <h2>{this.props.user.firstname}'s Profile</h2>
        <p>{this.state.email}</p>
        <TodoMainComp />
      </div>
    )
  }
} 

export default Profile
