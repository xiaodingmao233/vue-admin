<template>
  <el-menu
    default-active="/"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#001D35"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
    :collapse-transition="false"
    router
    ><div class="logo-aside"></div>
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
export default {
  name: 'AppAside',
  components: {},
  props: ['is-collapse'],
  data () {
    return {
      menulist: [
        {
          id: 1,
          authName: '一级菜单',
          icon: 'icon-menu',
          children: [{
            id: 11,
            authName: '一级项目1',
            path: '/',
            rights: ['view', 'edit', 'add', 'delete']
          }, {
            id: 11,
            authName: '一级项目2',
            path: '/',
            rights: ['view', 'edit', 'add', 'delete']
          }]
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    saveNavState () {
      console.log('aa')
    }
  }
}
</script>

<style scoped lang="less">
.logo-aside {
  width: 160px;
  height: 57px;
  margin: 10px 0 0 12px;
  padding-right: 40px;
  background: url(./logo_admin.png) no-repeat;
}
.iconfont {
  padding: 0 20px 0 5px;
}
</style>
