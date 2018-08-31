import * as type from '../constants/actionType'

export const activeSidebar = () => (dispatch) => {
  dispatch({
    type: type.SIDE_BAR.ACTIVE
  })
}

export const hideSidebar = (e) => (dispatch) => {
  if(e.target === e.currentTarget) {
    dispatch({
      type: type.SIDE_BAR.HIDE
    })
  }
}
