import { call } from './setting'

export default {
  getAllUser: async () => {
    try {
      return await call().then((call) => call.get('/users'))
    } catch (err) {
      console.log('SERVICE_GET_ALL_USER', err)
    }
  }
}
