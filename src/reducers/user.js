import { USER } from '../constants/actionType'

export default function user (state=[], action) {
  switch(action.type) {
    case USER.GET_ALL:
      return action.payload
    case USER.CREATE:
      return [...state, action.payload]
    case USER.EDIT:
      return state.map(user => user.id === action.payload.id ? { ...user,
        username: action.payload.username
      } : user)
    case USER.DELETE:
      return state.filter(user => user.id !== action.payload)
    default:
      return state
  }
}
