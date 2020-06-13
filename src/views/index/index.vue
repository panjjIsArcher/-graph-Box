<template>
    <!-- 左边的弹窗 -->
    <div class="index">
      <div class="slider">
        <Slider style="width:100%;"/>
      </div> 
      <div class="view">
        <router-view />
      </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.index{
    display: flex;
    justify-content: space-around;
    .slider{
      flex-grow:1
    }
    .view{
      flex-grow:4
    }
}
</style>