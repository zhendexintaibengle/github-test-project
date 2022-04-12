<template>
  <div>
    <!-- 网页大：模块（组件）化 为解决方案 -->
    <!--  组件分两类：路由管理views  非路由components-->
    <!-- 头部 -->
    <my-header/>
    <!-- 身体 -->
    <!-- 路由占位符，根据路径切换成对应的组件 -->
    <router-view/>
    <!-- 脚部 -->
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from './components/MyFooter.vue'
import MyHeader from './components/MyHeader.vue'
  export default {
  components: { MyHeader, MyFooter },
    
  }
</script>

<style lang="scss" scoped></style>

<!-- 全局样式不加lang和scoped属性-->
<!-- css使用了图片，需要引入图片资源到assets里-->
<style src="./assets/css/base.css"></style>
<style src="./assets/css/animate.css"></style>

