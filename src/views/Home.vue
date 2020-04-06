<template>
  <div class="home">
    <el-button @click.native="_onOpenIt" circle class="open-it" type="success">Open It.</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    _onOpenIt() {
      this.$router.push({ name: 'Board' })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  .open-it {
    width: 150px;
    height: 150px;
    background: pink;
    border-color: darken(pink, 5%);
    box-shadow: 0 0 10px darken(pink, 5%);
    opacity: 0.8;
    &:hover {
      width: 200px;
      height: 200px;
      opacity: 1;
      border-color: darken(pink, 10%);
      box-shadow: 0 0 10px darken(pink, 10%);
    }
  }
}
</style>
