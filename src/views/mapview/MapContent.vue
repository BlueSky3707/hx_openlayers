<template>
<div  id='content'> 
  <MapView></MapView>
   <MapTools></MapTools>   
   <MapPoup></MapPoup> 
  <div class="bnts" style="position: absolute;top: 0;">
      <button @click="startyd">start</button>
        <button @click="stop">stop</button>
        <button @click="goon">goon</button>
        <button @click="back">back</button>
         <button @click="clean">clean</button>
  </div>
</div>
</template>
<script>
import MapView from "../mapview/MapView"
 import MapTools from "../mapview/MapTools"
import MapPoup from "../../components/MapPoup"
import {move,stopMove,goOn,back,clean} from '../../components/PointMove'
export default {
  components: {
    MapView,
     MapTools,
    MapPoup
  },
  mounted(){

  },
  methods: {
startyd(){
    move()
},
stop(){
   stopMove()
},
goon(){
   goOn()
},
back(){
    back()
},
clean(){
    clean()
}
}
}
</script>
<style>
#content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0px;
  margin: 0px;
}
</style>