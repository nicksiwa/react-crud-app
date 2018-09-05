import {
  CONFIRM_DIALOG
} from '../constants/actionType'

const initialState = {
  open: false,
  data: {
    title: '',
    content: '',
    delete: false
  }
}

export default function confirmDialog(state = initialState, action) {
  switch (action.type) {
    case CONFIRM_DIALOG.OPEN:
      return {
        open: true,
        cb: action.cb,
        data: action.data
      }
    case CONFIRM_DIALOG.CLOSE:
      return {
        open: false,
        data: state.data
      }
    default:
      return state
  }
}