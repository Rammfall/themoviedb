import { getTrendingMoviesQuantitySelector, getTrendingMoviesSelector } from '../selectors'

describe('movies selectors', () => {
  const state = {
    data: {
      movies: {
        1: {
          name: 'test'
        },
        2: {
          name: 'test2'
        }
      }
    },
    movies: {
      trendingMovies: {
        moviesIds: [1],
        quantity: 10
      }
    }
  }

  describe('trendingMovies', () => {
    describe('getTrendingMoviesSelector()', () => {
      it('returns array movies', () => {
        expect(getTrendingMoviesSelector(state)).toStrictEqual([ { name: 'test' } ])
      })
    })

    describe('getTrendingMoviesQuantitySelector()', () => {
      it('returns quantity', () => {
        expect(getTrendingMoviesQuantitySelector(state)).toStrictEqual(10)
      })
    })
  })
})
