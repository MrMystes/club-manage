<template>
  <div class="recommend">
    <div class="title">
      <span>推荐社团</span>
      <div class="reload">
        <div class="page-count"></div>
        <div class="page-change">
          <i class="el-icon-arrow-left"></i>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>

      <ul class="recommend-list">
        <li v-for="item in items" class="list-item">
          <img :src="item.src">
          <div class="info">
            <h2>{{item.name}}</h2>
            <p>{{item.description}}</p>
          </div>

        </li>
      </ul>


    </div>

    <div></div>

  </div>

</template>
<script>
  import eg from '../../assets/img/about.jpg'
  export default{
    data(){
      return {
        items: [{
          src: eg,
          name: "绯舞之樱",
          description: "苏州大学材化部社团"
        }, {
          src: eg,
          name: "绯舞之樱",
          description: "苏州大学材化部社团"
        }, {
          src: eg,
          name: "绯舞之樱",
          description: "苏州大学材化部社团"
        }, {
          src: eg,
          name: "绯舞之樱",
          description: "苏州大学材化部社团"
        }]
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .recommend {
    width: 30%;
    .title {
      width: 100%;
      display: block;
      height: 20px;
      line-height: 20px;
      span {
        font-size: 16px;
        text-align: left;
      }
      .reload {
        float: right;
        .page-count {
          margin: 0 10px 0 0;
          font-size: 1px;
          color: #969696;
          display: inline-block;
        }

        .page-change {
          display: inline-block;
          i {
            font-size: 12px;
            padding: 3px 5px;
            color: #969696;
            border: 1px solid #dcdcdc;
            cursor: pointer;
          }
        }
      }

    }
    .recommend-list{
      margin-top:30px;
      .list-item{
        display: flex;
        justify-content: flex-start;
        height:50px;
        line-height:50px;
        margin-bottom:10px;

        .info{
          h2{
            height:50%;
            line-height: 50%;
          }
        }

        img{
          float:left;
          width:50px;
          height:50px;
          border-radius: 50%;
          border:1px solid;
        }
      }
    }

  }

</style>
