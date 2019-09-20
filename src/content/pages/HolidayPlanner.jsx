import React from 'react';
import SERVER_URL from '../../constants';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import TodoMainComp from '../todos/TodoMainComp';

class HolidayPlanner extends React.Component {
    state = {
      holidays: [],
      todos: []
    }

    componentDidMount(){
        this.getUserHolidays();
    }
    
    getUserHolidays = () => {
      let token = localStorage.getItem('mernToken')
      axios.get(`${SERVER_URL}/holidayplanner`,
      {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(response => {
        console.log(response)
        let holidays = response.data.holidays;
        let todos = response.data.todos;
        this.setState({
          holidays: holidays,
          todos: todos
        });
      })
      .catch(err => {
        console.log(err)
      })
    }

    
    render(){
      console.log(this.props.user)
      if (!this.props.user) {
        return <Redirect to="/" />
      }
     

      let displayHolidays = '';
      if(this.props.user){
        displayHolidays = (this.state.holidays || []).map((holiday, idx) => {
          let todoListItems = this.state.todos.filter(todo => {
            return todo.holiday === holiday._id
          })
          console.log(todoListItems)
          return (
            <div key={idx}>
              <div>
                <TodoMainComp items={todoListItems} holidayName={holiday.name} holidayId={holiday._id}/>
                <hr/>
              </div>
            </div>
          )
        })
      }
        return(
            <div>
              <h3>Add a todo to your holidays</h3>
                {displayHolidays}
            </div>
        )
    }
}

export default HolidayPlanner;
