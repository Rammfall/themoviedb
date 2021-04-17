/**
 * @param {number} id
 * @param {function} callback
 * @returns {function(): *}
 */
const onConfirm = (id, callback) => async () => {
  await callback({ id })
}

export default onConfirm
