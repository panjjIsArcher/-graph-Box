<template>
  <!-- 侧边的弹窗 -->
  <div class="slider">
      <div class="title">
        <h3>
          组件展示
        </h3>
      </div>
      <!-- 底部 -->
      <Fold :titles="titles"/>
  </div>
</template>
<script>
export default {
  data(){
    return {
        titles:[
          { 
            title: "图形" , 
            path:"transform",
            children:[
              {title:"子菜单1"},
              {title:"子菜单2"}
            ]
          },
          {
            title: "图形2" ,
            path:"button"
          }
        ]
      }
  }
}
</script>
<style lang="less" scoped>
.slider{
  min-height: 100%;
  width: 20%;
 background-color: rgb(25, 121, 231);
  color:#fff;
  text-align: center;
  .title{
    border-bottom: 1px solid #efefef;
    h3{
      margin: 0;
      padding:15px 0;
      font-size: 20px;
    }
  }
}
</style>