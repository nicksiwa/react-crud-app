import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { TextInput } from '../share/form'

class PostForm extends Component {
  render() {
    const {
      handleSubmit,
      onSubmit
    } = this.props
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          component={TextInput}
          type="text"
          name="title"
          placeholder="Title"
        />
        <Field
          component={TextInput}
          type="text"
          name="author"
          placeholder="Author"
        />
        <button type="submit">Create</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'post'
})(PostForm)
