import { createLogic } from 'redux-logic'

import storage from 'Utils/storage'
import { setUsername } from 'Store/concepts/account/actions'
import { ACCOUNT_GET_INFO } from '../types'
import { account } from '../endpoints'

const accountOperation = createLogic({
  type: ACCOUNT_GET_INFO,
  latest: true,
  async process(
    {
      httpClient
    },
    dispatch,
    done
  ) {
    try {
      const { data: { username } } = await httpClient.get(account, { params: { session_id: storage.session.get() } })
      dispatch(setUsername({ username }))
      // eslint-disable-next-line no-empty
    } catch (e) {}
    done()
  }
})

export default accountOperation
