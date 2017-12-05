import request from './request'

export function loginByUsername (username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/app/mock/224/GET/web',
    method: 'post',
    data
  })
}
