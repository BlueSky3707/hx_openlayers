import { Map, View} from 'ol';
import TileLayer from "ol/layer/Tile"
import TileArcGISRest from 'ol/source/TileArcGISRest';
import {mapConfig} from "../mapUtils/mapConfig"
import VectorSource from 'ol/source/Vector'
import XYZ from 'ol/source/XYZ'
// import WMTS from 'ol/source/WMTS'
import {ScaleLine,ZoomToExtent} from 'ol/control';
import VectorLayer from 'ol/layer/Vector'
import {Circle as CircleStyle, Fill, Style,Stroke} from 'ol/style'
import { defaults as defaultControls} from 'ol/control';
export  const intMap=(mapid)=>{
  let map = new Map({
    target: mapid,
    view: new View({
      projection: "EPSG:4326",    //使用这个坐标系
       center: [109.08, 35.6],//陝西中心點
      // center: [1.2083385693702523E7,  4311609.339217023],//陝西中心點
      zoom: 7.3,
      minZoom:7.3,
      maxZoom:18
    }),
    controls:defaultControls({
      attribution: false,
      zoom: true,
      rotate: true})
  });
  map.addControl(new ScaleLine());
  map.addControl(new ZoomToExtent({extent:[108.40180097765179, 31.7315884712111, 112.84578930830199, 40.09306852305697],
    label:""}));
  window.$olMap=map;
  
  loadIntLayer()//自定义底图
 //loadIntGdLayer()//高德底图
}
//自定义底图
export  const loadIntLayer=()=>{
  //加載电子底图
  let dzdtlayer=new TileLayer({
    source:new TileArcGISRest({
      url:mapConfig.dtVectorhx
    }),
    id:"dzdt",
    visible:true
  })
  window.$olMap.addLayer(dzdtlayer)

  //加載影像底图
  let yxdtlayer=new TileLayer({
    source:new TileArcGISRest({
      url:mapConfig.imgVectorhx
    }),
    id:"yxdt",
    visible:false
  })
  window.$olMap.addLayer(yxdtlayer)

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
//底图
export const loadIntTestLayer=()=>{
  var ggdzlayer = new TileLayer({
    id:"dzdt",
    visible:true,
    source: new XYZ({
      url: 'https://t0.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=577a653bbf02141362a1895e19fe5b04'
    })
  });
var ggdzlayer2 = new TileLayer({
    id:"dzdt",
    visible:true,
    source: new XYZ({
      url: 'https://t0.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=577a653bbf02141362a1895e19fe5b04'
    })
  });
  window.$olMap.addLayer(ggdzlayer) 
window.$olMap.addLayer(ggdzlayer2) 
}
 

//高德底图
export const loadIntGdLayer=()=>{
  var gddzlayer = new TileLayer({
    id:"dzdt",
    visible:true,
    source: new XYZ({
      url: 'http://wprd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}'
     // url: 'http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}'
    //腾讯矢量  url: 'http://rt0.map.gtimg.com/realtimerender?z={z}&x={x}&y={-y}&type=vector&style=0'
    })
  });
  var gdyxlayer = new TileLayer({
    id:"yxdt",
    visible:false,
    source: new XYZ({
      url:'https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}'
      //url: 'http://webst01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=6&x={x}&y={y}&z={z}'
    })
  });
  var gdyxbzlayer = new TileLayer({
    id:"yxdtbz",
    visible:false,
    source: new XYZ({
        url: 'http://webst01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
     /// url:'https://wprd01.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=2&style=8&ltype=11'
    })
  });
  window.$olMap.addLayer(gddzlayer) 
  window.$olMap.addLayer(gdyxlayer) 
  window.$olMap.addLayer(gdyxbzlayer) 
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



