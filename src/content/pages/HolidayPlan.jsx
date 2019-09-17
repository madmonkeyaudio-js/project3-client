import React, { Component } from 'react'
import axios from 'axios';
import SERVER_URL from '../../constants';

 class HolidayPlan extends Component {

    state = {
        results: []
    }

    apiResponseData = (e) => {
        e.preventDefault();
        axios.get(`${SERVER_URL}/holidayPlan`)
        .then(response => {
            console.log(response.data.response.holidays[0].name)
            let api = response.data.response.holidays.map((holiday, idx) => {
                return(
                    <div key={idx}>
                       <p>{holiday.name}</p> 
                    </div>
                )
            });
            this.setState({
                results: api
            })
        }) 
        .catch(err => {
            console.log(err);
        })
    }

    searchPlace = () => {
        
    }
   
   

    render() {
        return (
            <div>
                My plans
                <input type="text" onChange={this.searchPlace}/>
                <input type="submit" value="See the api stuff" onClick={this.apiResponseData}/>
                <hr/>

                <div>{this.state.results}</div>
               
                {/* <form action="" >
                    <label htmlFor="date">date</label>
                    <input id="date" type="text" placeholder="date..." name="date"/>

                    <label htmlFor="place">place</label>
                    <input id="place" type="text" placeholder="place..." name="place"/>

                    <label htmlFor="name">name</label>
                    <input id="name" type="text" placeholder="name..." name="name"/>

                    <label htmlFor="description">description</label>
                    <input id="description" type="text" placeholder="description..." name="description"/>

                    <input type="submit"/>

                    <div>
                        <h1>Showcase all the places</h1>
                    </div>
                </form> */}
            </div>
        )
    }
}

export default HolidayPlan
