import { createLogic } from 'redux-logic'

import apiRoutes from 'Constants/ApiRoutes'
import storage from 'Utils/storage'
import { getListMovies } from 'Store/concepts/movies/actions'

import { DELETE_LIST_MOVIE } from '../types'

const deleteListMovieOperation = createLogic({
  type: DELETE_LIST_MOVIE,
  latest: true,
  async process(
    {
      httpClient,
      action: {
        id,
        listId
      }
    },
    dispatch,
    done
  ) {
    await httpClient.post(apiRoutes.movies.list.remove(listId), {
      media_id: id
    }, {
      session_id: storage.session.get()
    })

    dispatch(getListMovies({ id: listId, withoutLoading: true }))
    done()
  }
})

export default deleteListMovieOperation
