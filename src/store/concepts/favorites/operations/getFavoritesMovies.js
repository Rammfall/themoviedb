import { createLogic } from 'redux-logic'

import { dataApiRequest } from 'Store/concepts/data/actions'
import { FAVORITES } from 'Constants/concepts'

import { GET_FAVORITE_MOVIES } from '../types'
import { loadFavoritesMovies } from '../actions'

const getFavoritesMoviesOperation = createLogic({
  type: GET_FAVORITE_MOVIES,
  latest: true,
  async process(
    _,
    dispatch,
    done
  ) {
    dispatch(dataApiRequest({ endpoint: FAVORITES }))
    dispatch(loadFavoritesMovies())
    done()
  }
})

export default getFavoritesMoviesOperation
