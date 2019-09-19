import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import SERVER_URL from '../../constants'
import HolidayPlanner from './HolidayPlanner';


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
  let displayHolidays = '';
  if(this.state.user){
    displayHolidays = this.state.user.holidays.map((holiday, idx) => {
      return (
        <div key={idx}>
          <div>
          <h3> {holiday.name}</h3>
          {holiday.description}
          </div>
        </div>
      )
    })
  }

    return (
      <div>
        <h2>{this.props.user.firstname}'s Profile</h2>
        <div>{displayHolidays}</div>
      </div>
    )
  }
} 

export default Profile
