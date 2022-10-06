<template>
  <div class="list-card">
    <div class="list-card-title">
      <div>
        {{cardData.title}}
      </div>
      <div>
        {{cardData.updator}}
      </div>
    </div>
    <div class="list-card-time">
        {{cardData.update_time}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .list-card {
    height: 52px;
    box-shadow: 2px 2px 2px #888888;
    margin: 2px 0;
    background-color: rgba($color: #000000, $alpha: .05);
    padding: 8px;
    &-title {
      display: flex;
      justify-content: space-between;
    }
    &-time {
      margin-top: 8px;
      text-align: right;
    }
  }
</style>
