import Cookie from 'js-cookie'

const key = 'session_id'

const session = {
  get: () => Cookie.get(key),
  set: (value) => Cookie.set(key, value),
  remove: () => Cookie.remove(key)
}

export default session
