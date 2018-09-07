import { MESSAGE } from '../constants/actionType'

const initialState = {
  open: false,
  message: 'initial message'
}

export default function message(state=initialState, action) {
  switch(action.type) {
    case MESSAGE.OPEN:
      return {
        open: true,
        message: action.payload
      }
    case MESSAGE.CLOSE:
      return {
        open: false
      }
    default:
      return state
  }  
}
