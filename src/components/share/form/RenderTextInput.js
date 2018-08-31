import React, { Component } from 'react'

export class RenderTextInput extends Component {
  render() {
    const {
      input,
      type,
      placeholder
    } = this.props
    return (
      <span>
        <input
          type={type}
          placeholder={placeholder}
          {...input}
        />
      </span>
    )
  }
}
