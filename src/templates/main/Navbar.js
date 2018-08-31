import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navBar">
        <div className="navBar-title"><Link to="/">Title</Link></div>
        <ul className="navBar-nav">
          <li className="navBar-nav-item">
            <Link to="/user" className="navBar-link">User</Link>
          </li>
          <li className="navBar-nav-item">
            <Link to="/post" className="navBar-link">Post</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
