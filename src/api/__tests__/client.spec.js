import Cookies from 'js-cookie'

import client from '../client'

describe('client', () => {
  jest.mock('js-cookie')

  it('have correct config variables', async () => {
    const { baseURL, timeout } = client.defaults

    expect({
      baseURL,
      timeout
    }).toStrictEqual({
      baseURL: 'server.test/3/',
      timeout: 10000
    })
  })

  describe('interceptors', () => {
    it('cookies token set in header on every request', async () => {
      const token = '0123456789'

      Cookies.get = jest.fn(() => token)

      await expect(
        client.interceptors.response.handlers[0].fulfilled('Success')
      ).toStrictEqual('Success')
      await expect(
        client.interceptors.request.handlers[0].fulfilled({})
      ).toStrictEqual({ headers: { Authorization: `Bearer ${token}` } })
    })

    it('server error and response error', async () => {
      const responseErrorMessage = 'Page not found'
      const serverError = 'Some error'
      const { rejected } = client.interceptors.response.handlers[0]

      await expect(
        rejected({
          response: {
            statusText: 'NotFound',
            status: 404,
            data: { message: responseErrorMessage }
          }
        })
      ).rejects.toThrowError(responseErrorMessage)

      await expect(
        rejected({
          message: serverError
        })
      ).rejects.toStrictEqual({ message: serverError })
    })
  })
})
