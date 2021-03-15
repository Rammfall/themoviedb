import { schema, normalize } from 'normalizr'

const movie = new schema.Entity('movie')

const normalizeMovies = (data) => normalize(data, [movie])

export default normalizeMovies
