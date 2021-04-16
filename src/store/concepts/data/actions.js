import { API_REQUEST, API_SAVE, API_SUCCESS } from './types'

export const dataApiRequest = ({ endpoint }) => ({
  type: API_REQUEST,
  endpoint
})

export const dataApiSuccess = ({ endpoint }) => ({
  type: API_SUCCESS,
  endpoint
})

export const dataApiSave = ({ endpoint, response }) => ({
  type: API_SAVE,
  endpoint,
  response
})

