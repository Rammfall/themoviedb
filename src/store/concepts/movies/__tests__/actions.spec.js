import { GET_TRENDING, SAVE_TRENDING_IDS, SAVE_TRENDING_QUANTITY } from '../types'
import { getTrendingMovies, saveTrendingMoviesIds, saveTrendingQuantity } from '../actions'

describe('movies actions', () => {
  describe('getTrendingMovies()', () => {
    describe('with default page', () => {
      it('returns correct type and default page', () => {
        expect(getTrendingMovies())
          .toStrictEqual({
            type: GET_TRENDING,
            page: 1
          })
      })
    })

    describe('with custom page', () => {
      it('returns correct type and custom page', () => {
        expect(getTrendingMovies(5))
          .toStrictEqual({
            type: GET_TRENDING,
            page: 5
          })
      })
    })
  })

  describe('getTrendingMoviesIds()', () => {
    it('returns correct type and ids array', () => {
      expect(saveTrendingMoviesIds({ moviesIds: [1, 2, 4] }))
        .toStrictEqual({
          type: SAVE_TRENDING_IDS,
          moviesIds: [1, 2, 4]
        })
    })
  })

  describe('saveTrendingQuantity()', () => {
    it('returns correct type and quantity', () => {
      expect(saveTrendingQuantity({ quantity: 1000 }))
        .toStrictEqual({
          type: SAVE_TRENDING_QUANTITY,
          quantity: 1000
        })
    })
  })
})
