import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import SERVER_URL from '../../constants';

class Profile extends React.Component {

  componentDidMount(){
    this.getProfile();
  }

  getProfile = () => {
    axios.get(`${SERVER_URL}/profile`)
    .then(results => {
      console.log(results);
    }) 
    .catch(err => {
      console.log(err);
    })
  }

render(){
    if (!this.props.user) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <h2>{this.props.user.firstname}'s Profile</h2>
      </div>
    )
  }
} 

export default Profile
