import { API_REQUEST, API_SAVE, API_SUCCESS } from './types'

export const dataApiRequest = ({ endpoint }) => ({
  type: API_REQUEST,
  endpoint
})

export const dataApiSuccess = ({ endpoint }) => ({
  type: API_SUCCESS,
  endpoint
})
/**
 * @param {string} endpoint
 * @param {Object} response
 * @returns {{endpoint, response, type: string}}
 */
export const dataApiSave = ({ endpoint, response }) => ({
  type: API_SAVE,
  endpoint,
  response
})

