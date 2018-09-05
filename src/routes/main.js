import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../components/dashboard'
import PostRoute from './post'
import User from '../components/user'

class RouteMain extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
        <Route path={`${process.env.PUBLIC_URL}/post`} component={PostRoute} />
        <Route path={`${process.env.PUBLIC_URL}/user`} component={User} />
      </Switch>
    )
  }
}

export default RouteMain
