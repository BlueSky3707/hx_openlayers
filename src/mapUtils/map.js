import { Map, View } from 'ol';
import TileLayer from "ol/layer/Tile"
import TileArcGISRest from 'ol/source/TileArcGISRest';
import {mapConfig} from "../mapUtils/mapConfig"
import {getLayerByid} from "../mapUtils/baselayer"
   export  const intMap=(mapid)=>{
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
 export  const loadIntLayer=()=>{
 //加載j基础底图
  let player=new TileLayer({
      source:new TileArcGISRest({
          url:mapConfig.vec
      }),
      id:"layer1"
  })
  window.$olMap.addLayer(player)

}



