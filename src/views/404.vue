<template>
  <div class="page-error">
    <div class="error-inner">
      <i class="el-icon-warning"></i>
      <p class="error-msg">主人，您的页面走丢了...</p>
      <pre class="err-text">{{error}}</pre>
    </div>
  </div>
</template>
<script>
export default {
  name: 'err404',
  title: '404页面',
  props: ['error']
}
</script>