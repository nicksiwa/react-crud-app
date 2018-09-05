import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Post from '../components/post'

class PostRoute extends Component {
  render() {
    const { match } = this.props
    return (
      <div>
        <Route exact path={match.url} component={Post} />
      </div>
    )
  }
}

export default PostRoute
