import React, { Component } from 'react'
import RouteMain from '../../routes/main'
import Navbar from './Navbar'

class MainTemplate extends Component {
  render() {
    return (
      <div className="appContainer">
        <Navbar />
        <div className="appContainer-content">
          <RouteMain />
        </div>
      </div>
    )
  }
}

export default MainTemplate
