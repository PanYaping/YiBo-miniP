# 小程序云开发
## 小程序入门Demo
### 1、添加vant
```
 => $ npm i vant-weapp -S --production  (或者yarn)

 => 开发者工具中： Tools => Build npm

 => build成功之后会生成 miniprogram_npm 文件 

 => 之后即可引用vant组件，example：
      cloud/cloud.json文件中
      {
        "usingComponents": {
          "van-button": "../../miniprogram_npm/vant-weapp/button/index"
        }
      }
```
