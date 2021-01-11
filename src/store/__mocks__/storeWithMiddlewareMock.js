import { createLogicMiddleware } from 'redux-logic'
import configureStore from 'redux-mock-store'

const storeWithMiddlewareMock = (httpClient, operations) => {
  const initialState = {}

  const logicMiddleware = createLogicMiddleware(operations, {
    httpClient
  })
  const mockStore = configureStore([logicMiddleware])
  return { store: mockStore(initialState), logicMiddleware }
}

export default storeWithMiddlewareMock
