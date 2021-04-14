/**
 * @param {number} id
 * @param {function} callback
 * @returns {function(): *}
 */
const onConfirm = (id, callback) => () => {
  callback({ id })
}

export default onConfirm
