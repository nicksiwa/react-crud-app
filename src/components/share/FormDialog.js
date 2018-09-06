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
      handleSubmit,
      onSubmit,
      open,
      closeFormDialog
    } = this.props
    return (
      <Dialog open={open}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeFormDialog}>Cancel</Button>
          <Button
            variant='contained'
            color='primary'
            onClick={handleSubmit(onSubmit)}
          >
            Create
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
  closeFormDialog: () => dispatch(closeFormDialog())
})

FormDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormDialog)

export default reduxForm({})(FormDialog)
