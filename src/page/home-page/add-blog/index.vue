<template>
  <div class="add-blog">
    <el-form
      label-position="right"
      label-width="60px"
      :model="form"
    >
      <el-form-item label="书籍名">
        <el-input v-model="form.title" maxlength="32"/>
      </el-form-item>
      <el-form-item label="封面">
        <el-upload
          v-model:file-list="fileList"
          list-type="picture-card"
          :limit="1"
          :auto-upload="false"
          :on-change="beforeUpload"
        >
          <el-icon><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="评论">
        <el-input
          v-model="form.content"
          :rows="20"
          type="textarea"
          show-word-limit
          maxlength="1000"
        />
      </el-form-item>
    </el-form>
    <div class="add-blog-operate">
      <el-button type="primary">暂存</el-button>
      <el-button type="primary" @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fileList: [],
      form: {
        title: '',
        corver: null,
        content: ''
      }
    }
  },
  methods: {
    beforeUpload (file) {
      console.log(file, '99999')
    }
  }
}
</script>

<style lang="scss" scoped>
.add-blog {
  margin: 8px;
  &-operate {
    margin-top: 64px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
