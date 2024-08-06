import axios from 'axios'

const API = process.env.NEXT_PUBLIC_API_ROUTE
console.log('API', API)

console.log(API)

const chatApi = axios.create({
  baseURL: API,
})

export default chatApi
