import {
  GET_TRENDING,
  SAVE_FOUNDED_IDS,
  SAVE_FOUNDED_QUANTITY,
  SAVE_TRENDING_IDS,
  SAVE_TRENDING_QUANTITY,
  SEARCH
} from '../types'
import {
  getTrendingMovies,
  saveFoundedIds,
  saveFoundedQuantity,
  saveTrendingMoviesIds,
  saveTrendingQuantity,
  search
} from '../actions'

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

    describe('with page', () => {
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

  describe('search()', () => {
    describe('with default page', () => {
      it('returns correct type and default page', () => {
        expect(search(undefined, 'test'))
          .toStrictEqual({
            type: SEARCH,
            page: 1,
            query: 'test'
          })
      })
    })

    describe('with custom page', () => {
      it('returns correct type and custom page', () => {
        expect(search(5, 'test'))
          .toStrictEqual({
            type: SEARCH,
            page: 5,
            query: 'test'
          })
      })
    })
  })

  describe('saveFoundedIds()', () => {
    it('returns correct type and ids array', () => {
      expect(saveFoundedIds({ moviesIds: [1, 2, 4] }))
        .toStrictEqual({
          type: SAVE_FOUNDED_IDS,
          moviesIds: [1, 2, 4]
        })
    })
  })

  describe('saveFoundedQuantity()', () => {
    it('returns correct type and quantity', () => {
      expect(saveFoundedQuantity({ quantity: 1000 }))
        .toStrictEqual({
          type: SAVE_FOUNDED_QUANTITY,
          quantity: 1000
        })
    })
  })
})
