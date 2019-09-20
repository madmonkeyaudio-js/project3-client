import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  handleLogout = (e) => {
    e.preventDefault()
    // Remove the token from localstorage (or cookies)
    localStorage.removeItem('mernToken')

    // Update the state of the App
    this.props.updateUser()
  }

  render() {
    let links = ''

    // If the user is logged in, show profile page and logout links
    if (this.props.user) {
      links = (
       
          <span className="navigation-bar">
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/holidaySearch">Search Holidays</Link>
            </li>
            <li>
              <Link to="/holidayPlanner">Holiday Planner</Link>
            </li>
            <li>
              <a href="/" onClick={this.handleLogout}>Logout</a>
            </li>  
          </span>
      
      )
    }
    else {
      links = (
        <span>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </span>
      )
    }

    return (
      <div >
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {links}
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav
