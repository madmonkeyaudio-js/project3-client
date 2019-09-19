import React from 'react'
import { Redirect } from 'react-router-dom'
import TodoMainComp from '../todos/TodoMainComp';
import axios from 'axios';
import SERVER_URL from '../../constants'


class Profile extends React.Component {
 
  state = {
    user: null
  }

componentDidMount(){
  let token = localStorage.getItem('mernToken')
    axios.get(`${SERVER_URL}/profile`, 
    {
    headers: { 'Authorization': `Bearer ${token}` }
    })
    .then(response => {
     this.setState({
       user: response.data
     })
    })
    .catch(err => {
      console.log(err);
    })
}

render(){
  if (!this.props.user) {
    return <Redirect to="/" />
  }
  let displayResults = '';
  if(this.state.user){
    displayResults = this.state.user.holidays.map((holiday) => {
      return (
        <li>
          <div>
          <h3> {holiday.name}</h3>
          {holiday.description}
          </div>
        </li>
      )
    })
  }

    return (
      <div>
        <h2>{this.props.user.firstname}'s Profile</h2>
        <p>{this.props.user.firstname}</p>
        <TodoMainComp />
        <div>{displayResults}</div>
      </div>
    )
  }
} 

export default Profile
