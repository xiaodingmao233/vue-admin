<template>
  <el-menu
    default-active="/"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#304156"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
    :collapse-transition="false"
    router
  >
    <!-- 侧边栏logo -->
    <div class="logo-aside"></div>
    <!-- 还没想如何让非动态路由循环展现 先将首页路由在这里写死 -->
    <el-menu-item index="/">
      <i style="padding-right: 10px" class="el-icon-document"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <!-- 一级菜单 -->
    <el-submenu
      :index="item.id + ''"
      v-for="item in menulist"
      :key="item.index"
    >
      <!-- 一级菜单的模板区域 -->
      <template slot="title">
        <!-- 图标 -->
        <i :class="['iconfont', item.icon]"></i>
        <!-- 文本 -->
        <span>{{ item.authName }}</span>
      </template>
      <!-- 二级菜单 -->
      <el-menu-item
        :index="'/' + subItem.path"
        v-for="subItem in item.children"
        :key="subItem.index"
        @click="saveNavState('/' + subItem.path)"
      >
        <template slot="title">
          <!-- 图标 -->
          <i class="el-icon-menu"></i>
          <!-- 文本 -->
          <span>{{ subItem.authName }}</span>
        </template>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AppAside',
  components: {},
  props: ['is-collapse'],
  data () {
    return {
      // 左侧菜单数据
      menulist: []
    }
  },
  computed: {
    ...mapState(['rightList']) // 映射
  },
  watch: {},
  created () {
    // 初始化menulist菜单栏的数据
    this.menulist = this.rightList
  },
  mounted () { },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    saveNavState () {}
  }
}
</script>

<style scoped lang="less">
.logo-aside {
  width: 160px;
  height: 57px;
  margin: 10px 0 0 12px;
  padding-right: 40px;
  background: url(./logo.png) no-repeat;
}
.iconfont {
  padding: 0 20px 0 5px;
}
</style>
