import { createLogic } from 'redux-logic'

import storage from 'Utils/storage'
import apiRoutes from 'Constants/ApiRoutes'
import { moviesConstant } from 'Constants/concepts'
import { userIdSelector } from 'Store/concepts/account/selectors'

import { TOGGLE_FAVORITE_MOVIE } from '../types'
import { getFavoritesMovies } from '../actions'

const toggleFavoriteMovieOperation = createLogic({
  type: TOGGLE_FAVORITE_MOVIE,
  latest: true,
  async process(
    {
      httpClient,
      action: {
        id,
        favorite
      },
      getState
    },
    dispatch,
    done
  ) {
    const userId = userIdSelector(getState())
    await httpClient.post(apiRoutes.movies.favorites.toggle(userId), {
      media_id: id,
      media_type: moviesConstant,
      favorite
    }, {
      params: {
        session_id: storage.session.get()
      }
    })

    dispatch(getFavoritesMovies(true))
    done()
  }
})

export default toggleFavoriteMovieOperation
