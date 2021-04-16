import reducer from '../reducer'
import { API_REQUEST, API_SAVE, API_SUCCESS } from '../types'

describe('data reducer', () => {
  const endpoint = 'endpoint'

  it('handles API_REQUEST', () => {
    expect(reducer(undefined, {
      type: API_REQUEST,
      endpoint
    })).toStrictEqual({
      endpoint: { isLoading: true }
    })
  })

  it('handles API_SUCCESS', () => {
    expect(reducer(undefined, {
      type: API_SUCCESS,
      endpoint
    })).toStrictEqual({
      endpoint: { isLoading: false }
    })
  })

  it('handles API_SAVE', () => {
    const response = [{}]

    expect(reducer(undefined, {
      type: API_SAVE,
      endpoint,
      response
    })).toStrictEqual({
      endpoint: response
    })
  })
})
