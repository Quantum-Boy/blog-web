<template>
  <div class="home">
    <div class="home-img">
      <img class="home-img-content" src="../../assets/home-bg.jpg" alt="">
    </div>
    <div class="home-title">
      Blog Site
    </div>
    <div class="home-content">
      <div class="home-content-title">
        最近更新
      </div>
      <div v-for="item in listData" :key="item.id">
        <list-card :card-data="item"/>
      </div>
    </div>
    <div class="home-operate">
      <el-icon :size="40" @click="handleAdd"><CirclePlus /></el-icon>
    </div>
  </div>
</template>

<script>
import ListCard from './component/list-card.vue'
export default {
  name: 'HomePage',
  components: {
    ListCard
  },
  data () {
    return {
      listData: [
        { id: 1, title: 'xxxxxxxxxxxxxxxxxx', update_time: '2022-10-6', updator: '李想' },
        { id: 2, title: 'xxxxxxxxxxxxxxxxxx', update_time: '2022-10-6', updator: '李想' },
        { id: 3, title: 'xxxxxxxxxxxxxxxxxx', update_time: '2022-10-6', updator: '李想' },
        { id: 4, title: 'xxxxxxxxxxxxxxxxxx', update_time: '2022-10-6', updator: '李想' },
        { id: 5, title: 'xxxxxxxxxxxxxxxxxx', update_time: '2022-10-6', updator: '李想' },
        { id: 6, title: 'xxxxxxxxxxxxxxxxxx', update_time: '2022-10-6', updator: '李想' },
        { id: 7, title: 'xxxxxxxxxxxxxxxxxx', update_time: '2022-10-6', updator: '李想' },
        { id: 8, title: 'xxxxxxxxxxxxxxxxxx', update_time: '2022-10-6', updator: '李想' },
        { id: 9, title: 'xxxxxxxxxxxxxxxxxx', update_time: '2022-10-6', updator: '李想' },
        { id: 10, title: 'xxxxxxxxxxxxxxxxxx', update_time: '2022-10-6', updator: '李想' },
        { id: 11, title: 'xxxxxxxxxxxxxxxxxx', update_time: '2022-10-6', updator: '李想' },
        { id: 12, title: 'xxxxxxxxxxxxxxxxxx', update_time: '2022-10-6', updator: '李想' }
      ]
    }
  },
  methods: {
    handleAdd () {
      this.$router.push('/add-blog')
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  &-img {
    &-content {
      height: 50vh;
      width: 100vw;
    }
  }
  &-title {
    position: absolute;
    top: 35vh;
    left: calc(50vw - 100px);
    color: #fff;
    font-size: 3rem;
  }
  &-content {
    height: calc(50vh - 120px);
    overflow: scroll;
  }
  &-operate {
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
