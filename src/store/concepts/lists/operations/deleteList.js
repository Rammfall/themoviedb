import { createLogic } from 'redux-logic'

import storage from 'Utils/storage'
import apiRoutes from 'Constants/apiRoutes'

import { DELETE_LIST } from '../types'
import { loadLists } from '../actions'

const deleteListOperation = createLogic({
  type: DELETE_LIST,
  latest: true,
  async process(
    {
      httpClient,
      action: {
        id
      }
    },
    dispatch,
    done
  ) {
    try {
      await httpClient.delete(apiRoutes.lists.delete(id), { params: { session_id: storage.session.get() } })

      // API is bullshit, it always raises the 500 error
      // eslint-disable-next-line no-empty
    } catch (e) {}
    dispatch(loadLists())
    done()
  }
})

export default deleteListOperation
