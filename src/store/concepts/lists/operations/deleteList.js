import { createLogic } from 'redux-logic'

import storage from 'Utils/storage'

import { DELETE_LIST } from '../types'
import { loadLists } from '../actions'
import { deleteListEndpoint } from '../endpoints'

const deleteListOperation = createLogic({
  type: DELETE_LIST,
  latest: true,
  async process(
    {
      httpClient,
      action: {
        id,
        page
      }
    },
    dispatch,
    done
  ) {
    const route = deleteListEndpoint(id)
    try {
      await httpClient.delete(route, { params: { session_id: storage.session.get() } })

      // API is bullshit, it always raise the 500 error
      // eslint-disable-next-line no-empty
    } catch (e) {}
    dispatch(loadLists(page))
    done()
  }
})

export default deleteListOperation
