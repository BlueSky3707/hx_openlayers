import {Feature} from 'ol';
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import {Point} from 'ol/geom';
import { Style,Icon} from 'ol/style'//Circle as CircleStyle, Fill,
import * as postgis from '../api/postgis'
import * as baselayer from '../mapUtils/baselayer'
export  const loadLayer=()=>{
  let featurelayer=new VectorLayer({
    id:"aa",
    source: new VectorSource({
      features: [new Feature( {atr: {name:"dsd",type:1},id:"aa",geometry: new Point([108.98407938526289, 35.65879524975873])}),
                 new Feature( {atr: {name:"gfh",type:2},id:"aa",geometry: new Point([109.28407938526289, 35.65879524975873])}),
                 new Feature( {atr: {name:"sfr",type:3},id:"aa",geometry: new Point([109.08407938526289, 35.95879524975873])}),
                 new Feature( {atr: {name:"dgtr",type:4},id:"aa",geometry: new Point([108.28407938526289, 35.65879524975873])})
               ]  
    }),
    style:new Style({
       image: new Icon({
         src:require('@/assets/15.png')
       })

      })

  })
  window.$olMap.addLayer(featurelayer)
  let featurelayer2=new VectorLayer({
    id:"bb",
    source: new VectorSource({
      features: [new Feature( {atr: {name:"规划",type:1},id:"bb",geometry: new Point([108.98407938526289, 36.65879524975873])}),
                 new Feature( {atr: {name:"的风格",type:2},id:"bb",geometry: new Point([109.28407938526289, 36.65879524975873])}),
                 new Feature( {atr: {name:"的",type:3},id:"bb",geometry: new Point([109.08407938526289, 36.95879524975873])}),
                 new Feature( {atr: {name:"给",type:4},id:"bb",geometry: new Point([108.28407938526289, 36.65879524975873])})
               ]  
    }),
    style:new Style({
      image: new Icon({
        src:require('@/assets/16.png')
      })

     })
  })
  window.$olMap.addLayer(featurelayer2)
}
// 矢量创建图层
const createVectLayerByFeatures=(layerid,img,datas)=>{
      var features=[]
      datas.forEach(item => {
        var geo=JSON.parse(item.geoJson);
        features.push(new Feature( {atr: item.attributes ,id:layerid,geometry: new Point(geo.coordinates)})) 
      }); 
      let featurelayer=new VectorLayer({
        id:layerid,
        source: new VectorSource({
          features:features
        }),
        style:new Style({
            image: new Icon({
              src:img
            })
        })
      })
    window.$olMap.addLayer(featurelayer)
}
//图层查询
export  const addLayerBySearch=(param,layerid,img)=>{
   param={layerName:"countypt_sx",isReturnGeometry:true,
   spatialRel:"INTERSECTS",
   spatialFilter:'MULTIPOLYGON(((108.2 34.3,110.2 34.3,110.2 37.3,108.2 37.3,108.2 34.3)))'}
   layerid="cc"
   img=require('@/assets/16.png')
  baselayer.reMoveLayerById(layerid)
  postgis.search(param).then(res => {
    if(res.data.data.features&&res.data.data.features.length>0){
      createVectLayerByFeatures(layerid,img,res.data.data.features)
    }
 })
}
//图层缓冲区过滤查询
export  const addLayerByBufferSearch=(param,layerid,img)=>{
   param={layerName:"countypt_sx",buffDis:20000,isReturnGeometry:true,spatialFilter:'POINT(108.930671102 34.341838499)'}
   layerid="cc"
   img=require('@/assets/16.png')
  baselayer.reMoveLayerById(layerid)
  postgis.bufferSearch(param).then(res => {
    if(res.data.data.features&&res.data.data.features.length>0){
      createVectLayerByFeatures(layerid,img,res.data.data.features)
    }
 })
}
//图层行政区过滤查询
export  const addLayerByNameOrCodeSearch=(param,layerid,img)=>{
   param={layerName:"countypt_sx",cityLayerName:"city",isReturnGeometry:true,cityname:"name='延安市'"}
   layerid="cc"
   img=require('@/assets/16.png')
  baselayer.reMoveLayerById(layerid)
  postgis.getDataByNameOrCode(param).then(res => {
    if(res.data.data.features&&res.data.data.features.length>0){
      createVectLayerByFeatures(layerid,img,res.data.data.features)
    }
 })
}

