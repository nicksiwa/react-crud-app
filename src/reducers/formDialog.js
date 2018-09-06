import { FORM_DIALOG } from '../constants/actionType'

const initialState = {
  open: false
}

export default function formDialog(state=initialState, action) {
  switch(action.type) {
    case FORM_DIALOG.OPEN:
      return {
        open: true
      }
    case FORM_DIALOG.CLOSE:
      return {
        open: false
      }
    default:
      return state
  }
}
