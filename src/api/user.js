import request from '@/axios';

export function login(data) {
  return request({
    url: '/mock/account/login',
    method: 'get',
    params: {
      "username": data.username,
      "password": data.password
    }
  })
}

export function getInfo() {
  return request({
    url: '/mock/account/info',
    method: 'get'
  })
}

export function logout(token) {
  return request({
    url: '/mock/account/logout',
    method: 'post'
  })
}



export function updatePwd(params) {
  return request({
    url: '/account/updatePwd',
    method: 'post',
    params
  })
}
