<template>

 <div  class="popup-content2">
   <span>{{pValue.name}}</span>
   <span>{{pValue.type}}</span>
 </div> 
  
</template>


<script>
export default {
  components: {
   
  },
  props: {
    pValue: Object
  },
  setup() {
  
  }
}
</script>
<style>
.popup-content2{
    background-color:white;
}
</style>