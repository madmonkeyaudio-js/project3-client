import React, { Component } from 'react'
import axios from 'axios';
import SERVER_URL from '../../constants';


 class HolidayPlan extends Component {
   
    state = {
        results: [],
        value: '',
        filteredResults: []
    }

    componentDidMount(){
        this.apiResponseData();
    }
 
    apiResponseData = () => {
        axios.get(`${SERVER_URL}/holidayPlan`)
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
            value: e.target.value,
            filteredResults: displayResults
        })
    }

    postForm = () => {
    let token = localStorage.getItem('mernToken')
    if (token) {
        axios.post(`${SERVER_URL}`, {
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
       
        let displayResults = this.state.filteredResults.map((result, idx) => {
            return (
                <li key={idx}>
                    {result.name}
                    {result.country}
                </li>
            )
        })
        return (
            <div>
                 <form action="" onSubmit={this.postForm}>

                    <label htmlFor="name">name</label>
                    <input id="name" type="text" placeholder="name..." name="name" onChange={this.search}/>

                    <label htmlFor="date">date</label>
                    <input id="date" type="date" placeholder="date..." name="date"/>

                    <label htmlFor="place">place</label>
                    <input id="place" type="text" placeholder="place..." name="place" />

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
