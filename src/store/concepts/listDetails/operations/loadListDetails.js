import { createLogic } from 'redux-logic'

import apiRoutes from 'Constants/apiRoutes'
import { getCurrentPage } from 'Store/concepts/router/selectors'
import normalizeMovies from 'Store/schemas/movies'
import { dataApiSuccess, dataApiSave } from 'Store/concepts/data/actions'
import { LISTS, MOVIES } from 'Constants/concepts'
import normalizeLists from 'Store/schemas/lists'

import { saveLists } from 'Store/concepts/lists/actions'
import { LOAD_LIST_DETAILS } from '../types'
import { saveListDetails } from '../actions'

const loadListDetailsOperation = createLogic({
  type: LOAD_LIST_DETAILS,
  latest: true,
  async process(
    {
      httpClient,
      action: {
        id
      },
      getState
    },
    dispatch,
    done
  ) {
    const route = apiRoutes.listDetails.get(id)
    const page = getCurrentPage(getState())

    const { data } = await httpClient.get(route, {
      params: {
        page
      }
    })
    const {
      items,
      item_count: itemCount
    } = data
    const normalizedMovies = normalizeMovies(items)
    const normalizedList = normalizeLists([data])
    dispatch(dataApiSuccess({ endpoint: route }))
    dispatch(dataApiSave({ endpoint: MOVIES, response: normalizedMovies.entities.movie}))
    dispatch(dataApiSave({ endpoint: LISTS, response: normalizedList.entities.list}))
    dispatch(saveLists({ ids: normalizedList.result, total: 1 }))
    dispatch(saveListDetails({ listId: id, ids: normalizedMovies.result, total: itemCount }))

    done()
  }
})

export default loadListDetailsOperation
