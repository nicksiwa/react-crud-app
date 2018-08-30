import React, { Component } from 'react'

export class RenderTextInput extends Component {
  render() {
    const { input, type } = this.props
    return (
      <span>
        <input
          type={type}
          {...input}
        />
      </span>
    )
  }
}
