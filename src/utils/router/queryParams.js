/**
 * @param {URLSearchParams} string
 * @returns {{set: (function(*=, *=): void), get: (function(*=): string), toString: (function(): string)}}
 */
const queryParams = (string) => {
  const params = new URLSearchParams(string)

  return {
    get: (key) => params.get(key),
    set: (key, value) => params.set(key, value),
    toString: () => params.toString()
  }
}

export default queryParams
