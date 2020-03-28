import Mock from 'mockjs'
const data = Mock.mock({  // 模拟数据生成，遵循Mock语法规范
  'items|5': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    'f':process.env.NODE_ENV,
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

 
export default [  
  // 路由拦截，返回指定格式数据
  // 以下格式为兼容after中间件拦截、返回要求
  {
    url: '/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/account/login',
    type: 'post',
    response: config => {
      return {
        "code":20000,
        "data":{
          "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODU0MDM3NDUsInVzZXJJZCI6MSwidXVpZCI6IjY3NGU0MjYxLWQ2YmMtNGZmZC1hYzIyLWU5ZjViMzQxODkwMSIsInVzZXJuYW1lIjoiYWRtaW4ifQ.ejL8fpfxU2S3r5DAG9XMcCxssJ6KldW8an4D333bsoc"
        },
        "msg":"成功",
        "success":true
      }
    }
  }
]
