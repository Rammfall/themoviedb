import storage from 'Modules/storage'
import client from '../client'

jest.mock('Modules/storage')

describe('client', () => {
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

      storage.session.get.mockImplementation(() => token)

      await expect(
        client.interceptors.response.handlers[0].fulfilled('Success')
      ).toStrictEqual('Success')
      await expect(
        client.interceptors.request.handlers[0].fulfilled({})
      ).toStrictEqual({ headers: { Authorization: `Bearer ${token}` } })
    })

    it('without cookies config without headers', async () => {
      storage.session.get.mockImplementation(() => undefined)
      await expect(
        client.interceptors.request.handlers[0].fulfilled({})
      ).toStrictEqual({})
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

    it('inserts API key in get pararms', () => {
      const url = '/request'

      expect(
        client.interceptors.request.handlers[1].fulfilled({ url })
      ).toStrictEqual({
        url: `${url}?api_key=TEST_KEY`
      })
    })
  })
})
