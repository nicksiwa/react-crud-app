import * as type from '../constants/actionType'
import { Service } from '../service'

export const getAllPost = () => async (dispatch) => {
  try {
    const res = await Service.Post.getAllPost()
    if(res) {
      dispatch({
        type: type.POST.GET_ALL,
        payload: res.data
      })
    }
  } catch (err) {
    console.log('ACTION_GET_ALL_POST: ', err)
  }
}

export const getPostById = (id) => async (dispatch) => {
  try {
    const res = await Service.Post.getPostById(id)
    if(res) {
      dispatch({
        type: type.POST.GET_BY_ID,
        payload: res.data
      })
    }
  } catch (err) {
    console.log('ACTION_GET_POST_BY_ID: ', err)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    const res = await Service.Post.deletePost(id)
    if(res) {
      dispatch({
        type: type.POST.DELETE,
        payload: res.config.id
      })
    }
  } catch (err) {
    console.log('ACTION_DELETE_POST: ', err)
  }
}
