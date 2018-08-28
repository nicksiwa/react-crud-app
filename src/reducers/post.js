import { POST } from '../constants/actionType'

export default function post (state=[], action) {
  switch(action.type) {
    case POST.GET_ALL:
      return action.payload
    default:
      return state
  }
}
