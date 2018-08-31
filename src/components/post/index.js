import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllPost, deletePost, createPost } from '../../actions/post'
import { activeSidebar } from '../../actions/sidebar'
import PostTable from './table'
import PostForm from './form'
import Sidebar from '../../templates/main/Sidebar'

class Post extends Component {
  componentDidMount() {
    this.props.getAllPost()
  }

  render() {
    const {
      posts,
      deletePost,
      onSubmit,
      activeSidebar
    } = this.props
    if (posts.length === 0) {
      return (
        <div>No dota</div>
      )
    } else {
      return (
        <div>
          <h1>Post Component</h1>
          <button onClick={activeSidebar}>Create</button>
          <Sidebar title="Create Post">
            <PostForm onSubmit={onSubmit} />
          </Sidebar>
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
  deletePost: (id) => dispatch(deletePost(id)),
  onSubmit: (value) => dispatch(createPost(value)),
  activeSidebar: () => dispatch(activeSidebar())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
