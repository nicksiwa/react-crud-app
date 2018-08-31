import {
  POST
} from '../constants/actionType'

export default function post(state = [], action) {
  switch (action.type) {
    case POST.GET_ALL:
      return action.payload
    case POST.GET_BY_ID:
      return action.payload
    case POST.DELETE:
      return state.filter(post => post.id !== action.payload)
    case POST.CREATE:
      return [...state, action.payload]
    case POST.EDIT:
      return state.map(post => post.id === action.payload.id ? { ...post,
        title: action.payload.title,
        author: action.payload.author
      } : post)
    default:
      return state
  }
}
