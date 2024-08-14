import axios from 'axios'
import Cookies from 'js-cookie'
import chatApi from '@/api/api'
import LoginFunction from '@/types/auth/login'

const token = Cookies.get('token')

const headers = {
  headers: {
    'x-token': token,
  },
}

export const fetcher = async (url: string) =>
    chatApi.get(url, headers).then((res) => res.data)

  // axios
  //   .get(url, {
  //     headers: {
  //       'x-token': token,
  //     },
  //   })
  //   .then((res) => res.data)

export const fetcherDelete = async (url: string) => {
  return axios.delete(url, headers).then((res) => res.data)
}

export const login: LoginFunction = async (username, password, e, setError) => {
  e.preventDefault()
  try {
    const res = await chatApi.post('/auth/login', { username, password })
    Cookies.set('token', res.data.token, { expires: 20 })
    window.location.href = '/chats'
  } catch (error) {
    setError(true)
  }
}
export const updateUser = async (information: any, id: any) => {
  await chatApi.patch(`/auth/users/${id}`, information, headers)
}

export const createUser = async (information: any) => {
  await chatApi.post('/auth/create', information, headers)
  window.location.href = '/chats'
}
export const createNumber = async (information: any) => {
  await chatApi.post('/auth/number', information, headers)
}

export const sendMessage = async (message: any) => {
  await chatApi.post('/chat/send', message, headers)
}
