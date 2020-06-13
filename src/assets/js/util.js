import Vue from 'vue';
const requireComponent = require.context(
  // 其组件目录的相对路径
  "@/components",
  // 是否查询子目录
  true,
  //所有js文化和vue文件
  /\.(vue|js)$/
)
requireComponent.keys().forEach(fileName =>{
  const componentConfig = requireComponent(fileName);
  // 获取组件的 PascalCase 命名
  const componentName = _.upperFirst(
    _.camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )
  console.log( componentName );
  Vue.component( componentName, componentConfig.default || componentConfig );
})