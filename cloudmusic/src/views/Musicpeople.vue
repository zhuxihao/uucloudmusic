<template>
  <div class="text">
    <div class="text1" @click="text1()"></div>
    <div class="text2" @click="text2()"></div>
    <div class="text3" @click="text3()"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: 1
    }
  },
  methods: {
    text1() {
      this.$axios.get('http://124.222.164.42:80/books/1').then((res) => {
        console.log(JSON.stringify(res.data.data) + '1')
      })
      console.log('111')
    },
    text2() {
      const id = this.id
      this.$axios.get('http://124.222.164.42:80/books/' + id).then((res) => {
        console.log(JSON.stringify(res.data.data) + '2')
      })
      console.log('222')
    },
    text3(val) {
      // if (val) {
      this.$axios
        .get('http://localhost:3000/personalized', {
          params: {
            limit: 8
            // order: 'new'
            // order:new
          }
        })
        .then((res) => {
          console.log('1118')
          console.log(res.data.result)
          console.log('1119')
        })
      // }
    }
  }
}
</script>
<style class="less" scope>
.text {
  /* float: left; */
  width: 100%;
  height: 100%;
}
.text1 {
  float: left;
  height: 300px;
  width: 300px;
  background: rgb(220, 224, 213);
}
.text2 {
  float: left;
  height: 300px;
  width: 300px;
  background: rgb(205, 125, 50);
}
.text3 {
  float: left;
  height: 300px;
  width: 300px;
  background: rgb(26, 15, 128);
}
.text4 {
  float: left;
  height: 300px;
  width: 300px;
  background: rgb(205, 50, 102);
}
</style>