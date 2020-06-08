<template>
  <!-- 侧边的弹窗 -->
  <div class="slider">
      <div class="title">
        <h3>
          组件
        </h3>
      </div>
      <div>
        
      </div>
      <router-view/>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
 @slider-title-bg-color:"rgb(25 ,25 ,112)";
.slider{
  height: 100%;
  width:20%;
  
  background-color: rgb(25 ,25 ,112);
  color:#fff;
  .title{
    h3{
      margin: 0;
      padding:15px 0;
    }
  }
}
</style>