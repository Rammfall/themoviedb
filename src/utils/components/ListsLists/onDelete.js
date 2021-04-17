/**
 * @param {function} callback
 * @param {number} id
 */
const onDeleteHandler = (callback, id) => () => callback(id)

export default onDeleteHandler
