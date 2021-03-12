import { ACCOUNT_GET_INFO, ACCOUNT_SET_USERNAME } from 'Store/concepts/account/types'

export const getUsername = () => ({
  type: ACCOUNT_GET_INFO
})

export const setUsername = ({ username }) => ({
  type: ACCOUNT_SET_USERNAME,
  username
})

