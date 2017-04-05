<template>
  <div class="header">
    <ul class="navigation">
      <li class="title"><span>社团统一展示系统</span></li>

      <li>
        <router-link to="/login"><span class="icon-left icon-file-text"></span><span
          class="nav-text">登陆</span>
        </router-link>
      </li>

      <li>
        <router-link to="/register"><span class="icon-left icon-file-text"></span><span
          class="nav-text">注册</span>
        </router-link>
      </li>

    </ul>
  </div>
</template>
<script>

  let aboutSrc = require('src/assets/img/about.jpg')
  export default{
    data(){
      return {
        aboutSrc
      }
    },
    methods: {

    }
  }
</script>

<style style rel="stylesheet/scss" lang="scss" scoped>

  @import "../../assets/css/constants";

  .header {
    background-color: white;
    height: $navHeight;
    position: absolute;
    top: 0;
    width: 100%;
    border-bottom: 1px solid #f1f1f1;

    .navigation {
      list-style: none;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 100%;

      li {
        height: 100%;
        display: flex;
        align-items: center;

        &:last-child {
          margin-right: 2rem;
          //屏幕宽度超过800px时，最后一个li元素离屏幕右侧8rem
          @media all and(min-width: 800px) {
            margin-right: 8rem;
          }
        }

        &.title {
          height: 100%;
          flex-grow: 1;
          span {
            font-size: 2rem;
            margin-left: 2rem;

          }
        }

        a {
          text-decoration: none;
          font-size: 1.5rem;
          display: block;
          margin: 1rem;
          padding-bottom: .2rem;
          color: #909090;
          font-weight: bold;
          &:hover {
            color: black;
            border-bottom: 2px solid black;
          }
          //屏幕宽度小于600，隐藏导航栏的字
          @media all and (max-width: 600px) {
            text-align: center;
            padding: 10px;
            .nav-text {
              display: none;
            }
          }
          .icon-left {
            margin-right: .5rem;
          }
        }


      }
    }
  }

</style>
