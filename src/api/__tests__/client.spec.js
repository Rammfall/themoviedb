import Cookies from 'js-cookie'

import client from '../client'

describe('check http client', () => {
  describe('make get request', () => {
    it('success response', async () => {
      expect(client).toMatchSnapshot()
    })

    it('check cookies interceptor', async () => {
      jest.mock('js-cookie')
      Cookies.get = jest.fn(() => '0123456789')

      jest.mock('../client', (clientMock) => ({
        ...clientMock,
        get: jest.fn()
      }))

      expect(client.get('https://test.tet')).toMatchSnapshot()
      await expect(
        client.interceptors.response.handlers[0].fulfilled('Success')
      ).toStrictEqual('Success')
      await expect(
        client.interceptors.request.handlers[0].fulfilled({})
      ).toStrictEqual({ headers: { Authorization: `Bearer 0123456789` } })
    })

    it('check error interceptor', async () => {
      await expect(
        client.interceptors.response.handlers[0].rejected({
          response: {
            statusText: 'NotFound',
            status: 404,
            data: { message: 'Page not found' }
          }
        })
      ).rejects.toThrowError('Page not found')

      await expect(
        client.interceptors.response.handlers[0].rejected({
          message: 'Some error'
        })
      ).rejects.toStrictEqual({ message: 'Some error' })
    })
  })
})
