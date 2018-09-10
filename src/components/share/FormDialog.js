import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { closeFormDialog } from '../../actions/formDialog'

class FormDialog extends Component {
  render() {
    const {
      children,
      title,
      open,
      close,
      onSubmit,
      onEdit,
      handleSubmit,
      formState
    } = this.props
    return (
      <Dialog open={open}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => close()}>Cancel</Button>
          <Button
            variant='contained'
            color='primary'
            onClick={handleSubmit(!formState.isEditing ? onSubmit : onEdit)}
          >
            {!formState.isEditing ? 'Create' : 'Update'}
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.formDialog.open
})

const mapDispatchToProps = (dispatch) => ({
  close: () => dispatch(closeFormDialog())
})

FormDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormDialog)

export default reduxForm({})(FormDialog)
