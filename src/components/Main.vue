<template>
  <div class="main-frame">
    <div class="carousel-container">
      <carouselContainer></carouselContainer>
    </div>

    <div class="main">
      <newList class="newList"></newList>

      <rightList class="rightList"></rightList>
    </div>


    <!--<div class="right-menu"></div>-->

  </div>
</template>

<script>
  import carouselContainer from './carouselContainer/carouselContainer'
  import newList from './newList/newList'
  import rightList from './rightList/rightList'


  export default {
    components: {
      carouselContainer,
      rightList,
      newList
    },
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .main-frame {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    margin-left: auto;
    margin-right: auto;

    .carousel-container {
      flex-shrink: 1;
      height: 25rem;
      margin-bottom: 2rem;
      background: white;

    }

    .main {
      display: flex;
      flex-direction:row;
      justify-content:space-between;
      flex-shrink: 1;


      .newList {
      }

      .right-menu {

      }
    }
  }
</style>
