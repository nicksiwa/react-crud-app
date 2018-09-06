import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllPost, deletePost, createPost } from '../../actions/post'
import { activeSidebar } from '../../actions/sidebar'
import PostTable from './table'
import PostForm from './form'
import Sidebar from '../../templates/main/Sidebar'
import ConfirmDialog from '../share/ConfirmDialog'
import { openConfirmDialog } from '../../actions/confirmDialog'

class Post extends Component {
  componentDidMount() {
    this.props.getAllPost()
  }

  onDelete = (id) => {
    this.props.openConfirmDialog(
      'Delete Post',
      `Are you sure to delete no.${id} post`,
      id
    )
  }

  render() {
    const {
      posts,
      onSubmit,
      activeSidebar,
      deletePost
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
            onDelete={this.onDelete}
          />
          <ConfirmDialog func={deletePost} />
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
  openConfirmDialog: (title, content, data) => dispatch(openConfirmDialog(title, content, data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
