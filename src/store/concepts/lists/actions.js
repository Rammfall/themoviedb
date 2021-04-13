import {
  SAVE_LISTS_TOTAL,
  SAVE_LISTS,
  GET_LISTS
} from './types'

export const getLists = (page = 1) => ({
  type: GET_LISTS,
  page
})

export const saveListsIds = ({ ids }) => ({
  type: SAVE_LISTS,
  ids
})

export const saveTotal = ({ total }) => ({
  type: SAVE_LISTS_TOTAL,
  total
})
