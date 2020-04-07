<template>
  <div class="board">
    <div class="board-inner">
      <el-card
        :body-style="{ padding: '0px' }"
        :key="app.name"
        @click.native="_openApp(app)"
        class="app-card"
        shadow="hover"
        v-for="app in apps"
      >
        <div class="card-icon">
          <img :src="app.icon" />
        </div>
        <div class="card-content">
          <h3 class="card-tit">{{app.title}}</h3>
          <div class="card-desc">{{app.desc}}</div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import { Card } from 'element-ui'
import apps from '@/apps'
export default {
  name: 'board',
  components: {
    [Card.name]: Card
  },
  data() {
    return {
      apps
    }
  },
  methods: {
    _openApp(app) {
      this.$router.push({ name: 'AppRegion', params: { appName: app.name } })
      this.$root.loading = true
    }
  }
}
</script>
<style lang="scss" scoped>
.board {
  padding: 5px;
  .board-inner {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px 0 0 10px;
    .app-card {
      width: calc(50% - 22px);
      max-width: 300px;
      margin: 0 10px 10px 0;
      height: 200px;
      border: 1px solid #eee;
      padding: 5px 5px 0;
      cursor: pointer;
      &:hover {
        img {
          transform: scale(1.2);
        }
      }
      .card-icon {
        overflow: hidden;
        height: 140px;
        img {
          transition: all 0.2s ease-in-out;
          width: 100%;
          height: 100%;
        }
      }
      .card-content {
        height: 60px;
        padding: 5px;
      }
      .card-tit {
        margin: 0;
        font-size: 14px;
        line-height: 2;
      }
      .card-desc {
        font-size: 13px;
        color: #666;
        @include text-overflow(10);
      }
    }
  }
}
</style>
