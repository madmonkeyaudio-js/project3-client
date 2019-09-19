import React from 'react';
import SERVER_URL from '../../constants';
import axios from 'axios';

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
         this.setState({
           user: response.data
         })
        })
        .catch(err => {
          console.log(err);
        })
    }
    render(){
        return(
            <div>
                Holiday Planner
                <TodoMainComp/>
            </div>
        )
    }
}

export default HolidayPlanner;
