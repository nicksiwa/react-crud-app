import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import MainTemplate from './templates/main'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router>
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/`} component={MainTemplate} />
          </Switch>
        </Router>
      </BrowserRouter>
    )
  }
}

export default App
