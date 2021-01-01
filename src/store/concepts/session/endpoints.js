// eslint-disable-next-line import/no-unresolved
import { API_KEY } from 'Config/application'

export const requestToken = `/authentication/token/new?api_key=${API_KEY}`
export const validateRequestToken = `authentication/token/validate_with_login?api_key=${API_KEY}`
export const newSession = `/authentication/session/new?api_key=${API_KEY}`
