<template>
  <div id="mapid"></div>
</template>

<script lang="js">
import "ol/ol.css";
import  {intMap} from "../../mapUtils/map";
export default {
  mounted(){
    intMap("mapid");
  }
}
</script>

<style>
#mapid{
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
    background-color: #deecf9;
}
</style>