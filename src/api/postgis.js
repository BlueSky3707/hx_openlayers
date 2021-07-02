import axios from 'axios'
// *表名layerName
// *isReturnGeometry默认true
//spatialFilter空间过滤数据wkt
//spatialRel空间位置关系INTERSECTS,CONTAINS,DISJOINT,TOUCHES,CROSSES,WITHIN,OVERLAPS
//filter属性过滤条件
// outFields 属性字段，默认全部
// orderByFields 排序语句
// current 当前页，默认1
// limit每页记录数，默认100
export const search = (params) => {
    return axios({
      url: '/api/rest/search',
      params 
    })
}
//*表名layerName 
//*isReturnGeometry默认true
//缓冲距离buffDis,默认0
//spatialFilter要缓冲的空间数据wkt，为空则显示全部
//filter属性过滤条件
// outFields 属性字段，默认全部
// orderByFields 排序语句
// current 当前页，默认1
// limit每页记录数，默认100
export const bufferSearch = (params) => {
    return axios({
      url: '/api/rest/bufferSearch',
      params 
    })
}
//*表名layerName
//*行政区表cityLayerName 
//*isReturnGeometry默认true
//行政区cityname名称条件语句 name='延安市'
//或citycode编码条件语句citycode='600061000'
//where属性过滤条件
// outFields 属性字段，默认全部
// orderByFields 排序语句
// current 当前页，默认1
// limit每页记录数，默认100
export const getDataByNameOrCode = (params) => {
    return axios({
      url: '/api/rest/getDataByNameOrCode',
      params 
    })
}
//批量新增
//例[{tablename:"test",items:[{name:"name",value:"是违法"},{name:"descrape",value:"规划"},{name:"geom",value:'POINT(108.58 35.65)'}]}]
export const insertData = (params) => {
  return axios({
    method: 'post',
    url: '/api/rest/insertData',
    data:params
  })
}
//批量更新
//例[{tablename:"test",items:[{name:"name",value:"是"},{name:"descrape",value:"规"},{name:"geom",value:'POINT(108.54 35.29)'}],
//  wheres:[{name:"gid",value:2}]} ]
export const updateData = (params) => {
  return axios({
    method: 'post',
    url: '/api/rest/updateData',
    data:params
  })
}
// 批量删除
// 例{tablename:"test",filedid:"gid", list:[2,6]}
export const deleteData = (params) => {
  return axios({
    method: 'post',
    url: '/api/rest/deleteData',
    data:params
  })
}