import {
  USER_LOGIN_SUBMIT,
  USER_LOGIN_SUCCESS
} from 'Store/concepts/session/types'

import loginUserOperation from 'Store/concepts/session/operations/login'
import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'
import mockHttpClient from 'Api/__mocks__/mockHttpClient'
import storage from 'Utils/storage'

jest.mock('Utils/storage')

describe('loginUserOperation()', () => {
  storage.session.set.mockImplementation(jest.fn())

  describe('with success response', () => {
    const formMock = {
      form: { setStatus: jest.fn(), setSubmitting: jest.fn() }
    }
    const httpClient = mockHttpClient([
      {
        method: 'get',
        resolve: { data: { request_token: 'test' } }
      },
      {
        method: 'post',
        resolve: { data: { session_id: 'testId' } }
      }
    ])
    const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
      loginUserOperation
    ])

    store.dispatch({
      type: USER_LOGIN_SUBMIT,
      values: { username: 'test', password: 'test' },
      ...formMock
    })

    it('handles USER_LOGIN_SUCCESS', async () => {
      await logicMiddleware.whenComplete()

      expect(store.getActions()).toStrictEqual([
        {
          type: USER_LOGIN_SUBMIT,
          values: {
            username: 'test',
            password: 'test'
          },
          ...formMock
        },
        {
          type: USER_LOGIN_SUCCESS
        }
      ])
      expect(storage.session.set).toHaveBeenCalledTimes(1)
    })
  })

  describe('with errors', () => {
    it('in response', async () => {
      const formMock = {
        form: { setStatus: jest.fn(), setSubmitting: jest.fn() }
      }
      const error = new Error()
      error.status = 401
      const httpClient = mockHttpClient([
        {
          method: 'get',
          reject: error
        }
      ])
      const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
        loginUserOperation
      ])

      store.dispatch({
        type: USER_LOGIN_SUBMIT,
        values: { username: 'test', password: 'test' },
        ...formMock
      })
      await logicMiddleware.whenComplete()

      expect(store.getActions()).toStrictEqual([
        {
          type: USER_LOGIN_SUBMIT,
          values: {
            username: 'test',
            password: 'test'
          },
          ...formMock
        }
      ])
    })

    it('login action with incorrect error', async () => {
      const formMock = {
        form: { setStatus: jest.fn(), setSubmitting: jest.fn() }
      }
      const httpClient = mockHttpClient([
        {
          method: 'get',
          reject: new Error()
        }
      ])
      const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
        loginUserOperation
      ])

      store.dispatch({
        type: USER_LOGIN_SUBMIT,
        values: { username: 'test', password: 'test' },
        ...formMock
      })
      await logicMiddleware.whenComplete()

      expect(store.getActions()).toStrictEqual([
        {
          type: USER_LOGIN_SUBMIT,
          values: {
            username: 'test',
            password: 'test'
          },
          ...formMock
        }
      ])
    })
  })
})
