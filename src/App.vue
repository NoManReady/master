<template>
  <el-container class="app-container">
    <div class="app-bg"></div>
    <el-header class="app-header" v-show="$store.getters.showHeader">
      <div @click="_onHome" class="center">{{title}}</div>
    </el-header>
    <el-main class="app-main">
      <router-view class="app-view"></router-view>
    </el-main>
  </el-container>
</template>
<script>
import { Header, Main, Container } from 'element-ui'
export default {
  name: 'master-app',
  components: {
    [Header.name]: Header,
    [Main.name]: Main,
    [Container.name]: Container
  },
  data() {
    return {
      title: '笨鸟还不会飞🐦'
    }
  },
  methods: {
    _onHome() {
      if (this.$route.name !== 'Home') this.$router.push({ name: 'Home' })
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  .app-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(~@/assets/bg.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transform: scale(1.5);
    animation: scale 30s infinite;
    z-index: -1;
    opacity: 0.8;
  }
  @keyframes scale {
    0% {
      transform: scale(1) translate(0%, 0%);
    }
    20% {
      transform: scale(1.5) translate(-10%, -10%);
    }
    20% {
      transform: scale(1.5) translate(-10%, 0%);
    }
    40% {
      transform: scale(1.5) translate(0%, 0%);
    }
    60% {
      transform: scale(1.5) translate(10%, 10%);
    }
    80% {
      transform: scale(1.5) translate(0%, 10%);
    }
    100% {
      transform: scale(1) translate(0%, 0%);
    }
  }
  .app-header {
    display: flex;
    flex-direction: row;
    opacity: 0.6;
    background: linear-gradient(
      90deg,
      pink,
      $--color-primary,
      $--color-warning
    );
    .center {
      flex: 1;
      text-align: center;
      cursor: pointer;
      color: #fff;
      line-height: 60px;
      transition: color 0.3s ease-in-out;
      &:hover {
        color: pink;
      }
    }
  }
  .app-main {
    padding: 0;
    position: relative;
    display: flex;
    .app-view {
      flex: 1;
    }
  }
}
</style>
