import { USER } from '../constants/actionType'

export default function user (state=[], action) {
  switch(action.type) {
    case USER.GET_ALL:
      return action.payload
    default:
      return state
  }
}
