import axios from 'axios'
import { conf } from '../config'

export const call = async () => {
  return axios.create({
    baseURL: conf.BASE_API_URL
  })
}
