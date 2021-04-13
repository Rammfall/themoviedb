import { createLogic } from 'redux-logic'

import {
  dataApiRequest,
  dataApiSave,
  dataApiSuccess
} from 'Store/concepts/data/actions'
import { userIdSelector } from 'Store/concepts/account/selectors'
import storage from 'Utils/storage'

import normalizeLists from 'Store/schemas/lists'
import {
  saveListsIds,
  saveTotal
} from '../actions'
import { getListsEndpoint, lists } from '../endpoints'
import { GET_LISTS } from '../types'

const getListsOperation = createLogic({
  type: GET_LISTS,
  latest: true,
  async process(
    {
      httpClient,
      action: {
        page
      },
      getState
    },
    dispatch,
    done
  ) {
    const userId = userIdSelector(getState())
    dispatch(dataApiRequest({ endpoint: lists }))
    const {
      data: {
        results,
        total_results: totalResults
      }
    } = await httpClient.get(getListsEndpoint(userId), { params: { page, session_id: storage.session.get() } })
    const normalizedData = normalizeLists(results)

    dispatch(dataApiSuccess({ endpoint: lists }))
    dispatch(dataApiSave({ endpoint: lists, response: normalizedData.entities.list || {} }))
    dispatch(saveListsIds({ ids: normalizedData.result }))
    dispatch(saveTotal({ total: totalResults }))

    done()
  }
})

export default getListsOperation
