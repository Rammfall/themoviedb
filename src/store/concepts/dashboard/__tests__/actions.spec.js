import {
  GET_TRENDING,
  SEARCH,
  SAVE_DASHBOARD_MOVIES
} from '../types'
import {
  getTrendingMovies,
  search,
  saveDashboard
} from '../actions'

describe('dashboard actions', () => {
  describe('getTrendingMovies()', () => {
    it('returns object with correct shape', () => {
      expect(getTrendingMovies())
        .toStrictEqual({
          type: GET_TRENDING
        })
    })
  })

  describe('search()', () => {
    it('returns object with correct shape', () => {
      expect(search({ query: 'test' }))
        .toStrictEqual({
          type: SEARCH,
          query: 'test'
        })
    })
  })

  describe('saveDashboard()', () => {
    it('returns object with correct shape', () => {
      expect(saveDashboard({ ids: [1, 2, 4], total: 3 }))
        .toStrictEqual({
          type: SAVE_DASHBOARD_MOVIES,
          ids: [1, 2, 4],
          total: 3
        })
    })
  })
})
