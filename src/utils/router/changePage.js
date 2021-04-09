function changePage(history, handler) {
  return (page) => {
    console.log(history)
    history.push({
      search: `?page=${page}`
    })
    handler(page)
  }
}

export default changePage
