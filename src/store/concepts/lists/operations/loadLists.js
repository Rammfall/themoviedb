import { createLogic } from 'redux-logic'

import { userIdSelector } from 'Store/concepts/account/selectors'
import { dataApiSave, dataApiSuccess } from 'Store/concepts/data/actions'
import storage from 'Utils/storage'
import normalizeLists from 'Store/schemas/lists'
import apiRoutes from 'Constants/apiRoutes'
import { LISTS } from 'Constants/concepts'
import { getCurrentPage } from 'Store/concepts/router/selectors'

import { LOAD_LISTS } from '../types'
import { saveLists } from '../actions'

const loadListsOperation = createLogic({
  type: LOAD_LISTS,
  latest: true,
  async process(
    {
      httpClient,
      getState
    },
    dispatch,
    done
  ) {
    const userId = userIdSelector(getState())
    const page = getCurrentPage(getState())
    const {
      data: {
        results,
        total_results: totalResults
      }
    } = await httpClient.get(apiRoutes.lists.get(userId), { params: { page, session_id: storage.session.get() } })
    const normalizedData = normalizeLists(results)

    dispatch(dataApiSuccess({ endpoint: LISTS }))
    dispatch(dataApiSave({ endpoint: LISTS, response: normalizedData.entities.list}))
    dispatch(saveLists({ ids: normalizedData.result, total: totalResults }))

    done()
  }
})

export default loadListsOperation
