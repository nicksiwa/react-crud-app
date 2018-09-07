import React, { Component } from 'react'
import RouteMain from '../../routes/main'
import Navbar from './Navbar'
import Message from '../../components/share/Message'

class MainTemplate extends Component {
  render() {
    return (
      <div className="appContainer">
        <Navbar />
        <div className="appContainer-content">
          <RouteMain />
        </div>
        <Message />
      </div>
    )
  }
}

export default MainTemplate
