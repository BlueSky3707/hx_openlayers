import { Map, View } from 'ol';
import TileLayer from "ol/layer/Tile"
import TileArcGISRest from 'ol/source/TileArcGISRest';
   export const intMap=function(mapid){
    let map = new Map({
        target: mapid,
        view: new View({
          projection: "EPSG:4326",    //使用这个坐标系
          center: [109.08, 36.4],//陝西中心點
          zoom: 7
        })
      });
  window.$olMap=map;
  loadIntLayer()
 }
 export const loadIntLayer=()=>{
 //加載j基础底图
  let player=new TileLayer({
      source:new TileArcGISRest({
          url:"http://113.140.66.226:33225/arcgis/rest/services/TDTSxBaseMap_XX/MapServer"
      })
  })
  window.$olMap.addLayer(player)
}



