import axios from 'axios'
import Cookies from 'js-cookie'

const baseURL = 'http://localhost:8080/api/'

const client = axios.create({
  baseURL,
  timeout: 10000
})

client.interceptors.request.use((config) => {
  const newConfig = config

  const token = Cookies.get('auth_token')
  if (token) {
    newConfig.headers = { Authorization: `Bearer ${token}` }
  }

  return newConfig
})

client.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response) {
      const { message } = error.response.data
      const { status } = error.response

      const newError = new Error(message)
      newError.status = status

      return Promise.reject(newError)
    }

    return Promise.reject(error)
  }
)

export default client
