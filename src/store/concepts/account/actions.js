import { GET_INFO, SET_USERNAME } from 'Store/concepts/account/types'

export const getUsername = () => ({
  type: GET_INFO
})

export const setUsername = ({ username }) => ({
  type: SET_USERNAME,
  username
})

