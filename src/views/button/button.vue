<template>
  <div class="button-box">
    <div>
      <TransformButton :size="size" :message="message" :bgColor="color"/>
      <div class="guide-text">
          使用说明: {{guideText}}
      </div>
    </div>
    <!-- 尺寸 -->
    <el-row class="forms">
      <el-col :span="6" class="label">尺寸：</el-col>
      <el-col :span="18" class="form">
          <el-radio-group v-model="radio" @change="changeSize(radio)">
             <el-radio v-for="item in sizeArr" :key="item.label" :label="item.radio" border>{{item.label}}</el-radio>
          </el-radio-group>
      </el-col>
    </el-row>
    <!-- 背景颜色 -->
     <el-row class="forms">
      <el-col :span="6" class="label">颜色：</el-col>
      <el-col :span="18" class="form">
        <el-color-picker v-model="color" @change="changeColor" show-alpha></el-color-picker>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  
    data(){
      let size = "middle",
          color = null,
          message= "默认按钮",
          guideText = `<TransformButton size="${ size } bgColor=${color}" message="${message}"/>`;
      return {
        guideText, //使用说明
        size,
        color,
        message,
        radio:2,
        sizeArr:[
          {label:"small",radio:1},
          {label:"middle",radio:2},
          {label:"large",radio:3},
        ]
      }
    },
    methods:{
      changeGuideText(){
          this.guideText = `<TransformButton size="${this.size}" bgColor="${this.color}" message="${this.message}"/>`
      },
      changeSize(radio){
      
        this.size = radio == 1?"small":
                          radio == 2?"middle":"large";
        this.changeGuideText()
      },
      changeColor(color){
          this.color = color;
          this.changeGuideText()
      } 
    }
}
</script>
<style lang="less" scoped>
.button-box{
  text-align: center;
  .forms{
     background-color: #fafafa;
     padding:25px 0;
  }
  >div{
    width:100%;
  }
  >div:first-child{
    min-height: 107px;
    .guide-text{
      margin-top: 25px;
    }
  }
  >div:nth-child(2){
    display: flex;
    justify-content:space-around;
    padding: 20px 0;
  }

  .label{
    text-align: right;
    line-height: 35px;
    padding-right: 20px;
  }
  .form{
    text-align: left;
  }
}
</style>