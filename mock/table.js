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
    url: '/account/info',
    type: 'get',
    response: config => {
      return {
        "code":200,
        "data":{
          "permissions":[null,"/loginLog/delLoginLog","/cms/articleEdit","/mgr/freeze","/log/detail","/shopUserDetail","/loginLog/list","/cart","/promotion","/fileMgr","/banner","/history","/category/edit","/topic/delete","/goods","/channel","/mgr","/dict","/swagger","/mgr/reset","/menu/add","/log","/menu/edit","/goodsEdit","/dict/delete","/role/setAuthority","/dict/add","/topic","/role/add","/cms","/mgr/edit","/dept","/banner/edit","/task/update","/dept/delete","/message","/log/delLog","/role/remove","/category","/contacts","/cfg","/cfg/update","/taskLog","/menu","/cfg/delete","/task/add","/mgr/delete","/topic/edit","/orderDetail","/cfg/add","/article","/mgr/setRole","/dept/detail","/druid","/dept/list","/dict/list","/sender","/template","/mgr/unfreeze","/role/edit","/mgr/add","/dict/update","/shop","/loginLog","/banner/delete","/shopUser","/role","/dept/update","/optionMgr","/dept/add","/task","/favorite","/order","/dict/detail","/menu/remove","/system","/task/delete"],
          "profile":{
            "avatar":"2",
            "account":"admin",
            "password":"b5a51391f271f062867e5984e2fcffee",
            "salt":"8pgby",
            "name":"管理员",
            "birthday":"2017-05-05 00:00:00",
            "sex":2,
            "email":"eniluzt@qq.com",
            "phone":"15021222222",
            "roleid":"1",
            "deptid":"27",
            "status":1,
            "version":25,
            "id":"1",
            "createTime":"2016-01-29 08:49:53",
            "createBy":"",
            "modifyTime":"2019-03-20 23:45:24",
            "modifyBy":"1",
            "dept":"战略部",
            "roles":[
              "超级管理员"
            ]
          },
          "name":"管理员",
          "role":"admin",
          "roles":[
            "administrator"
          ]
        },
        "msg":"成功",
        "success":true
      }
    }
  },
  {
    url: '/account/login',
    type: 'get',
    response: config => {
      return {
        "code":200,
        "data":{
          "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODU0MDM3NDUsInVzZXJJZCI6MSwidXVpZCI6IjY3NGU0MjYxLWQ2YmMtNGZmZC1hYzIyLWU5ZjViMzQxODkwMSIsInVzZXJuYW1lIjoiYWRtaW4ifQ.ejL8fpfxU2S3r5DAG9XMcCxssJ6KldW8an4D333bsoc"
        },
        "msg":"成功le",
        "success":true
      }
    }
  },
  {
    url: '/menu/listForRouter',
    type: 'get',
    response: config => {
      return {
        "code":200,
        "data":[
          {
            "children":[
              {
                "children":[],
                "component":"views/shop/shopUser/index",
                "hidden":false,
                "id":"72",
                "meta":{
                  "icon":"user",
                  "title":"会员管理"
                },
                "name":"会员管理",
                "num":1,
                "parentId":"71",
                "path":"/shopUser"
              },
              {
                "children":[],
                "component":"views/shop/category/index",
                "hidden":false,
                "id":"75",
                "meta":{
                  "icon":"category",
                  "title":"商品类别"
                },
                "name":"商品类别",
                "num":2,
                "parentId":"71",
                "path":"/category"
              }
            ],
            "component":"layout",
            "hidden":false,
            "id":"71",
            "meta":{
              "icon":"shop",
              "title":"商城管理"
            },
            "name":"商城管理",
            "num":1,
            "parentId":"0",
            "path":"/shop"
          }
        ],
        "msg":"成功",
        "success":true
      }
    }
  },
  {
    url: '/dashboard',
    type: 'get',
    response: config => {
      return {
        "code":200,
        "data":{
          "orderSumPrice":13394.0,
          "userCount":"1",
          "orderCount":"4",
          "cartCount":"3"
        },
        "msg":"成功",
        "success":true
      }
    }
  },
  {
    url: '/notice/list',
    type: 'get',
    response: config => {
      return {
        "code":200,
        "data":[
          {
            "content":"欢迎使用邻家小铺后台管理系统",
            "createBy":"1",
            "createTime":"2017-01-11 08:53:20",
            "id":"1",
            "modifyBy":"1",
            "modifyTime":"2019-01-08 23:30:58",
            "title":"邻家小铺",
            "type":10
          }
        ],
        "msg":"成功",
        "success":true
      }
    }
  }
]
