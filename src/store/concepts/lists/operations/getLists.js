import { createLogic } from 'redux-logic'

import { dataApiRequest } from 'Store/concepts/data/actions'

import { loadLists } from '../actions'
import { lists } from '../endpoints'
import { GET_LISTS } from '../types'

const getListsOperation = createLogic({
  type: GET_LISTS,
  latest: true,
  async process(
    {},
    dispatch,
    done
  ) {
    dispatch(dataApiRequest({ endpoint: lists }))
    dispatch(loadLists())

    done()
  }
})

export default getListsOperation
