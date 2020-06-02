module.exports = {
  assetsDir: "", 
  lintOnSave:false,
  crossorigin:"use-credentials",
  configureWebpack:{
      module:{
        rules:[ 
          {  //打包less
            test: /\.less$/, 
            use:[ { loader: "less-loader" } ] 
          },
          { //打包css
            test: /\.css$/, 
            use:[ 
              { loader: "style-loader" },
              { loader: "css-loader" }
            ]
          }, 
          { //打包js
            test: /\.(js|jsx)$/, 
            exclude: /(node_modules|bower_components)/, //不转译node_module中的包
            use:[ { loader: "babel-loader" } ]
          } 
        ]
      }
  }
}