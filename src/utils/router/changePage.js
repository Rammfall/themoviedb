function changePage(history, handler) {
  return (page) => {
    history.push(`?page=${page}`)
    handler(page)
  }
}

export default changePage
