<template>
  <div class="page-header">
    <div class="app-back">
      <slot name="action">
        <div @click="_onBack" class="app-back-wrap" v-show="showBack">
          <i class="el-icon-back"></i>
        </div>
      </slot>
    </div>
    <div class="app-content">{{title}}</div>
    <div class="app-action">
      <slot name="action">
        <div class="app-back-wrap" v-show="actions.length">
          <el-dropdown :hide-on-click="true" :show-timeout="100" @command="_emitCommand" trigger="click">
            <span class="el-dropdown-link">
              <i class="el-icon-more fs20 c-white pointer" slot="reference"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                :command="ac.command"
                :disabled="ac.disabled"
                :divided="ac.divided"
                :icon="ac.icon"
                :key="ac.id"
                class="w100"
                v-for="ac in actions"
              >{{ac.label}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </slot>
    </div>
  </div>
</template>
<script>
import { Dropdown, DropdownMenu, DropdownItem } from 'element-ui'
export default {
  name: 'AppPageHeader',
  components: {
    [Dropdown.name]: Dropdown,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem
  },
  props: {
    title: {
      type: String,
      default: 'Page Header'
    },
    showBack: {
      type: Boolean,
      default: true
    },
    showAction: {
      type: Boolean,
      default: true
    },
    actions: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  methods: {
    _onBack() {
      this.$emit('back')
    },
    _emitCommand(cmd) {
      this.$emit('command', cmd)
    }
  }
}
</script>
<style lang="scss" scoped>
.page-header {
  opacity: 0.6;
  padding: 0;
  background: linear-gradient(90deg, pink, $--color-primary, $--color-warning);
  height: 60px;
  width: 100%;
  display: flex;
  .app-content {
    text-align: center;
    cursor: pointer;
    color: #fff;
    line-height: 60px;
    transition: color 0.3s ease-in-out;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex: 1;
    font-size: 18px;
    &:hover {
      color: pink;
    }
  }
  .app-back,
  .app-action {
    line-height: 60px;
    height: 60px;
    font-size: 26px;
    color: #fff;
    width: 60px;
    text-align: center;
    cursor: pointer;
    float: left;
  }
  .app-action {
    float: right;
  }
}
</style>