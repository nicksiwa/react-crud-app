import { FORM_STATE } from '../constants/actionType'

const initialState = {
  data: {},
  state: {
    isEditing: false
  }
}

export default function formState(state=initialState, action) {
  switch(action.type) {
    case FORM_STATE.IS_EDITING:
      return {
        state: {
          isEditing: true
        },
        data: action.payload
      }
    case FORM_STATE.RESET:
      return {
        state: {
          isEditing: false
        },
        data: {}
      }
    default:
      return state
  }
}
