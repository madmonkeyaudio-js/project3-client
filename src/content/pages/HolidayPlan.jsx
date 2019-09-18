import React, { Component } from 'react'
import axios from 'axios';
import SERVER_URL from '../../constants';
import {Redirect} from 'react-router-dom';


 class HolidayPlan extends Component {
   
    state = {
        results: [],
        filteredResults: [],
        name: '', 
        date: '', 
        place: '', 
        selectedHoliday: '',
        redirect: false
    }

    componentDidMount(){
        let token = localStorage.getItem('mernToken')
        if (token){
            this.apiResponseData(token);
        }else {
            this.setState({
                redirect: true
            })
          
        }
    }
 
    apiResponseData = (token) => {
        axios.get(`${SERVER_URL}/holidayPlan`, 
        {
        headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(response => {
            this.setState({
                results: response.data.response.holidays
            })
        }) 
        .catch(err => {
            console.log(err);
        })
    }

    search = (e) => {
        let search = e.target.value;
        let displayResults = this.state.results.filter((holiday) => {
           if(holiday.name.toLowerCase().includes(search.toLowerCase())){
               return true;
           } else {
               return false;
           }
        })
        this.setState({
            name: e.target.value,
            filteredResults: displayResults
        })
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleHolidaySelection = (e) => {
        let index = e.target.value
        console.log(this.state.filteredResults[index])
        let selectedHoliday = this.state.filteredResults[index]
        this.setState({
            selectedHoliday: selectedHoliday,
            date: selectedHoliday.date.iso,
            name: selectedHoliday.name
        })
    }

    postForm = (e) => {
        e.preventDefault();
        let token = localStorage.getItem('mernToken')
        let holidayData = {
            selectedHoliday: this.state.selectedHoliday,
            place: this.state.place,
            date: this.state.date,
            name: this.state.name
        }
    if (token) {
        axios.post(`${SERVER_URL}/holidayPlan`, holidayData,
        {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        
        .then(response => {
        console.log(response)
        })
        .catch(err => {
            console.log('Error with token', err)
        })
    }
    else {
        console.log('nothing');
        }
    }

    render() {
        if(this.state.redirect){
            return(
                <Redirect to="/login"/>
            )
        }
        let displayResults = this.state.filteredResults.map((result, idx) => {
            return (
                <li key={idx}>
                    {result.name}
                    {result.country}
                    <button value={idx} onClick={this.handleHolidaySelection}>XOXO</button>
                </li>
            )
        })
        return (
            <div>
                 <form onSubmit={this.postForm}>

                    <label htmlFor="name">name</label>
                    <input id="name" value={this.state.name} type="text" placeholder="name..." name="name" onChange={this.search}/>

                    <label htmlFor="date">date</label>
                    <input id="date" value={this.state.date} type="date" placeholder="date..." name="date" onChange={this.handleChange}/>

                    <label htmlFor="place">place</label>
                    <input id="place" type="text" placeholder="place..." name="place" onChange = {this.handleChange}/>

                    <input type="submit"/>   
                </form>
             
                <hr/>
                    <div>
                        <h2>Display Holidays</h2>
                    </div>
                
                <div>{displayResults}</div>
            </div>
        )
    }
}

export default HolidayPlan
