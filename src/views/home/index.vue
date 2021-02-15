<template>
 <div class="container">
  <div id="mybg" class="dynamic">
    <el-calendar v-model="value">
    </el-calendar>
  </div>
 </div>
</template>

<script>
// 引入动态背景的js 由于使用本地js文件会报错 然后引入的在线链接
// import '@/assets/js/three.r119.min.js'
// import '@/assets/js/vanta.fog.min.js'
export default {
  name: 'HomeIndex',
  components: {},
  props: {},
  data () {
    return {
      value: new Date()
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    this.createBg()
  },
  methods: {
    createBg () {
      /* eslint-disable */
      // console.log(VANTA)
      VANTA.BIRDS({
        el: '#mybg',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        // backgroundColor: 0x70e2f
        backgroundColor: '#fff'
      })
    }
  }
}
</script>

<style scoped lang="less">
  .container {
    height: 100%;
    .dynamic{
      width: 100%;
      height: 100%;
    }
  }
  /deep/.vanta-canvas {
    border-radius: 0px;
  }
  .el-calendar {
    background-color: rgba(255, 255, 255, 0);
  }
</style>
