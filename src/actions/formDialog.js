import * as type from '../constants/actionType'

export const openFormDialog = () => (dispatch) => {
  dispatch({
    type: type.FORM_DIALOG.OPEN
  })
}

export const closeFormDialog = () => (dispatch) => {
  dispatch({
    type: type.FORM_DIALOG.CLOSE
  })
}
