import {
  GET_FAVORITE_MOVIES,
  SAVE_FAVORITE_MOVIES,
  TOGGLE_FAVORITE_MOVIE,
  LOAD_FAVORITE_MOVIES
} from '../types'
import {
  getFavoritesMovies,
  saveFavoritesMovies,
  toggleFavoriteMovie,
  loadFavoritesMovies
} from '../actions'

describe('favorites actions', () => {
  describe('getFavoritesMovies()', () => {
    it('returns object with correct shape', () => {
      expect(getFavoritesMovies())
        .toStrictEqual({
          type: GET_FAVORITE_MOVIES
        })
    })
  })

  describe('loadFavoritesMovies()', () => {
    it('returns object with correct shape', () => {
      expect(loadFavoritesMovies())
        .toStrictEqual({
          type: LOAD_FAVORITE_MOVIES
        })
    })
  })

  describe('saveFavoritesMovies()', () => {
    it('returns object with correct shape', () => {
      expect(saveFavoritesMovies({ ids: [0], total: 1000 }))
        .toStrictEqual({
          type: SAVE_FAVORITE_MOVIES,
          ids: [0],
          total: 1000
        })
    })
  })

  describe('toggleFavoriteMovie()', () => {
    describe('with default arg', () => {
      it('returns object with correct shape', () => {
        expect(toggleFavoriteMovie({ id: 3 }))
          .toStrictEqual({
            type: TOGGLE_FAVORITE_MOVIE,
            id: 3,
            favorite: false
          })
      })
    })

    describe('with custom arg', () => {
      it('returns object with correct shape', () => {
        expect(toggleFavoriteMovie({ id: 3, favorite: true }))
          .toStrictEqual({
            type: TOGGLE_FAVORITE_MOVIE,
            id: 3,
            favorite: true
          })
      })
    })
  })
})
