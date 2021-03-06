import React, { Component } from 'react'
import axios from 'axios';
import SERVER_URL from '../../constants';
import {Redirect} from 'react-router-dom';
import {Button, Toast, ToastHeader, ToastBody} from 'reactstrap';


 class HolidaySearch extends Component {
   
    state = {
        results: [],
        filteredResults: [],
        name: '', 
        date: '', 
        place: '', 
        selectedHoliday: '',
        redirect: false,
        alert: false
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
        axios.get(`${SERVER_URL}/HolidaySearch`, 
        {
        headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(response => {
            console.log(response.data)
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
        axios.post(`${SERVER_URL}/HolidaySearch`, holidayData,
        {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        
        .then(response => {
            console.log(response)
            this.setState({
                alert: true
            })
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

      let alert = this.state.alert;
      if (this.state.alert) {
            alert = 'Add todos in your holiday planner';
      } else {
          alert = 'Type in the name field to see US and World holidays or enter name of your choice';
      }

        let displayResults = this.state.filteredResults.map((result, idx) => {
            return (
                <div className="p-3 bg-info my-2 rounded">
                    <div className="searchContainer">
                        <div>
                            <Toast key={idx}>
                                <ToastHeader>
                                    {result.name}
                                </ToastHeader>
                                <ToastBody >
                                    {result.description}    
                                </ToastBody>
                            </Toast>
                        </div>
                        <div>
                            <Toast>
                                <ToastBody>
                                    <Button color="success" value={idx} onClick={this.handleHolidaySelection}>Select</Button>
                                </ToastBody>
                            </Toast>
                        </div>
                    </div>
              </div>
            )
        })
        return (
            <div>
                    
                <h5> {alert}</h5>
                <h6>All fields are required!</h6>
                 <form onSubmit={this.postForm}>

                    <label htmlFor="name">Holiday name</label>
                    <input id="name" value={this.state.name} type="text" placeholder="name..." name="name" onChange={this.search}/>

                    <label htmlFor="date">date</label>
                    <input id="date" value={this.state.date} type="date" placeholder="date..." name="date" onChange={this.handleChange}/>

                    <label htmlFor="place">place</label>
                    <input id="place" type="text" placeholder="place..." name="place" onChange = {this.handleChange}/>

                    <input type="submit"/>   
                </form>
             
                <hr/>
                    <div>
                        <h5>Search Results</h5>
                    </div>
                
                <div>{displayResults}</div>
            </div>
        )
    }
}

export default HolidaySearch
