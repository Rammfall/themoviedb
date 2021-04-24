export const moviesSelector = (store) => store.data.movies

export const idsSelector = (key) => ({ [key]: { ids } }) => ids

export const totalSelector = (key) => ({ [key]: { total } }) => total

export const shapeSelector = (key) => (list, ids, total) => ({ total, isEmpty: !ids.length, [key]: ids.map((item) => list[item]) })
