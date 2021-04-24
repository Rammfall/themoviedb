import { createSelector } from 'reselect'

/**
 * @returns {{total: number, isEmpty: boolean, movies: Object[]}}
 */
export const getListDetailsMoviesSelector = createSelector(
  ({ data: { movies } }) => movies,
  ({ data: { lists } }) => lists,
  ({ listDetails }) => listDetails,
  (_, id) => id,
  (movies, lists, listsDetails, id) => ({
    movies: listsDetails[id].ids.map((item) => movies[item]),
    isEmpty: !listsDetails[id].ids.length,
    total: listsDetails[id].total
  })
)

/**
 * @returns {string}
 */
export const getListTitleSelector = createSelector(
  ({ data: { lists } }) => lists,
  (_, id) => id,
  (lists, id) => lists[id].name
)

/**
 * @returns {boolean}
 */
export const isBlankSelector = createSelector(
  ({ listDetails }) => listDetails,
  (_, id) => id,
  (listDetails, id) => !listDetails[id]
)
