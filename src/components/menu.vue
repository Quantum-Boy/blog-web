<template>
   <el-menu
    :default-active="activeIndex"
    class="el-menu"
    mode="horizontal"
    :ellipsis="false"
    router
    @select="handleSelect"
  >
    <el-menu-item index="/" class="el-menu-item">博客</el-menu-item>
    <el-menu-item index="/music" class="el-menu-item">音乐</el-menu-item>
    <el-menu-item index="/movie" class="el-menu-item">电影</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (activeIndex) {
      this.$emit('handle-select', activeIndex)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  width: 100vw;
  display: flex;
  &-item {
    flex: 1;
  }
}
</style>
