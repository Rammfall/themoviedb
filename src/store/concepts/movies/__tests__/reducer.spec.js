import movies from '../reducer'
import {
  SAVE_FOUNDED_IDS,
  SAVE_FOUNDED_QUANTITY,
  SAVE_TRENDING_IDS,
  SAVE_TRENDING_QUANTITY
} from '../types'

describe('movies reducers', () => {
  describe('trendingMovies reducers', () => {
    describe('moviesIds reducer', () => {
      it('handles SAVE_TRENDING_IDS', () => {
        expect(movies(undefined, {
          type: SAVE_TRENDING_IDS,
          moviesIds: [1, 2, 3]
        }).trendingMovies.moviesIds)
          .toStrictEqual([
            1, 2, 3
          ])
      })
    })

    describe('quantity reducer', () => {
      it('handles SAVE_TRENDING_QUANTITY', () => {
        expect(movies(undefined, {
          type: SAVE_TRENDING_QUANTITY,
          quantity: 20
        }).trendingMovies.quantity)
          .toStrictEqual(20)
      })
    })
  })

  describe('foundedMovies reducers', () => {
    describe('moviesIds reducer', () => {
      it('handles SAVE_TRENDING_IDS', () => {
        expect(movies(undefined, {
          type: SAVE_FOUNDED_IDS,
          moviesIds: [1, 2, 3]
        }).foundedMovies.moviesIds)
          .toStrictEqual([
            1, 2, 3
          ])
      })
    })

    describe('quantity reducer', () => {
      it('handles SAVE_TRENDING_QUANTITY', () => {
        expect(movies(undefined, {
          type: SAVE_FOUNDED_QUANTITY,
          quantity: 20
        }).foundedMovies.quantity)
          .toStrictEqual(20)
      })
    })
  })
})
