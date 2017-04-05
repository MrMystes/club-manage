<template>
  <el-carousel indicator-position="outside" :interval="3000">
    <el-carousel-item v-for="item in posters">
      <img :src="item.src">
    </el-carousel-item>
  </el-carousel>
</template>

<script>

  import img1 from '../../assets/carousel/01.jpg'
  import img2 from '../../assets/carousel/02.jpg'
  import img3 from '../../assets/carousel/03.jpg'

  export default {
    data: () => {
      return {
        posters: [{
          src: img1
        }, {
          src: img2
        }, {
          src: img3
        }],

        controls:false

      }
    }
  }

</script>

<style>
  .el-carousel__item img {
    width:100%;
    height:300px
  }

</style>
