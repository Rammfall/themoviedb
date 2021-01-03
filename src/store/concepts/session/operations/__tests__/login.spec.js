import { createLogicMiddleware } from 'redux-logic'
import configureStore from 'redux-mock-store'
import Cookie from 'js-cookie'

import {
  SUBMIT_USER_LOGIN,
  USER_LOGIN_SUCCESS
} from 'Store/concepts/session/types'

import reducer from 'Store/concepts/session/reducer'
import loginUserLogicOperation from 'Store/concepts/session/operations/login'

jest.mock('js-cookie')
describe('check login operation', () => {
  it('login action with success response server', async () => {
    const initialState = {}
    const httpClient = jest.fn()
    Cookie.set = jest.fn()
    httpClient.get = jest.fn(
      () =>
        new Promise((resolve) =>
          resolve({ data: { request_token: 'testset' } })
        )
    )
    httpClient.post = jest.fn(
      () =>
        new Promise((resolve) => resolve({ data: { session_id: 'testset' } }))
    )
    const logicMiddleware = createLogicMiddleware([loginUserLogicOperation], {
      httpClient
    })
    const mockStore = configureStore([logicMiddleware])

    const store = mockStore(initialState, reducer)

    store.dispatch({
      type: SUBMIT_USER_LOGIN,
      values: { username: 'test', password: 'test' }
    })
    await logicMiddleware.whenComplete()

    expect(store.getActions()).toStrictEqual([
      {
        type: SUBMIT_USER_LOGIN,
        values: {
          username: 'test',
          password: 'test'
        }
      },
      {
        type: USER_LOGIN_SUCCESS,
        isLogged: true
      }
    ])
    expect(Cookie.set).toHaveBeenCalledTimes(1)
  })

  it('login action with error response server', async () => {
    const initialState = {}
    const httpClient = jest.fn()
    httpClient.get = jest.fn(
      () =>
        new Promise((resolve, rejects) => {
          const error = new Error()

          error.status = 401
          rejects(error)
        })
    )
    const logicMiddleware = createLogicMiddleware([loginUserLogicOperation], {
      httpClient
    })
    const mockStore = configureStore([logicMiddleware])

    const store = mockStore(initialState, reducer)

    store.dispatch({
      type: SUBMIT_USER_LOGIN,
      values: { username: 'test', password: 'test' }
    })
    await logicMiddleware.whenComplete()

    expect(store.getActions()).toStrictEqual([
      {
        type: SUBMIT_USER_LOGIN,
        values: {
          username: 'test',
          password: 'test'
        }
      }
    ])
  })

  it('login action with incorrect error', async () => {
    const initialState = {}
    const httpClient = jest.fn()
    httpClient.get = jest.fn(
      () => new Promise((resolve, rejects) => rejects(new Error()))
    )
    const logicMiddleware = createLogicMiddleware([loginUserLogicOperation], {
      httpClient
    })
    const mockStore = configureStore([logicMiddleware])

    const store = mockStore(initialState, reducer)

    store.dispatch({
      type: SUBMIT_USER_LOGIN,
      values: { username: 'test', password: 'test' }
    })
    await logicMiddleware.whenComplete()

    expect(store.getActions()).toStrictEqual([
      {
        type: SUBMIT_USER_LOGIN,
        values: {
          username: 'test',
          password: 'test'
        }
      }
    ])
  })
})
