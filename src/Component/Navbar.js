import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Style/Nav.css'
export default class Navbar extends Component {
  render() {
    return (
      <div className='nav'>
         <Link to="/">Home</Link>
         <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
           <Link to="/about">About</Link>
           
      </div>
    )
  }
}
