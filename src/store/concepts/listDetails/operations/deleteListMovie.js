import { createLogic } from 'redux-logic'

import apiRoutes from 'Constants/apiRoutes'
import storage from 'Utils/storage'

import { loadListDetails } from '../actions'
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
    await httpClient.post(apiRoutes.listDetails.remove(listId), {
      media_id: id
    }, {
      params: {
        session_id: storage.session.get()
      }
    })

    dispatch(loadListDetails({ id: listId }))
    done()
  }
})

export default deleteListMovieOperation
