import React, { Component } from 'react'
import RouteMain from '../../routes/main'

class MainTemplate extends Component {
  render() {
    return (
      <div>
        <nav className="navBar">
          <div className="navBar-title">Title</div>
          <ul className="navBar-nav">
            <li className="navBar-nav-item">
              <a className="navBar-link">User</a>
            </li>
            <li className="navBar-nav-item">
              <a className="navBar-link">Post</a>
            </li>
          </ul>
        </nav>
        <div className="appContainer">
          <button>Create</button>
          <RouteMain />
        </div>
      </div>
    )
  }
}

export default MainTemplate
