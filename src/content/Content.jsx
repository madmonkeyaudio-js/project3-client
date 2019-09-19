// Packages
import React from 'react'
import { Route } from 'react-router-dom'

// Custom components
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import HolidaySearch from './pages/HolidaySearch'
import HolidayPlanner from './pages/HolidayPlanner'

const Content = props => {
  return (
    <div className="container">
      <Route exact path="/" component={Home} />
      <Route path="/login" render={
        () => <Login user={props.user} updateUser={props.updateUser} />
      } />
      <Route path="/profile" render={
        () => <Profile user={props.user} />
      } />
      <Route path="/signup" render={
        () => <Signup user={props.user} updateUser={props.updateUser} />
      } />
      <Route path="/holidaySearch" component={HolidaySearch} />
      <Route path="/holidayPlanner" component={HolidayPlanner} />
    </div>
  )
}

export default Content;
