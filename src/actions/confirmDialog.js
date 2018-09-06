import * as type from '../constants/actionType'

export const openConfirmDialog = (title, content, data) => (dispatch) => {
  dispatch({
    type: type.CONFIRM_DIALOG.OPEN,
    title: title,
    content: content,
    data: data
  })
}

export const closeConfirmDialog = () => (dispatch) => {
  dispatch({
    type: type.CONFIRM_DIALOG.CLOSE
  })
}