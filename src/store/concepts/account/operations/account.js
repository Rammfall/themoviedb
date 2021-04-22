import { createLogic } from 'redux-logic'

import storage from 'Utils/storage'
import { setUserId, setUsername } from 'Store/concepts/account/actions'
import apiRoutes from 'Constants/apiRoutes'

import { GET_INFO } from '../types'

const getAccountOperation = createLogic({
  type: GET_INFO,
  latest: true,
  async process(
    {
      httpClient
    },
    dispatch,
    done
  ) {
    const { data: { username, id } } = await httpClient.get(apiRoutes.account, { params: { session_id: storage.session.get() } })

    dispatch(setUsername({ username }))
    dispatch(setUserId({ id }))

    done()
  }
})

export default getAccountOperation
