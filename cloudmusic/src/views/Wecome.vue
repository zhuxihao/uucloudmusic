<template>
  <div class="mainbig">
    <div class="img">
      <div class="text" @click="texts">{{ tex }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tex: ''
    }
  },
  methods: {
    texts() {
      this.$message.success('876543')
      this.tex = '321'

      // 登陆测试
      this.$axios
        .post(
          'http://localhost:3000/login/cellphone?phone=18812185899&password=HD2022..',
          {
            params: {}
          }
        )
        .then((res) => {
          console.log('1118')
          console.log(res)
          console.log('1119')
        })

      // 热歌测试
      this.$axios
        .get('http://localhost:3000/playlist/detail', {
          params: {
            id: 3778678
          }
        })
        .then((res) => {
          console.log('2228')
          console.log(res)
          console.log('2229')
        })
    }
  }
}
</script>
<style class="less" scope>
.mainbig {
  margin: -8px;
  height: 100%;
  width: 100%;
}
.img {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background: url(../image/01.jpg) no-repeat; */
  zoom: 1;
  background-size: length(100%, 100%);
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center, center;
  background-attachment: fixed;
}
.text {
  height: 50px;
  width: 50px;
  background: yellowgreen;
}
</style>