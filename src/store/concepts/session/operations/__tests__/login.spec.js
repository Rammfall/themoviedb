import {
  USER_LOGIN_SUBMIT,
  USER_LOGIN_SUCCESS
} from 'Store/concepts/session/types'

import loginUserOperation from 'Store/concepts/session/operations/login'
import storeWithMiddlewareMock from 'Store/__mocks__/storeWithMiddlewareMock'
import mockHttpClient from 'Api/__mocks__/mockHttpClient'
import storage from 'Modules/storage'

jest.mock('Modules/storage')

describe('loginUserOperation()', () => {
  storage.session.set.mockImplementation(jest.fn())

  describe('with success response', () => {
    const formMocks = {
      form: { setStatus: jest.fn(), setSubmitting: jest.fn() }
    }
    const httpClient = mockHttpClient([
      {
        method: 'get',
        response: () =>
          new Promise((resolve) => resolve({ data: { request_token: 'test' } }))
      },
      {
        method: 'post',
        response: () =>
          new Promise((resolve) => resolve({ data: { session_id: 'testId' } }))
      }
    ])
    const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
      loginUserOperation
    ])

    store.dispatch({
      type: USER_LOGIN_SUBMIT,
      values: { username: 'test', password: 'test' },
      ...formMocks
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
          ...formMocks
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
      const formMocks = {
        form: { setStatus: jest.fn(), setSubmitting: jest.fn() }
      }
      const httpClient = mockHttpClient([
        {
          method: 'get',
          response: () =>
            new Promise((resolve, rejects) => {
              const error = new Error()

              error.status = 401
              rejects(error)
            })
        }
      ])
      const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
        loginUserOperation
      ])

      store.dispatch({
        type: USER_LOGIN_SUBMIT,
        values: { username: 'test', password: 'test' },
        ...formMocks
      })
      await logicMiddleware.whenComplete()

      expect(store.getActions()).toStrictEqual([
        {
          type: USER_LOGIN_SUBMIT,
          values: {
            username: 'test',
            password: 'test'
          },
          ...formMocks
        }
      ])
    })

    it('login action with incorrect error', async () => {
      const formMocks = {
        form: { setStatus: jest.fn(), setSubmitting: jest.fn() }
      }
      const httpClient = mockHttpClient([
        {
          method: 'get',
          response: () =>
            new Promise((resolve, rejects) => rejects(new Error()))
        }
      ])
      const { store, logicMiddleware } = storeWithMiddlewareMock(httpClient, [
        loginUserOperation
      ])

      store.dispatch({
        type: USER_LOGIN_SUBMIT,
        values: { username: 'test', password: 'test' },
        ...formMocks
      })
      await logicMiddleware.whenComplete()

      expect(store.getActions()).toStrictEqual([
        {
          type: USER_LOGIN_SUBMIT,
          values: {
            username: 'test',
            password: 'test'
          },
          ...formMocks
        }
      ])
    })
  })
})