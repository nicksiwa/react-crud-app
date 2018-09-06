import {
  CONFIRM_DIALOG
} from '../constants/actionType'

const initialState = {
  open: false,
  title: '',
  subTitle: '',
  data: ''
}

export default function confirmDialog(state = initialState, action) {
  switch (action.type) {
    case CONFIRM_DIALOG.OPEN:
      return {
        open: true,
        title: action.title,
        content: action.content,
        data: action.data
      }
    case CONFIRM_DIALOG.CLOSE:
      return {
        open: false,
        title: state.title,
        content: state.content,
        data: state.data
      }
    default:
      return state
  }
}