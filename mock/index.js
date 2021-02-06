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
    token: 'abcdefghijklmnopqrstuvwxyz',
    rights: [{
      id: 1,
      authName: '一级菜单',
      icon: 'icon-menu',
      children: [{
        id: 11,
        authName: '一级项目1',
        path: '/',
        rights: ['view', 'edit', 'add', 'delete']
      }, {
        id: 11,
        authName: '一级项目2',
        path: '/',
        rights: ['view']
      }]
    }]
  },
  {
    id: 2,
    username: 'admin',
    password: '123456',
    token: 'abcdefghijklmnopqrstuvwxyz'.split('').reverse().join(''),
    rights: [
      {
        id: 1,
        authName: '一级菜单',
        icon: 'icon-menu',
        children: [{
          id: 11,
          authName: '一级项目1',
          path: '/',
          rights: ['view', 'edit', 'add', 'delete']
        }, {
          id: 11,
          authName: '一级项目2',
          path: '/',
          rights: ['view', 'edit', 'add', 'delete']
        }]
      },
      {
        id: 2,
        authName: '二级菜单',
        icon: 'icon-menu',
        children: [{
          id: 22,
          authName: '二级项目1',
          path: '/',
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
