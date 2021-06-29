import {Feature} from 'ol';
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import {Point} from 'ol/geom';
import { Style,Icon} from 'ol/style'//Circle as CircleStyle, Fill,

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
    // style: function(){
    //   return new Style({
    //           image: new CircleStyle({
    //             radius: 5,
    //             fill: new Fill({color: 'blue'}),
    //           })})
    // }
    style:new Style({
      image: new Icon({
        src:require('@/assets/16.png')
      })

     })
  })
  window.$olMap.addLayer(featurelayer2)
}



