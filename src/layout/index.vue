<template>
  <el-container class="layout-container">
    <el-aside class="aside" width="auto">
      <app-aside class="aside-menu" :is-collapse="isCollapse"></app-aside>
    </el-aside>
    <el-container>
      <el-header class="header">
        <div>
          <i
            :class="{
              'el-icon-s-fold': !isCollapse,
              'el-icon-s-unfold': isCollapse,
            }"
            style="cursor: pointer"
            @click="isCollapse = !isCollapse"
          ></i>
          <span>江苏传智播客科技教育有限公司</span>
        </div>
        <el-dropdown>
          <div class="avatar-warp">
            <img class="avatar" :src="user.photo" alt="" />
            <span>{{ user.name }}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click.native="logout">用户退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import { getUserProfile } from '@/api/user'
import AppAside from './components/aside'
export default {
  name: 'LayoutIndex',
  components: {
    AppAside
  },
  props: {},
  data () {
    return {
      user: {},
      isCollapse: false
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () {
    this.loadUserProfile()
  },
  methods: {
    loadUserProfile () {
      // getUserProfile().then((res) => {
      //   // console.log(res.data.data)
      //   this.user = res.data.data
      // })
    },
    logout () {
      this.$confirm('确定退出吗?', '退出提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
        window.localStorage.removeItem('user')
        this.$router.push({
          name: 'login'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    }
  }
}
</script>

<style scoped lang="less">
.layout-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  .aside {
    background-color: #d3dce6;
    .aside-menu {
      height: 100%;
    }
  }
  .header {
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .avatar-warp {
      display: flex;
      align-items: center;
      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
  .main {
    background-color: #e9eef3;
  }
}
</style>
