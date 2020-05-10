import request from '@/axios';

export function getList(params) {
  return request({
    url: '/user/list',
    method: 'get',
    params
  })
}

export function saveUser(params) {
  return request({
    url: '/user',
    method: 'post',
    params
  })
}

export function remove(userId) {
  return request({
    url: '/user',
    method: 'delete',
    params: {
      userId
    }
  })
}

export function setRole(params) {
  return request({
    url: '/user/setRole',
    method: 'get',
    params
  })
}
