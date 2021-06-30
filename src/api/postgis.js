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