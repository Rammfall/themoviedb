import loginUserLogicOperation from 'Store/concepts/session/operations/login'
import logoutUserLogicOperation from 'Store/concepts/session/operations/logout'
import checkLoggedStatusOperation from 'Store/concepts/session/operations/checkLoggedStatus'

export default [
  loginUserLogicOperation,
  logoutUserLogicOperation,
  checkLoggedStatusOperation
]
