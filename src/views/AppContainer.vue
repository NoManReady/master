<template>
  <div class="app-region">
    <el-page-header :content="title" @back="_onBack" class="page-header"></el-page-header>
    <div class="app-wrap" v-html="$root.content"></div>
  </div>
</template>
<script>
import { PageHeader } from 'element-ui'
import apps from '@/apps'
import { mapMutations } from 'vuex'
import { SET_SHOW_HEADER } from '@/store/modules/app'
export default {
  name: 'app-region',
  components: {
    [PageHeader.name]: PageHeader
  },
  props: ['appName'],
  data() {
    return {}
  },
  watch: {
    $route: {
      handler(v) {
        this.setHeaderShow(!v.params.appName)
      },
      immediate: true
    }
  },
  created() {
    this.setHeaderShow(false)
  },
  beforeDestroy() {
    this.setHeaderShow(true)
  },
  computed: {
    title() {
      let app = apps.find(app => app.name === this.appName)
      if (app) {
        return app.title
      }
      return this.appName
    }
  },
  methods: {
    ...mapMutations('app', { setHeaderShow: SET_SHOW_HEADER }),
    _onBack() {
      this.$router.push({ name: 'Board' })
      // this.$root.content = undefined
    }
  }
}
</script>
<style lang="scss" scoped>
.app-region {
  background: #fff;
  .page-header {
    height: 60px;
    line-height: 60px;
    box-shadow: 0 0 5px gray;
  }
}
</style>