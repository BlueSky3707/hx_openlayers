<template>

 <div id="popup" class="ol-popup">
      <a href="#" id="popup-closer" class="ol-popup-closer"></a>
        <poup1 v-if="poupindex=='aa'" :pValue="pValue" > </poup1>
        <poup2 v-if="poupindex=='bb'" :pValue="pValue"> </poup2>
  </div> 
  
</template>


<script>


 import Overlay from "ol/Overlay"
import poup1 from "./components/poup1.vue"
import poup2 from "./components/poup2.vue"
export default {
   components: {
poup1,poup2
  },
 
 
  data(){
    return{
      poupindex:"",
      pValue: {}
    }
   
  },
mounted(){
      // setTimeout(() => {
     this.addPopup()
  // }, 2000);
},
methods: {
  addPopup() {
    var that=this
       let container = document.getElementById('popup');
     //   let content = document.getElementById('popup-content');
        let closer = document.getElementById('popup-closer');	
      var overlay = new Overlay({
        element: container,
        autoPan: true,
        autoPanAnimation: {
          duration: 250,
        }
      });
       overlay.setPosition(undefined);
     window.$olMap.addOverlay(overlay)
   
      closer.onclick = function () {
        overlay.setPosition(undefined);
        closer.blur();
         that.poupindex=""
        return false;
      }      
      window.$olMap.on('click', function (evt) {
         var feature =  window.$olMap.getFeaturesAtPixel(evt.pixel)[0];
          if(feature&&feature.get("atr")&&feature.get("id")){
             that.pValue=feature.get("atr")
             that.poupindex=feature.get("id")
              var coordinate = evt.coordinate;
              window.$olMap.getView().setCenter(coordinate)
              overlay.setPosition(coordinate);
          }else{
             that.poupindex=""
             overlay.setPosition(null);
          }
      })  
    }
            
   }

  }
</script>

  <style type="text/css">
	
 .ol-popup {
        position: absolute;
        background-color: white;
        box-shadow: 0 1px 4px rgba(0,0,0,0.2);
        padding: 15px;
        border-radius: 10px;
        border: 1px solid #cccccc;
        bottom: 12px;
        left: -50px;
        min-width: 280px;
      }
      .ol-popup:after, .ol-popup:before {
        top: 100%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        
      }
      .ol-popup:after {
        border-top-color: white;
        border-width: 10px;
        left: 48px;
        margin-left: -10px;
        display: none;
      }
      .ol-popup:before {
        border-top-color: #cccccc;
        border-width: 11px;
        left: 48px;
        margin-left: -11px;
        display: none;
      }
      .ol-popup-closer {
        text-decoration: none;
        position: absolute;
        top: 2px;
        right: 8px;
      }
      .ol-popup-closer:after {
        content: "✖";
      }
      #poup-table{
    margin-top: 14px;
      }
      #poup-title{
        position: absolute;
          top: -1px;

          left: 16px;
          line-height: 35px;
          min-width: 233px;
      }
    </style>

