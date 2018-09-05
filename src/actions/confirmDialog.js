import * as type from '../constants/actionType'

export const openConfirmDialog = (cb, data) => (dispatch) => {
  dispatch({
    type: type.CONFIRM_DIALOG.OPEN,
    cb: cb,
    data: data
  })
}

export const closeConfirmDialog = () => (dispatch) => {
  dispatch({
    type: type.CONFIRM_DIALOG.CLOSE
  })
}