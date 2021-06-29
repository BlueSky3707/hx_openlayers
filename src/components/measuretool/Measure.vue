<template>
<div>
  <div class="tool"> 
      <img src="../../assets/tool/bag_0.png" @click="Draw('Point')" />
      <img src="../../assets/tool/bag_1.png" @click="Draw('LineString')" />
      <img src="../../assets/tool/bag_2.png" @click="Draw('Polygon')" />
      <img src="../../assets/tool/bag_3.png"  @click="Draw('del')"/>
  </div>
  <div class="item item1" @click="changeGisShow">
      <img v-if="gisShow" src="../../assets/tool/gis2.png" alt="" srcset="" style="width:37px" />
      <img v-else src="../../assets/tool/gis1.png" alt="" srcset="" style="width:37px" />
  </div>
  </div>
</template>
<script>
import {measure}  from "./Measure"
 import {showLayerById,hiddenLayerById}  from "../../mapUtils/baselayer"

export default {
 
mounted(){
 
},
data(){
  return{gisShow:true}
},
methods: {
   changeGisShow (){
      this.gisShow = !this.gisShow
      if (this.gisShow) {
        this.vectorClick()
      } else {
        this.imageClick()
      }
    },
    imageClick ()  {
      showLayerById("yxdt")
      hiddenLayerById("dzdt")
     
    },
     vectorClick  ()  {
        showLayerById("dzdt")
        hiddenLayerById("yxdt")
    
    },
  Draw(type) {
    measure(window.$olMap,type)
  }
  }
}
</script>

<style>

.tool{
  
    position: absolute;
    top: 75px;
    right: 0;
    width: 180px;
    background-color: #2690ec;
    height: 31px;

}
.tool img{
      margin: 0 10px;
}
.item1{
      position: absolute;
    top: 37px;
    right: 0;
}
</style>