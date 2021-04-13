import { createLogicMiddleware } from 'redux-logic'
import configureStore from 'redux-mock-store'

/**
 * @param {Object} httpClient
 * @param {Function[]} operations
 * @returns {{logicMiddleware: LogicMiddleware<{}, {httpClient}, undefined, string>, store}}
 */
const storeWithMiddlewareMock = (httpClient, operations) => {
  const initialState = {}

  const logicMiddleware = createLogicMiddleware(operations, {
    httpClient
  })
  const mockStore = configureStore([logicMiddleware])
  return { store: mockStore(initialState), logicMiddleware }
}

export default storeWithMiddlewareMock
