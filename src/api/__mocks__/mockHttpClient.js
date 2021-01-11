const mockHttpClient = (mocksResponses) => {
  const result = {}

  mocksResponses.forEach(({ method, response }) => {
    result[method] = jest.fn(response)
  })

  return result
}

export default mockHttpClient
