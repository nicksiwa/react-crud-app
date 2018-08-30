import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllPost, deletePost } from '../../actions/post'
import PostTable from './table'

class Post extends Component {
  componentDidMount() {
    this.props.getAllPost()
  }

  render() {
    const { posts, deletePost } = this.props
    if (posts.length === 0) {
      return (
        <div>No dota</div>
      )
    } else {
      return (
        <div>
          <h1>Post Component</h1>
          <PostTable
            posts={posts}
            deletePost={deletePost}
          />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  posts: state.post
})

const mapDispatchToProps = (dispatch) => ({
  getAllPost: () => dispatch(getAllPost()),
  deletePost: (id) => dispatch(deletePost(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
