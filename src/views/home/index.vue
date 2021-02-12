<template>
 <div class="container">
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  <div id="mybg" class="dynamic"></div>
 </div>
</template>

<script>
// 引入动态背景的js
// import '@/assets/js/three.r119.min.js'
// import '@/assets/js/vanta.fog.min.js'
export default {
  name: 'HomeIndex',
  components: {},
  props: {},
  data () {
    return {

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
      VANTA.FOG({
        el: '#mybg',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x5530d1,
        midtoneColor: 0x1c2bd9,
        baseColor: 0x6b6bea
      })
    }
  }
}
</script>

<style scoped lang="less">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .dynamic{
    // width: 100%;
    // height: 100%;
    // position: absolute;
    // top: 0%;
    // background:#1D3B77;
    // z-index: -10;
  }
</style>
