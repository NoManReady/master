<template>
  <div class="page-error">
    <div class="error-inner">
      <i class="el-icon-warning"></i>
      <p class="error-msg">主人，您的页面走丢了...</p>
      <pre class="err-text">{{error}}</pre>
      <el-link :href="href" class="fs14" type="primary" v-if="href">独立访问</el-link>
    </div>
  </div>
</template>
<script>
import { Link } from 'element-ui'
export default {
  name: 'err404',
  components: {
    [Link.name]: Link
  },
  props: ['error', 'href']
}
</script>