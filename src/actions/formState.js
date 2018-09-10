import * as type from '../constants/actionType'

export const formIsEditing = (data) => (dispatch) => {
  dispatch({
    type: type.FORM_STATE.IS_EDITING,
    payload: data
  })
}
