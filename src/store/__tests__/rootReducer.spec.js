import rootReducer from 'Store/rootReducer'
import { RESET_STORE } from 'Store/types'

describe('rootReducer()', () => {
  it('should handle RESET_STORE', () => {
    const state = {
      session: {
        isLogged: true
      }
    }
    const action = { type: RESET_STORE }
    const initialState = rootReducer(undefined, {})

    expect(rootReducer(state, action)).toStrictEqual(initialState)
  })
})
