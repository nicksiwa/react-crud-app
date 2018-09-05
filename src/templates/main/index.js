import React, { Component } from 'react'
import RouteMain from '../../routes/main'
import Navbar from './Navbar'
import ConfirmDialog from '../../components/share/ConfirmDialog'
import Message from '../../components/share/Message'

class MainTemplate extends Component {
  render() {
    return (
      <div className="appContainer">
        <Navbar />
        <div className="appContainer-content">
          <RouteMain />
        </div>
        <ConfirmDialog />
        <Message />
      </div>
    )
  }
}

export default MainTemplate
