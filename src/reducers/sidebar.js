import { SIDE_BAR } from '../constants/actionType'

const initialState = {
  isActive: false
}

export default function sidebar(state=initialState, action) {
  switch (action.type) {
    case SIDE_BAR.ACTIVE:
      return { isActive: true }
    case SIDE_BAR.HIDE: {
      return { isActive: false }
    }
    default:
      return state
  }
}
