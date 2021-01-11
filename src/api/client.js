import axios from 'axios'

import { API_KEY, API_URL } from 'Config/application'
import storage from 'Modules/storage'

const baseURL = `${API_URL}3/`

const client = axios.create({
  baseURL,
  timeout: 10000
})

client.interceptors.request.use((config) => {
  const newConfig = { ...config }
  const { headers } = newConfig

  const token = storage.session.get()

  if (token) {
    newConfig.headers = { ...headers, Authorization: `Bearer ${token}` }
  }

  return newConfig
})

client.interceptors.request.use((config) => {
  const newConfig = { ...config }

  newConfig.url = `${newConfig.url}?api_key=${API_KEY}`

  return newConfig
})

client.interceptors.response.use(
  (response) => response,
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
