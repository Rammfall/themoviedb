import { createLogic } from 'redux-logic'

import { dataApiRequest } from 'Store/concepts/data/actions'
import { listsConstant } from 'Constants/concepts'

import { loadLists } from '../actions'
import { GET_LISTS } from '../types'

const getListsOperation = createLogic({
  type: GET_LISTS,
  latest: true,
  async process(
    _,
    dispatch,
    done
  ) {
    dispatch(dataApiRequest({ endpoint: listsConstant }))
    dispatch(loadLists())

    done()
  }
})

export default getListsOperation
