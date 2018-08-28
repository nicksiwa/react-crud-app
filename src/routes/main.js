import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../components/dashboard'
import Post from '../components/post'
import User from '../components/user'

class RouteMain extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/post' component={Post} />
        <Route path='/user' component={User} />
      </Switch>
    )
  }
}

export default RouteMain
