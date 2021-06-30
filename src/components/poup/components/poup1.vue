<template>

 <div  class="popup-content">
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
/* .popup-content{
    background-color: antiquewhite;
} */
</style>