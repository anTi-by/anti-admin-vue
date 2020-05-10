import request from '@/axios';

export function getList(params) {
  return request({
    url: '/notice/list',
    method: 'get',
    params
  })
}
