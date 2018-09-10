import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { TextInput } from '../share/form'

class PostForm extends Component {
  render() {
    return (
      <form>
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
      </form>
    )
  }
}

export default reduxForm({
  form: 'post',
})(PostForm)
