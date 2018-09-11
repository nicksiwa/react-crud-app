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
    console.log('ACTION_GET_ALL_USER:', err)
  }
}

export const getUserById = (id) => async (dispatch) => {
  try {
    const res = await Service.User.getUserById(id)
    if(res) {
      dispatch({
        type: type.USER.GET_BY_ID,
        payload: res.data
      })
    }
  } catch (err) {
    console.log('ACTION_GET_USER_BY_ID:', err)
  }
}

export const createUser = (value) => async (dispatch) => {
  try {
    const res = await Service.User.createUser(value)
    if(res) {
      dispatch({
        type: type.USER.CREATE,
        payload: res.data
      })
    }
  } catch (err) {
    console.log('ACTION_CREATE_USER:', err)
  }
}

export const editUser = (value) => async (dispatch) => {
  try {
    const res = await Service.User.editUser(value)
    if(res) {
      dispatch({
        type: type.USER.EDIT,
        payload: res.data
      })
    }
  } catch (err) {
    console.log('ACTION_EDIT_USER:', err)
  }
}

export const deleteUser = (id) => async (dispatch) => {
  try {
    const res = await Service.User.deleteUser(id)
    if(res) {
      dispatch({
        type: type.USER.DELETE,
        payload: res.config.id
      })
    }
  } catch (err) {
    console.log('ACTION_DELETE_USER:', err)
  }
}
