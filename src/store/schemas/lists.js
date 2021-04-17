import { schema, normalize } from 'normalizr'

const list = new schema.Entity('list')
const normalizeLists = (data) => normalize(data, [list])

export default normalizeLists
