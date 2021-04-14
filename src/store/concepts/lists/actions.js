import { makeSubmitAction } from 'Store/actionFactories/makeSubmitAction'

import {
  SAVE_LISTS_TOTAL,
  SAVE_LISTS,
  GET_LISTS,
  ADD_LIST,
  LOAD_LISTS
} from './types'

export const loadLists = (page = 1) => ({
  type: LOAD_LISTS,
  page
})

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

export const addList = makeSubmitAction(ADD_LIST)
