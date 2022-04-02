<template>
  <!-- <div class="text" @click="text()">422</div> -->
  <div class="mainpagebig">
    <div class="mainpage">
      <div class="top">
        <div class="topcenter">
          <div class="toptitle">云视听音乐·商城</div>
          <div class="topselect">
            <div class="topselecticon"></div>
            <el-input
              v-model="shopselinput"
              placeholder="商品"
              size="small"
              @input="shopselmean(shopselinput)"
            ></el-input>
          </div>
          <div class="topshopcar"></div>
          <div class="toplogin"></div>
        </div>
      </div>
      <div class="mid">
        <div class="midback" :style="midbackstyle">
          <div class="midbackleft">
            <div class="midbackleftimg" @click="swiperzuo()"></div>
          </div>
          <div class="midbackimg1 midbackimg" v-if="isnodisplayimg == 1"></div>
          <div class="midbackimg2 midbackimg" v-if="isnodisplayimg == 2"></div>
          <div class="midbackimg3 midbackimg" v-if="isnodisplayimg == 3"></div>
          <div class="midbackimg4 midbackimg" v-if="isnodisplayimg == 4"></div>
          <div class="midbackimg5 midbackimg" v-if="isnodisplayimg == 5"></div>
          <div class="midbackimg6 midbackimg" v-if="isnodisplayimg == 6"></div>
          <div class="midbackimgsel">
            <div
              :class="isnodisplaysel1"
              @mouseenter="mouseenterclause(1)"
              @mouseout="mouseoutclause(1)"
            ></div>
            <div
              :class="isnodisplaysel2"
              @mouseenter="mouseenterclause(2)"
              @mouseout="mouseoutclause(2)"
            ></div>
            <div
              :class="isnodisplaysel3"
              @mouseenter="mouseenterclause(3)"
              @mouseout="mouseoutclause(3)"
            ></div>
            <div
              :class="isnodisplaysel4"
              @mouseenter="mouseenterclause(4)"
              @mouseout="mouseoutclause(4)"
            ></div>
            <div
              :class="isnodisplaysel5"
              @mouseenter="mouseenterclause(5)"
              @mouseout="mouseoutclause(5)"
            ></div>
            <div
              :class="isnodisplaysel6"
              @mouseenter="mouseenterclause(6)"
              @mouseout="mouseoutclause(6)"
            ></div>
          </div>
          <div class="midbackright">
            <div class="midbackrightimg" @click="swiperyou()"></div>
          </div>
        </div>
      </div>
      <div class="downmain">
        <div class="down"></div>
      </div>
    </div>
  </div>
</template>
<script>
// import Swiper from '../swiper1'
export default {
  data() {
    return {
      //轮播图参数
      isnodisplayimg: 1,
      id: 1,
      //轮播图背景色参数
      midbackstyle: 'background: rgb(223, 233, 242);',
      midbackstyles: [
        'background: rgb(223, 233, 242);',
        'background: rgb(191, 204, 213);',
        'background: rgb(177, 209, 232);',
        'background: rgb(118, 95, 81);',
        'background: rgb(220, 216, 221);',
        'background: rgb(139, 168, 202);'
      ],
      //定时器函数
      timer: '',
      //控制轮播图转变点点区域样式参数
      isnodisplaysel1: 'midbackimgsel1',
      isnodisplaysel2: 'midbackimgsel0',
      isnodisplaysel3: 'midbackimgsel0',
      isnodisplaysel4: 'midbackimgsel0',
      isnodisplaysel5: 'midbackimgsel0',
      isnodisplaysel6: 'midbackimgsel0',
      // img1: require('../image/1.png'),
      // img2: require('../image/2.png'),
      // img3: require('../image/3.png'),
      // img4: require('../image/4.png'),
      // img4: require('../image/5.png'),
      //商品搜索框绑定参数
      isnodisplaysel: '',
      shopselinput: ''
    }
  },
  mounted() {
    // this.timer = setInterval(this.timermean, 2000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    //测试方法
    // text() {
    //   this.$axios.get('api').then((res) => {
    //     console.log(JSON.stringify(res.data.data) + '111')
    //   })
    //   console.log('222')
    // }
    //点点区域手动切换轮播图函数
    mouseenterclause(num) {
      clearInterval(this.timer)
      this.isnodisplayimg = num
      const num1 = this.id
      if (num1 == 1) {
        this.isnodisplaysel1 = 'midbackimgsel0'
      } else if (num1 == 2) {
        this.isnodisplaysel2 = 'midbackimgsel0'
      } else if (num1 == 3) {
        this.isnodisplaysel3 = 'midbackimgsel0'
      } else if (num1 == 4) {
        this.isnodisplaysel4 = 'midbackimgsel0'
      } else if (num1 == 5) {
        this.isnodisplaysel5 = 'midbackimgsel0'
      } else if (num1 == 6) {
        this.isnodisplaysel6 = 'midbackimgsel0'
      }

      if (num == 1) {
        this.isnodisplaysel1 = 'midbackimgsel1'
      } else if (num == 2) {
        this.isnodisplaysel2 = 'midbackimgsel1'
      } else if (num == 3) {
        this.isnodisplaysel3 = 'midbackimgsel1'
      } else if (num == 4) {
        this.isnodisplaysel4 = 'midbackimgsel1'
      } else if (num == 5) {
        this.isnodisplaysel5 = 'midbackimgsel1'
      } else if (num == 6) {
        this.isnodisplaysel6 = 'midbackimgsel1'
      }
      this.midbackstyle = this.midbackstyles[this.isnodisplayimg - 1]
    },
    mouseoutclause(num) {
      this.id = num
      console.log(this.id + 'id')
      console.log(num + 'num')
      this.timer = setInterval(this.timermean, 2000)
    },
    //向左切换函数
    swiperzuo() {
      if (this.isnodisplayimg > 1) {
        this.isnodisplayimg = this.isnodisplayimg - 1
      } else {
        this.isnodisplayimg = 6
      }

      const num2 = this.isnodisplayimg
      this.mouseenterclause(num2)
      this.mouseoutclause(num2)
      this.midbackstyle = this.midbackstyles[this.isnodisplayimg - 1]
      console.log(num2 + 'num2')
    },
    //向右切换函数
    swiperyou() {
      if (this.isnodisplayimg < 6) {
        this.isnodisplayimg = this.isnodisplayimg + 1
      } else {
        this.isnodisplayimg = 1
      }

      const num2 = this.isnodisplayimg
      this.mouseenterclause(num2)
      this.mouseoutclause(num2)
      this.midbackstyle = this.midbackstyles[this.isnodisplayimg - 1]
      console.log(num2 + 'num2')
    },
    //商品搜索框触发搜索函数
    shopselmean() {},
    //定时器函数
    timermean() {
      if (this.isnodisplayimg < 6) {
        this.isnodisplayimg = this.isnodisplayimg + 1
      } else {
        this.isnodisplayimg = 1
      }

      const num2 = this.isnodisplayimg
      this.mouseenterclause(num2)
      this.mouseoutclause(num2)
      this.midbackstyle = this.midbackstyles[this.isnodisplayimg - 1]
      console.log(num2 + 'num2')
    }
  }
}
</script>
<style lang="less" scoped>
.mainpagebig {
  height: 100%;
  width: 100%;
  min-width: 1100px;
}
.mainpage {
  margin: auto;
  // width: 1536px;
}
.top {
  height: 80px;
  width: 100%;
}
.topcenter {
  height: 80px;
  width: 1100px;
  margin: auto;
  // background: yellowgreen;
}
.toptitle {
  height: 80px;
  line-height: 80px;
  width: 300px;
  // margin-left: 215px;
  font-size: 32px;
  color: rgb(21, 33, 37);
  float: left;
}
.topselect {
  height: 32px;
  // width: 400px;
  margin-top: 24px;
  margin-left: 20.5%;
  border-radius: 12px;
  float: left;
}
.topselecticon {
  z-index: 3;
  height: 20px;
  width: 20px;
  margin-left: 7px;
  margin-top: 6.5px;
  background: yellowgreen;
  position: absolute;
  background: url(../image/selectplus.jpg);
  background-size: length(100%, 100%);
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center, center;
}
/deep/.el-input__inner {
  border-radius: 20px;
  // height: 30px;
  width: 300px;
  padding-left: 30px;
}

//修改过
.swiper {
  // width: 60%;
  width: 921px;
  height: 300px;
}

.mid {
  height: 450px;
  width: 100%;
}
.midbackleft {
  height: 80px;
  width: 40px;
  margin-top: 180px;
  margin-left: 0.5%;
  position: absolute;
  background: rgba(90, 150, 241, 0.1);
}
.midbackleftimg {
  margin: 50% auto;
  cursor: pointer;
  height: 40px;
  width: 20;
  opacity: 0.2;
  background: url(../image/swiperzuo.png);
  background-size: length(100%, 100%);
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center, center;
}
.midback {
  position: relative;
  height: 450px;
  width: 100%;
  // background: rgb(236, 162, 214);
}
.midbackimg {
  height: 450px;
  // width: 66%;
  width: 1100px;
  // float: left;
  margin: auto;
  background: pink;
  // background: url(../image/selicon.png);
  background-size: length(100%, 100%);
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center, center;
}
.midbackimg1 {
  background: url(../image/1.png);
  // filter: alpha(opacity=1);
  background-size: length(100%, 100%);
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center, center;
}
.midbackimg2 {
  background: url(../image/2.png);
  background-size: length(100%, 100%);
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center, center;
}
.midbackimg3 {
  background: url(../image/3.png);
  background-size: length(100%, 100%);
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center, center;
}
.midbackimg4 {
  background: url(../image/4.png);
  background-size: length(100%, 100%);
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center, center;
}
.midbackimg5 {
  background: url(../image/5.png);
  background-size: length(100%, 100%);
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center, center;
}
.midbackimg6 {
  background: url(../image/6.png);
  background-size: length(100%, 100%);
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center, center;
}
.midbackimgsel {
  position: absolute;
  height: 20px;
  width: 110px;
  margin-top: -40px;
  margin-left: 50%;
  transform: translate(-50%, 0);
  // margin: auto;
  // margin: -20px 0px auto;
  // background: palevioletred;
  display: flex;
}
.midbackimgsel0 {
  // flex: 2;
  margin: auto 4px;
  height: 8px;
  width: 8px;
  border-radius: 4px;
  background: rgb(251, 240, 244);
}
.midbackimgsel1 {
  margin: auto 4px;
  height: 8px;
  width: 8px;
  border-radius: 4px;
  background: rgb(218, 64, 55);
}
.midbackright {
  height: 80px;
  width: 40px;
  // cursor: pointer;
  margin-top: -240px;
  margin-left: 96.2%;
  position: absolute;
  background: rgba(90, 150, 241, 0.1);
}
.midbackrightimg {
  margin: 50% auto;
  cursor: pointer;
  height: 40px;
  width: 20;
  opacity: 0.2;
  // background: rgb(230, 230, 230);
  background: url(../image/swiperyou.png);
  background-size: length(100%, 100%);
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center, center;
}
//底部区域样式开始
.downmain {
  width: 100%;
  height: 2000px;
}
.down {
  height: 1100px;
  width: 1100px;
  margin: auto;
  background: rgb(230, 230, 230);
}
</style>