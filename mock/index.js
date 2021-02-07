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
    // photo: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2667925509,1048662418&fm=11&gp=0.jpg',
    photo: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs5.sinaimg.cn%2Forignal%2F4be6c8aa5b8e73f95d264&refer=http%3A%2F%2Fs5.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615291070&t=23277346c09822d8a7ddd6073a73827f',
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
    // photo: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2364244149,3298797080&fm=26&gp=0.jpg',
    photo: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F08.imgmini.eastday.com%2Fmobile%2F20170705%2F20170705051804_7e48d05203f44a7d30518871a8219aaf_2.gif&refer=http%3A%2F%2F08.imgmini.eastday.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615291146&t=47f921c10c776fd59e2bd21dd7b03088',
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
  const token = sessionStorage.getItem('token')
  if (token === 'admin-token' || token === 'student-token') {
    return tables
  } else {
    alert('恶意篡改token')
    return null
  }
})
