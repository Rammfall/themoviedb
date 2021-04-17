import { createLogic } from 'redux-logic'

import { dataApiRequest } from 'Store/concepts/data/actions'

import { loadLists } from '../actions'
import { lists } from '../endpoints'
import { GET_LISTS } from '../types'

const getListsOperation = createLogic({
  type: GET_LISTS,
  latest: true,
  async process(
    {
      action: {
        page
      }
    },
    dispatch,
    done
  ) {
    dispatch(dataApiRequest({ endpoint: lists }))
    dispatch(loadLists(page))

    done()
  }
})

export default getListsOperation
