# 依赖包的使用说明
npm install --save graphbox

如果npm下载速度较慢，

## 该依赖包含有以下部分
+ 可自由变换几何形状/颜色的几何图形组件
+ 可自由选择尺寸/颜色/圆角的按钮组件

## 按钮组件
### 1.使用方法：在需要使用的地方引入<transformButton> 
### 2.参数：
          2.1 message:按钮的字符串名称属性，如果不输入则默认是“默认按钮”，例如：
              <transformButton message="按钮" /> 
          2.2 size: 按钮有3种尺寸，如果默认为middle（中号），另外2个可选尺寸为small(小号)和large(大号)，例如：
              <transformButton size="中号" /> 
          2.3 bgColor:按钮的背景色，默认为rgba(250,250,250,.6),目前可以接受的rgba/rgb2种模式，例如：
               <transformButton bgColor="rgba(95, 36, 36, 1)" /> 
