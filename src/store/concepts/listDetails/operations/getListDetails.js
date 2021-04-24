import { createLogic } from 'redux-logic'

import apiRoutes from 'Constants/apiRoutes'
import { dataApiRequest } from 'Store/concepts/data/actions'

import { loadListDetails } from '../actions'
import { GET_LIST_DETAILS } from '../types'

const getListDetailsOperation = createLogic({
  type: GET_LIST_DETAILS,
  latest: true,
  async process(
    {
      action: {
        id
      }
    },
    dispatch,
    done
  ) {
    dispatch(dataApiRequest({ endpoint: apiRoutes.listDetails.get(id) }))
    dispatch(loadListDetails({ id }))
    done()
  }
})

export default getListDetailsOperation
