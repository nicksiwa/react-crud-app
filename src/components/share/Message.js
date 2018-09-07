import React, { Component } from 'react'
import { connect } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { closeMessage } from '../../actions/message'

class Message extends Component {
  queue = []
  
  render() {
    const {
      open,
      close,
      message
    } = this.props
    return (
      <Snackbar
        open={open}
        message={message}
        action={[
          <IconButton
            color="inherit"
            onClick={close}
          >
            <CloseIcon />
          </IconButton>
        ]}
        onClose={close}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.message.open,
  message: state.message.message
})

const mapDispatch = (dispatch) => ({
  close: () => dispatch(closeMessage())
})

export default connect(
  mapStateToProps,
  mapDispatch
)(Message)
