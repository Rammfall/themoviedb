const mockHttpClient = (mocksResponses) => {
  const result = {}

  mocksResponses.map(({method, response}) => {
    result[method] = jest.fn(response)

    return undefined
  })

  return result
}

export default mockHttpClient
