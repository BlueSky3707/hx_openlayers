<template>
<div  id='content'> 
  <MapView></MapView>
  <MapTools></MapTools>  
</div>
</template>
<script>
import MapView from "../mapview/MapView"
import MapTools from "../mapview/MapTools"
export default {
  components: {
    MapView,
    MapTools
  },
  mounted(){

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