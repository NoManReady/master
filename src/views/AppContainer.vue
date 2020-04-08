<template>
  <div class="app-region">
    <app-loading v-show="$root.loading" />
    <div class="app-wrap" v-html="$root.content" v-show="!$root.loading"></div>
  </div>
</template>
<script>
import apps from '@/apps'
import { mapMutations } from 'vuex'
import { SET_APP_TITLE } from '@/store/modules/app'
import Loading from '@/components/Loading'
export default {
  name: 'app-region',
  components: {
    [Loading.name]: Loading
  },
  props: ['appName'],
  data() {
    return {}
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
  watch: {
    title: {
      handler() {
        this.setAppTitle(this.title)
      },
      immediate: true
    }
  },
  methods: {
    ...mapMutations('app', { setAppTitle: SET_APP_TITLE })
  }
}
</script>
<style lang="scss" scoped>
.app-region {
  background: #fff;
}
</style>