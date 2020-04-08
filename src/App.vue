<template>
  <el-container class="app-container">
    <div class="app-bg"></div>
    <el-header class="app-header">
      <app-page-header
        :actions="actions"
        :show-back="showBack"
        :title="appTitle"
        @back="_onBack"
        @command="_onCommand"
        v-show="$store.getters.showHeader"
      ></app-page-header>
    </el-header>
    <el-main class="app-main">
      <!-- <router-view class="app-view"></router-view> -->
      <transition enter-active-class="zoomIn" leave-active-class="zoomOut">
        <router-view class="animated faster app-view"></router-view>
      </transition>
    </el-main>
  </el-container>
</template>
<script>
import { Main, Container, Header } from 'element-ui'
import { mapGetters } from 'vuex'
import AppPageHeader from '@/components/PageHeader'
export default {
  name: 'master-app',
  components: {
    [AppPageHeader.name]: AppPageHeader,
    [Main.name]: Main,
    [Container.name]: Container,
    [Header.name]: Header
  },
  data() {
    return {
      actions: [
        {
          id: 1,
          label: '测试点击',
          disabled: false,
          command: { name: '我是测试点击' }
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['appTitle']),
    showBack() {
      let route = this.$route
      return route.name !== 'Home'
    }
  },
  methods: {
    _onBack() {
      this.$router.back()
    },
    _onCommand(action) {
      // console.log(action)
      alert(action.name)
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
  display: flex;
  margin: 0 -1px;
  .app-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(~@/assets/bg1.jpg);
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
    padding: 0;
  }
  .app-main {
    padding: 0;
    position: relative;
    flex: 1;
    overflow: hidden;
    .app-view {
      width: 100%;
      height: 100%;
      position: absolute;
      overflow-y: auto;
    }
  }
}
</style>
