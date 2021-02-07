import axios from 'axios'

const request = axios.create()

// request.defaults.baseURL = 'http://127.0.0.1:7001' // 注释掉之后调的接口将是Mock数据

// request 拦截器

export default request
