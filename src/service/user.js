import { call } from './setting'

export default {
  getAllUser: async () => {
    try {
      return await call().then((call) => call.get('/users'))
    } catch (err) {
      console.log('SERVICE_GET_ALL_USER:', err)
    }
  },
  getUserById: async (id) => {
    try {
      return await call().then((call) => call.get(`/users/${id}`))
    } catch (err) {
      console.log('SERVICE_GET_USER_BY_ID:', err)
    }
  },
  createUser: async (value) => {
    try {
      return await call().then((call) => call.post('/users', value))
    } catch (err) {
      console.log('SERVICE_CREATE_USER:', err)
    }
  },
  editUser: async (value) => {
    try {
      return await call().then((call) => call.put(`/users/${value.id}`, value))
    } catch (err) {
      console.log('SERVICE_EDIT_USER:', err)
    }
  },
  deleteUser: async (id) => {
    try {
      return await call().then((call) => call.delete(`/users/${id}`, {id: id}))
    } catch (err) {
      console.log('SERVICE_DELETE_USER:', err)
    }
  }
}
