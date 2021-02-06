// 使用Mock
const Mock = require('mockjs')
require('./my-radom')
const Random = Mock.Random
Mock.setup({
  timeout: '500-1000'
})

const list = []

for (let i = 0; i < 20; i++) {
  list.push({
    id: i + 1,
    date: Random.date(),
    name: Random.cname(),
    address: Random.address(),
    likes: Random.likes()
  })
}

const users = [
  {
    id: 1,
    username: 'student',
    password: '123456',
    token: 'student-token',
    rights: [{
      id: 1,
      authName: '导航一',
      icon: 'el-icon-location',
      children: [{
        id: 11,
        authName: '表格页面',
        path: 'table',
        rights: ['view', 'edit', 'add', 'delete']
      }, {
        id: 12,
        authName: '素材页面',
        path: 'image',
        rights: ['view']
      }]
    }]
  },
  {
    id: 2,
    username: 'admin',
    password: '123456',
    token: 'admin-token',
    rights: [
      {
        id: 1,
        authName: '导航一',
        icon: 'el-icon-location',
        children: [{
          id: 11,
          authName: '表格页面',
          path: 'table',
          rights: ['view', 'edit', 'add', 'delete']
        }, {
          id: 12,
          authName: '素材页面',
          path: 'image',
          rights: ['view', 'edit', 'add', 'delete']
        }]
      },
      {
        id: 2,
        authName: '导航二',
        icon: 'el-icon-setting',
        children: [{
          id: 21,
          authName: '权限页面',
          path: 'users',
          rights: ['view', 'edit', 'add', 'delete']
        }]
      }
    ]
  }
]

// 用户登录
Mock.mock('/login', 'post', option => {
  const { username, password } = JSON.parse(option.body)
  const user = users.find(item => {
    return item.username === username && item.password === password
  })
  return user
})
