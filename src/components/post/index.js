import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { getAllPost, deletePost, createPost } from '../../actions/post'
import PostTable from './table'
import PostForm from './form'
import ConfirmDialog from '../share/ConfirmDialog'
import FormDialog from '../share/FormDialog'
import { openConfirmDialog } from '../../actions/confirmDialog'
import { openFormDialog } from '../../actions/formDialog'

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
      deletePost,
      openFormDialog
    } = this.props
    return (
      <div>
        <h1>Post Component</h1>
        <Button
          variant='contained'
          color='primary'
          onClick={openFormDialog}
        >
          Create
        </Button>
        <PostTable
          posts={posts}
          onDelete={this.onDelete}
        />
        <ConfirmDialog func={deletePost} />
        <FormDialog
          title="Create Post"
          form="post"
          onSubmit={onSubmit}
        >
          <PostForm />
        </FormDialog>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.post,
  // form: 'post' // กำหนดชื่อ form ให้กับปุ่ม submit ใน FormDialog
})

const mapDispatchToProps = (dispatch) => ({
  getAllPost: () => dispatch(getAllPost()),
  deletePost: (id) => dispatch(deletePost(id)),
  onSubmit: (value) => dispatch(createPost(value)),
  openConfirmDialog: (title, content, data) => dispatch(openConfirmDialog(title, content, data)),
  openFormDialog: () => dispatch(openFormDialog())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
