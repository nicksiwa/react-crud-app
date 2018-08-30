import { call } from './setting'

export default {
  getAllPost: async () => {
    try {
      return await call().then((call) => call.get('/posts'))
    } catch (err) {
      console.log('SERVICE_GET_ALL_POST: ', err)
    }
  },
  getPostById: async (id) => {
    try {
      return await call().then((call) => call.get(`/posts/${id}`))
    } catch (err) {
      console.log('SERVICE_GET_POST_BY_ID: ', err)
    }
  },
  deletePost: async (id) => {
    try {
      return await call().then((call) => call.delete(`/posts/${id}`, {id: id}))
    } catch (err) {
      console.log('SERVICE_DELETE_POST: ', err)
    }
  }
}
