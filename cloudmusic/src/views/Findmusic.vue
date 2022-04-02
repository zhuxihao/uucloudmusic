<template>
  <div class="main">
    <div class="maintop">
      <div class="maintopframe">
        <router-link to="tuijian" tag="div" active-class="maintoplinkseek"
          >推荐</router-link
        >
        <router-link to="paihang" tag="div" active-class="maintoplinkseek"
          >排行榜</router-link
        >
        <router-link to="gedan" tag="div" active-class="maintoplinkseek"
          >歌单</router-link
        >
        <router-link to="zhubo" tag="div" active-class="maintoplinkseek"
          >主播电台</router-link
        >
        <router-link to="geshou" tag="div" active-class="maintoplinkseek"
          >歌手</router-link
        >
        <router-link to="xindie" tag="div" active-class="maintoplinkseek"
          >新碟上架</router-link
        >
      </div>
    </div>
    <div>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive">
          <!-- 这里是会被缓存的视图组件 -->
        </router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive">
        <!-- 这里是不被缓存的视图组件 -->
      </router-view>
    </div>
  </div>
</template>
<script >
export default {
  data() {
    return {
      // dialogVisible: true
    }
  },
  methods: {}
}
</script>
<style lang="less" scope>
.maintop {
  height: 30px;
  width: 100%;
  background: rgb(194, 12, 12);
}
.maintopframe {
  height: 25px;
  width: 565px;
  line-height: 25px;
  display: flex;
  // margin-left: 380px;
  margin: 0px auto;
  font-size: 12px;
  color: rgb(255, 255, 255);
  // flex-wrap: wrap;
  // justify-content: space-between;
  div {
    flex: 1;
    text-align: center;
    cursor: pointer;
    border-radius: 15px;

    // justify-content: space-between;
  }
}
.maintoplinkseek {
  // background: red;
  background: rgb(155, 9, 9);
}
</style>