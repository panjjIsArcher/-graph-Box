<template>
  <div class="fold">
      <div v-for="(item,index) in titles" :key="item.title"  @click="go(item,index)">
        <div class="item fold-item" >{{item.title}}</div>
        <!-- 二级子菜单 -->
        <div v-if="item.children && item.children.length"
             style="position: relative;z-index: 100">
          <div v-for="(i,j) in item.children" 
              :key="i.title" 
              class="son-item item" 
              :class="{'folddown':ind == index,'foldup':ind != index}"
              @click="go(i,j)">
              {{i.title}}
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import "@/assets/css/animation.less";
export default {
    data(){
        return {
          ind:0
        }
    },
    props:{
      titles:{ type: [ Array, Object ], default:() => {} }
    },
    methods:{
      go(item,ind){
        this.ind = ind;
        if(item.path){
          //只有1级路由
          console.log( item.path );
          console.log( item );
          if(this.$route.name != item.path){
            //当前路由不跳转
            this.$router.push({ name: item.path })
          }
        }else{
          //有二级路由
        }
      }
    }
}
</script>
<style lang="less" scoped>
.fold{
  background-color: rgb(25, 121, 231);
  text-align: center;
  >div{
    position: relative;
  }
  .item{
    padding:15px 0;
    position: relative;
  }
  .son-item{
    background-color: #1989fa;
    z-index: 1;
  }
  .fold-item{
    z-index: 1000;
  }
  .folddown{
    // animation-name: folddown;
    animation-duration: 12s;
  }
  .foldup{
    // animation-name:foldup;
    animation-duration: 12s;
  }
}
</style>