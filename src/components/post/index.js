import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { getAllPost, deletePost, createPost, getPostById, editPost } from '../../actions/post'
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
      onEdit,
      deletePost,
      openFormDialog,
      getPostById,
      initialValues,
      formState,
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
          getPostById={getPostById}
        />
        <ConfirmDialog func={deletePost} />
        <FormDialog
          title="Create Post"
          form="post"
          onSubmit={onSubmit}
          formState={formState}
          onEdit={onEdit}
        >
          <PostForm initialValues={initialValues} />
        </FormDialog>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.post,
  initialValues: state.formState.data,
  formState: state.formState.state
  // form: 'post' // กำหนดชื่อ form ให้กับปุ่ม submit ใน FormDialog
})

const mapDispatchToProps = (dispatch) => ({
  getAllPost: () => dispatch(getAllPost()),
  getPostById: (id) => dispatch(getPostById(id)),
  deletePost: (id) => dispatch(deletePost(id)),
  onSubmit: (value) => dispatch(createPost(value)),
  onEdit: (value) => dispatch(editPost(value)),
  openConfirmDialog: (title, content, data) => dispatch(openConfirmDialog(title, content, data)),
  openFormDialog: () => dispatch(openFormDialog())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
