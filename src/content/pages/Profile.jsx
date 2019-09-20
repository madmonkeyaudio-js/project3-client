import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import SERVER_URL from '../../constants'
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';

class Profile extends React.Component {
 
  state = {
    user: null
  }

componentDidMount(){
  this.loadUserData();
}

loadUserData = () => {
  let token = localStorage.getItem('mernToken')
    axios.get(`${SERVER_URL}/profile`, 
    {
    headers: { 'Authorization': `Bearer ${token}` }
    })
    .then(response => {
      console.log(response)
     this.setState({
       user: response.data
     })
    })
    .catch(err => {
      console.log(err);
    })
  }


deleteHoliday = (e) => {
  e.preventDefault();
  let token = localStorage.getItem('mernToken')
      axios.delete(`${SERVER_URL}/holidayplanner/${e.target.value}`,
      {
          headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(response => {
        this.loadUserData();
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
            <Card>
              <CardBody>
                <CardTitle> {holiday.name}</CardTitle>
                <CardText>{holiday.description}</CardText>
                <Button color="info" value ={holiday._id} onClick={this.deleteHoliday}>Delete</Button>
              </CardBody> 
            </Card>
          </div>
        </div>
      )
    })
  }

    return (
      <div>
            <h2>{this.props.user.firstname}'s Profile</h2>
            <h3>{this.props.user.email}</h3>
            <img src={'this.props.user.profileUrl'} alt="profile pic"/>
            <div>{displayHolidays}</div>
      </div>
    )
  }
} 

export default Profile
