import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllPost, deletePost, createPost } from '../../actions/post'
import { activeSidebar } from '../../actions/sidebar'
import PostTable from './table'
import PostForm from './form'
import Sidebar from '../../templates/main/Sidebar'
import { openConfirmDialog } from '../../actions/confirmDialog'

class Post extends Component {
  componentDidMount() {
    this.props.getAllPost()
  }

  render() {
    const {
      posts,
      deletePost,
      onSubmit,
      activeSidebar,
      openConfirmDialog
    } = this.props
    if (posts.length === 0) {
      return (
        <div>No data</div>
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
            openConfirmDialog={openConfirmDialog}
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
  activeSidebar: () => dispatch(activeSidebar()),
  openConfirmDialog: (cb, data) => dispatch(openConfirmDialog(cb, data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
