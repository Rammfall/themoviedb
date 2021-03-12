import { createLogic } from 'redux-logic'

import storage from 'Utils/storage'
import { setUsername } from 'Store/concepts/account/actions'
import { GET_INFO } from '../types'
import { account } from '../endpoints'

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
    const { data: { username } } = await httpClient.get(account, { params: { session_id: storage.session.get() } })

    dispatch(setUsername({ username }))

    done()
  }
})

export default getAccountOperation
