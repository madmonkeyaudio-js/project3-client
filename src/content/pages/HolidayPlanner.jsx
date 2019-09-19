import React from 'react';
import SERVER_URL from '../../constants';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import TodoMainComp from '../todos/TodoMainComp';

class HolidayPlanner extends React.Component {
    state = {
        user: null
      }
  
    componentDidMount(){
      let token = localStorage.getItem('mernToken')
        axios.get(`${SERVER_URL}/holidayPlanner`, 
        {
        headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(response => {
         console.log(response.data)
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
                <TodoMainComp holidayName={holiday.name}/>
                <hr/>
              </div>
            </div>
          )
        })
      }
        return(
            <div>
                {displayHolidays}
            </div>
        )
    }
}

export default HolidayPlanner;
