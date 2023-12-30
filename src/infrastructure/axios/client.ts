import axios from 'axios'

const LWG_BASE_URL = 'http://local.lwg:8080'
export const dataClient = axios.create({
  baseURL: LWG_BASE_URL,
})