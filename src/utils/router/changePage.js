function changePage(history, handler) {
  return (page) => {
    history.push({
      search: `?page=${page}`
    })
    handler(page)
  }
}

export default changePage
