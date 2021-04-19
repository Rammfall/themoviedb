import { createLogic } from 'redux-logic'

import session from 'Utils/storage'
import apiRoutes from 'Constants/ApiRoutes'

import { ADD_LIST } from '../types'
import { loadLists } from '../actions'

const addListOperation = createLogic({
  type: ADD_LIST,
  latest: true,
  async process(
    {
      httpClient,
      action: {
        values: { name, description },
        form: { setSubmitting }
      }
    },
    dispatch,
    done
  ) {
    await httpClient.post(apiRoutes.lists.add, {
      name,
      description
    }, {
      params: {
        session_id: session.session.get()
      }
    })
    dispatch(loadLists())

    setSubmitting(false)
    done()
  }
})

export default addListOperation
