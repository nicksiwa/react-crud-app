import * as type from '../constants/actionType'

export const openMessage = () => (dispatch) => {
  dispatch({
    type: type.MESSAGE.OPEN
  })
}

export const closeMessage = () => (dispatch) => {
  dispatch({
    type: type.MESSAGE.CLOSE
  })
}
