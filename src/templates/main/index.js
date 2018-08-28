import React, { Component } from 'react'
import RouteMain from '../../routes/main'

class MainTemplate extends Component {
  render() {
    return (
      <div>
        <nav>This is navbar</nav>
        <div>
          <RouteMain />
        </div>
      </div>
    )
  }
}

export default MainTemplate
