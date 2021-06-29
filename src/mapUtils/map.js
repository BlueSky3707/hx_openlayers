import { Map, View} from 'ol';
import TileLayer from "ol/layer/Tile"
import TileArcGISRest from 'ol/source/TileArcGISRest';
import {mapConfig} from "../mapUtils/mapConfig"

import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import {Circle as CircleStyle, Fill, Style,Stroke} from 'ol/style'
import { defaults as defaultControls} from 'ol/control';
export  const intMap=(mapid)=>{
  let map = new Map({
    target: mapid,
    view: new View({
      projection: "EPSG:4326",    //使用这个坐标系
      center: [109.08, 36.4],//陝西中心點
      zoom: 7
    }),
    controls:defaultControls({
      attribution: false,
      zoom: false,
      rotate: false})
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
    id:"dzdt",
    visible:true
  })
  window.$olMap.addLayer(player)
  //工具图层
  let drawLayer = new VectorLayer({
    key:"draw",
    zIndex:1000,
    source: new VectorSource(),
    style: new Style({
      fill: new Fill({
        color: [238,118, 0,0.3]
      }),
      stroke: new Stroke({
        color:  '#ff8000',
        width: 3
      }),
      image: new CircleStyle({
        radius: 5,
        stroke: new Stroke({
          color: 'white',
                width: 1
        }),
        fill: new Fill({
          color: 'red'
        })
      })
    })

    });
    window.$olMap.addLayer(drawLayer) 
 
 
}



