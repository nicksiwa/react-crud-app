import React, { Component } from 'react'
import { connect } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar';

class Message extends Component {
  queue = []
  
  render() {
    return (
      <Snackbar
        message="abc"
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      />
    )
  }
}

export default connect()(Message)
