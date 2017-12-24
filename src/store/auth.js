
export function getToken () {
  return window.localStorage['TokenKey']
}

export function setToken (token) {
  window.localStorage['TokenKey'] = token
}

export function removeToken () {
  window.localStorage['TokenKey'] = ''
}
