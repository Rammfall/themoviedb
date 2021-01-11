import axios from 'axios'

import { API_KEY, API_URL } from 'Config/application'
import storage from 'Modules/storage'

const baseURL = `${API_URL}3/`

const client = axios.create({
  baseURL,
  timeout: 10000
})

client.interceptors.request.use((config) => {
  const { headers } = config

  const token = storage.session.get()

  if (token) {
    return {
      ...config,
      headers: { ...headers, Authorization: `Bearer ${token}` }
    }
  }

  return config
})

client.interceptors.request.use((config) => ({
  ...config,
  url: `${config.url}?api_key=${API_KEY}`
}))

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
