<template>
  <div>
    <button @click="textbutton1()">123</button>
    <audio class="draweraudio" :src="songurl" controls autoplay></audio>
  </div>
</template>
<script>
export default {
  data() {
    return {
      songurl: ''
    }
  },
  methods: {
    textbutton() {
      console.log('执行了')
      this.$axios
        .get('http://localhost:3000/song/url', {
          params: {
            id: 1935182196
          }
        })
        .then((res) => {
          console.log('1118')
          console.log(res.data)
          this.songurl = res.data.data[0].url
        })
    },
    textbutton1() {
      this.songurl =
        'http://m801.music.126.net/20220416200028/30febf617…2b/b7d6/1814/eebe56d03890d5be5a52a50d091eaf88.mp3'
    }
  }
}
</script>
<style class="less" scope>
.audio {
  background: rgb(47, 47, 47);
}
.draweraudio {
  height: 20px;
  width: 400px;
  background: rgb(47, 47, 47);
}
</style>