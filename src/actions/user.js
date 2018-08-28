import * as type from '../constants/actionType'
import { Service } from '../service'

export const getAllUser = () => async (dispatch) => {
  try {
    const res = await Service.User.getAllUser()
    if(res) {
      dispatch({
        type: type.USER.GET_ALL,
        payload: res.data
      })
    }
  } catch (err) {
    console.log('ACTION_GET_ALL_USER', err)
  }
}
