import { call } from './setting'

export default {
  getAllPost: async () => {
    try {
      return await call().then((call) => call.get('/posts'))
    } catch (err) {
      console.log('SERVICE_GET_ALL_POST: ', err)
    }
  }
}
