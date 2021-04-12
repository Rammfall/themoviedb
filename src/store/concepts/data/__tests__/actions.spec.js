import { dataApiRequest, dataApiSave, dataApiSuccess } from '../actions'
import { API_REQUEST, API_SAVE, API_SUCCESS } from '../types'

describe('data actions', () => {
  const endpoint = 'endpoint'

  describe('dataApiRequest()', () => {
    it('returns object with correct shape', () => {
      expect(dataApiRequest({ endpoint }))
        .toStrictEqual({
          type: API_REQUEST,
          endpoint
        })
    })
  })

  describe('dataApiSuccess()', () => {
    it('returns object with correct shape', () => {
      expect(dataApiSuccess({ endpoint }))
        .toStrictEqual({
          type: API_SUCCESS,
          endpoint
        })
    })
  })

  describe('dataApiSave()', () => {
    it('returns object with correct shape', () => {
      expect(dataApiSave({ endpoint, response: [] }))
        .toStrictEqual({
          type: API_SAVE,
          endpoint,
          response: []
        })
    })
  })
})
