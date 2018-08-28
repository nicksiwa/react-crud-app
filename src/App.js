import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllPost } from './actions/post'

class App extends Component {
  componentDidMount() {
    this.props.getAllPost()
  }

  render() {
    const { posts } = this.props
    return (
      <div>
        <ul>
          {posts && posts.map((post) => (
            <li key={post.id}>
              Title: {post.title} Author: {post.author}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.post
})

const mapDispatchToProps = (dispatch) => ({
  getAllPost: () => dispatch(getAllPost())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
