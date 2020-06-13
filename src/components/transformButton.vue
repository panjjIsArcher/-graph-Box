<template>
  <button 
    class="btn" 
    :class="selectSize(size)"
    :style="{'backgroundColor':bgColor }"
    >
    {{message}}
  </button>
</template>
<script>
import "@/assets/css/transformButton.less"
export default {
  props:{
    message:{ type: String , default:"默认按钮" },
    size:{ type: String , default:"middle" },
    bgColor:{type: String , default:"rgba(250, 250, 250, 0.6)"}
  },
  methods:{
    selectSize(size){
      if(size == "small"){
        return "small"
      }else if((size == "large")){
        return "large"
      }else{
        return "middle"
      }
    }
  }
}
</script>
