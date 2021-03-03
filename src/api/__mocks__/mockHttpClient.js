const mockHttpClient = (mocksResponses) => {
  const result = {}

  mocksResponses.forEach(({ method, resolve, reject }) => {
    result[method] = jest.fn(
      () =>
        new Promise((resolvePromise, rejectPromise) => {
          if (resolve !== undefined) {
            resolvePromise(resolve)
          }

          rejectPromise(reject)
        })
    )
  })

  return result
}

export default mockHttpClient
