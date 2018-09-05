import { MESSAGE } from '../constants/actionType'

export default function message(state={}, action) {
  switch(action.type) {
    case MESSAGE.OPEN:
      return state
    case MESSAGE.CLOSE:
      return state
    default:
      return state
  }  
}
