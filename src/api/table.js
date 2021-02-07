import request from '@/utils/request'

// 表格数据获取
export const getTableData = () => {
  return request({
    url: '/tabledata',
    method: 'GET'
  })
}
