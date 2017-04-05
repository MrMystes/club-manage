<template>
  <div>
    <div class="tag-list">
      <el-tag
        v-for="tag in tags"
        :closable="true"
        :type="tag.type">
        {{tag.name}}
      </el-tag>

      <el-tag :closable="true" :type="gray">
        更多主题
      </el-tag>
    </div>

    <div class="note-list">
      <div class="note">
        <div class="split-line"></div>
        <div class="info"></div>
        <div class="content"></div>

      </div>

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'gray' },
          { name: '标签三', type: 'primary' },
          { name: '标签四', type: 'success' },
          { name: '标签五', type: 'warning' },
          { name: '标签六', type: 'danger'}
        ]
      };
    }
  }
</script>
<style>
  .tag-list {
    display: flex;
    flex-wrap:wrap;
    max-width: 70%;
    margin-bottom:10px
  }

  .tag-list .el-tag{
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .note-list .note .split-line {
    height:1px;
    width:70%;

    margin: -5px 0 15px;
    border-top: 1px solid #f0f0f0;
  }
</style>
