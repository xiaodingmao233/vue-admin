// 使用Mock
const Mock = require('mockjs')
// require('./my-radom')
// const Random = Mock.Random
Mock.setup({
  timeout: '500-1000'
})

// const list = []

// for (let i = 0; i < 20; i++) {
//   list.push({
//     id: i + 1,
//     date: Random.date(),
//     name: Random.cname(),
//     address: Random.address(),
//     likes: Random.likes()
//   })
// }

// 用户信息
const users = [
  {
    id: 1,
    username: 'student',
    password: '123456',
    photo: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1405840109,4784534&fm=26&gp=0.jpg',
    token: 'student-token',
    rights: [{
      id: 1,
      authName: '导航一',
      icon: 'el-icon-location',
      children: [{
        id: 11,
        authName: '表格页面',
        path: 'table',
        rights: ['view']
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
    photo: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2364244149,3298797080&fm=26&gp=0.jpg',
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

// 表格信息
const tables = [{
  date: '2016-05-02',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1518 弄'
}, {
  date: '2016-05-04',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1517 弄'
}, {
  date: '2016-05-01',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1519 弄'
}, {
  date: '2016-05-03',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1516 弄'
}]

// 用户登录
Mock.mock('/login', 'post', option => {
  const { username, password } = JSON.parse(option.body)
  const user = users.find(item => {
    return item.username === username && item.password === password
  })
  return user
})

// 获取表格信息
Mock.mock('/tabledata', 'get', () => {
  return tables
})
