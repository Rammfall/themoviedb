import { createLogic } from 'redux-logic'

import session from 'Utils/storage'

import { addListEndpoint } from '../endpoints'
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
        form: { setSubmitting },
        page
      }
    },
    dispatch,
    done
  ) {
    await httpClient.post(addListEndpoint, {
      name,
      description
    }, {
      params: {
        session_id: session.session.get()
      }
    })
    dispatch(loadLists(page))

    setSubmitting(false)
    done()
  }
})

export default addListOperation
