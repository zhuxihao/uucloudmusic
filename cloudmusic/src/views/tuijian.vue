<template>
  <div class="tuijianmain">
    <div class="tuijianmainbig">
      <!-- 轮播图区域 -->
      <div class="swiper"></div>
      <div class="tuijianmaindown">
        <div class="tuijianjuzhong">
          <div class="juzhongleft">
            <!-- 热门推荐 -->
            <div class="tjtitle">
              <div class="tjtitleimg"></div>
              <div class="tjtitletext">热门推荐</div>
              <div class="hottag">
                <div class="hottag1 hottag0">华语</div>
                <div class="hottag2 hottag0">流行</div>
                <div class="hottag3 hottag0">摇滚</div>
                <div class="hottag4 hottag0">民谣</div>
                <div class="hottag5 hottag0">电子</div>
              </div>
              <div class="tjtitlemany">
                <div class="tjtitlemanytext">更多</div>
                <div class="tjtitlemanyimg"></div>
              </div>
            </div>
            <div class="hotlists">
              <div
                class="hotlist"
                v-for="item in hotlist"
                :key="item"
                @click="displaysonglist(item.id)"
              >
                <div class="hotlistimg">
                  <img class="hotlistimgimg" :src="item.picUrl" alt="" />
                </div>
                <div class="hotlisttitle">
                  {{ item.name }}
                </div>
              </div>
            </div>
            <!-- 个性化推荐 -->
            <div class="tjtitle">
              <div class="tjtitleimg"></div>
              <div class="tjtitletext">个性化推荐</div>
            </div>
            <div class="gexinglists">
              <!-- list1------- -->
              <div class="gexinglist" @click="gethotlist()">
                <div class="gexinglistimg">
                  <img class="gexinglistimgimg" src="../image/01.jpg" alt="" />
                </div>
                <div class="gexinglisttitle1">每日歌曲推荐</div>
                <div class="gexinglisttitle2">
                  根据你的口味生成，<br />
                  每天6:00更新
                </div>
              </div>
              <!-- list2------- -->
              <div class="gexinglist">
                <div class="gexinglistimg">
                  <img
                    class="gexinglistimgimg"
                    :src="gexinglist1.picUrl"
                    alt=""
                  />
                </div>
                <div
                  :class="tjtitle1under1"
                  @mouseenter="tjgexingintitle1(1)"
                  @mouseout="tjgexingouttitle1(1)"
                >
                  {{ gexinglist1.name }}
                </div>
                <div
                  class="gexinglisttitle2box"
                  @mouseenter="tjgexingin(1)"
                  @mouseout="tjgexingout(1)"
                >
                  <div class="gexinglisttitle2" v-if="tjnointer1">
                    {{ gexinglist1.copywriter }}
                  </div>
                  <div
                    class="gexinglisttitle2"
                    v-if="!tjnointer1"
                    @click="tjnointernext(1)"
                  >
                    不感兴趣
                  </div>
                </div>
              </div>
              <!-- list3------- -->
              <div class="gexinglist">
                <div class="gexinglistimg">
                  <img
                    class="gexinglistimgimg"
                    :src="gexinglist2.picUrl"
                    alt=""
                  />
                </div>
                <div
                  :class="tjtitle1under2"
                  @mouseenter="tjgexingintitle1(2)"
                  @mouseout="tjgexingouttitle1(2)"
                >
                  {{ gexinglist2.name }}
                </div>
                <div
                  class="gexinglisttitle2box"
                  @mouseenter="tjgexingin(2)"
                  @mouseout="tjgexingout(2)"
                >
                  <div class="gexinglisttitle2" v-if="tjnointer2">
                    {{ gexinglist2.copywriter }}
                  </div>
                  <div
                    class="gexinglisttitle2"
                    v-if="!tjnointer2"
                    @click="tjnointernext(2)"
                  >
                    不感兴趣
                  </div>
                </div>
              </div>
              <!-- list4------- -->
              <div class="gexinglist">
                <div class="gexinglistimg">
                  <img
                    class="gexinglistimgimg"
                    :src="gexinglist3.picUrl"
                    alt=""
                  />
                </div>
                <div
                  :class="tjtitle1under3"
                  @mouseenter="tjgexingintitle1(3)"
                  @mouseout="tjgexingouttitle1(3)"
                >
                  {{ gexinglist3.name }}
                </div>
                <div
                  class="gexinglisttitle2box"
                  @mouseenter="tjgexingin(3)"
                  @mouseout="tjgexingout(3)"
                >
                  <div class="gexinglisttitle2" v-if="tjnointer3">
                    {{ gexinglist3.copywriter }}
                  </div>
                  <div
                    class="gexinglisttitle2"
                    v-if="!tjnointer3"
                    @click="tjnointernext(3)"
                  >
                    不感兴趣
                  </div>
                </div>
              </div>
            </div>
            <!-- 新碟推荐 -->
            <div class="tjtitle">
              <div class="tjtitleimg"></div>
              <div class="tjtitletext">新碟推荐</div>
              <div class="tjtitlemany">
                <div class="tjtitlemanytext">更多</div>
                <div class="tjtitlemanyimg"></div>
              </div>
            </div>
            <div class="newtvlistskuang">
              <div class="newtvlists">
                <el-carousel
                  width="700px"
                  height="180px"
                  indicator-position="none"
                  :autoplay="false"
                >
                  <el-carousel-item v-for="item in 2" :key="item">
                    <div class="newtvlistframe">
                      <div
                        class="newtvlist"
                        v-for="it in newtvlist[item - 1]"
                        :key="it"
                      >
                        <div class="newtvlistimg">
                          <img
                            class="newtvlistimgimg"
                            :src="it.blurPicUrl"
                            alt=""
                          />
                        </div>
                        <div class="newtvlistdie"></div>
                        <div class="newtvlistyou"></div>
                        <div class="newtvlisttitle1">{{ it.name }}</div>
                        <div class="newtvlisttitle2">{{ it.company }}</div>
                      </div>
                    </div>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
            <!-- 榜单 -->
            <div class="tjtitle">
              <div class="tjtitleimg"></div>
              <div class="tjtitletext">榜单</div>
              <div class="tjtitlemany">
                <div class="tjtitlemanytext">更多</div>
                <div class="tjtitlemanyimg"></div>
              </div>
            </div>
          </div>
          <div class="juzhongrigth"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //热门歌单数组
      hotlist: [1, 2, 3, 4, 5, 6, 7, 8],
      //个性推荐之猜你喜欢+热门推荐数组
      gexinglist: [],
      //个性推荐之猜你喜欢+热门推荐数组剩余容量
      gexinglistnum: 0,
      //三个个性list分别参数
      gexinglist1: {
        name: '其实我喜欢你很久了',
        copywriter: '猜你喜欢'
      },
      gexinglist2: {
        name: '其实我喜欢你很久了',
        copywriter: '猜你喜欢'
      },
      gexinglist3: {
        name: '其实我喜欢你很久了',
        copywriter: '猜你喜欢'
      },
      //三个控制个性化推荐区域，不感兴趣按钮是否显示变量
      tjnointer1: true,
      tjnointer2: true,
      tjnointer3: true,
      //三个变量控制title1文字区域下划线
      tjtitle1under1: 'gexinglisttitle1',
      tjtitle1under2: 'gexinglisttitle1',
      tjtitle1under3: 'gexinglisttitle1',
      //新碟推荐数组
      newtvlist: []
    }
  },
  mounted() {
    this.gethotlist()
    // this.getdaylist()
  },
  methods: {
    //界面js函数------------------------------------------------------------------------------------------
    //点击不感兴趣切换下一个推荐歌单函数
    tjnointernext(next) {
      if (this.gexinglistnum > 0) {
        if (next == 1) {
          this.gexinglist1 = this.gexinglist.pop()
          // this.gexinglist1.copywriter = '不感兴趣'
        } else if (next == 2) {
          this.gexinglist2 = this.gexinglist.pop()
        } else {
          this.gexinglist3 = this.gexinglist.pop()
        }
      } else {
        console.log('没有更多内容')
      }
      this.gexinglistnum--
    },
    //控制个性化推荐区域不感兴趣按钮是否显示
    tjgexingin(tjin) {
      console.log(tjin)
      if (tjin == 1) {
        this.tjnointer1 = false
        // this.gexinglist1.copywriter = '不感兴趣'
      } else if (tjin == 2) {
        this.tjnointer2 = false
      } else {
        this.tjnointer3 = false
      }
    },
    tjgexingout(tjout) {
      console.log(tjout + 'out')
      // if (tjout == 1) {
      this.tjnointer1 = true
      // } else if (tjout == 2) {
      this.tjnointer2 = true
      // } else {
      this.tjnointer3 = true
    },
    //控制个性化推荐区域文字内容下划线
    tjgexingintitle1(t1in) {
      console.log(t1in + 'in')
      if (t1in == 1) {
        this.tjtitle1under1 = 'hotlisttitleunder'
      } else if (t1in == 2) {
        this.tjtitle1under2 = 'hotlisttitleunder'
      } else {
        this.tjtitle1under3 = 'hotlisttitleunder'
      }
    },
    tjgexingouttitle1() {
      this.tjtitle1under1 = 'hotlisttitle'
      this.tjtitle1under2 = 'hotlisttitle'
      this.tjtitle1under3 = 'hotlisttitle'
    },
    //点击歌单，进入歌单详情页面函数
    displaysonglist(slid) {
      window.sessionStorage.setItem('slid', slid)
      this.$router.push('songlist')
    },

    //请求js函数------------------------------------------------------------------------------------------
    //获取十份新碟推荐函数
    getnewtvlist() {
      let newtvlist1 = []
      let newtvlist2 = []
      let getnewtvlisti = 0
      this.$axios
        .get('http://localhost:3000/top/album', {
          params: {
            limit: 10
          }
        })
        .then((res) => {
          console.log('1118')
          while (getnewtvlisti <= 4) {
            newtvlist1.push(res.data.weekData[getnewtvlisti])
            newtvlist2.push(res.data.weekData[getnewtvlisti + 5])
            getnewtvlisti++
          }
          this.newtvlist.push(newtvlist1)
          this.newtvlist.push(newtvlist2)
          console.log('1119')
          console.log(this.newtvlist)
        })
      // this.gethotlist()
      // this.getdaylist()
    },
    //获取八份热门推荐歌单
    gethotlist() {
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
          this.hotlist = res.data.result
          console.log('1119')
        })
    },
    //获取个性化推荐歌单
    getdaylist() {
      this.$axios
        .get('http://localhost:3000/recommend/resource')
        .then((res) => {
          console.log('1118')
          this.gexinglist = res.data.recommend
          console.log(this.gexinglist)
          console.log('1119')
          this.gexinglist1 = this.gexinglist.pop()
          this.gexinglist2 = this.gexinglist.pop()
          this.gexinglist3 = this.gexinglist.pop()
          this.gexinglistnum = this.gexinglist.length
        })
      // this.gethotlist()
    }
  }
}
</script>
<style class="less" scope>
.tuijianmain {
  margin: 0px;
  width: 100%;
  /* height: 2000px; */
  background: rgb(245, 245, 245);
}
.tuijianmainbig {
  margin: 0px;
  /* text-align: center; */
  background: rgb(245, 245, 245);
}
.swiper {
  float: left;
  width: 100%;
  height: 280px;
  background: rgb(220, 202, 170);
}
.tuijianmaindown {
  float: left;
  width: 100%;
  /* height: 1000px; */
  /* margin: 0px auto; */
  background: rgb(245, 245, 245);
}
.tuijianjuzhong {
  height: 1800px;
  width: 985px;
  margin: 0px auto;
  background: white;
}
.juzhongleft {
  float: left;
  height: 1800px;
  width: 732px;
  border-left: 1px solid rgb(211, 211, 211);
  border-right: 1px solid rgb(211, 211, 211);
  /* background: pink; */
}
.juzhongrigth {
  float: left;
  height: 1800px;
  width: 251px;
  background: palegoldenrod;
}
/* 公共样式 */
.tjtitle {
  float: left;
  height: 50px;
  width: 702px;
  margin-left: 15px;
  border-bottom: 2px solid rgb(193, 13, 12);
  background: white;
}
.tjtitleimg {
  float: left;
  height: 19px;
  width: 19px;
  margin-top: 23px;
  margin-left: 10px;
  background: url(../image/yuan.jpg);
  background-size: length(100%, 100%);
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center, center;
}
.tjtitletext {
  float: left;
  font-size: 20px;
  margin-top: 18px;
  margin-left: 6px;
}
.hottag {
  float: left;
  height: 18px;
  width: 300px;
  margin-top: 24px;
  margin-left: 1px;
  /* background: khaki; */
  display: flex;
}
.hottag0 {
  font-size: 12px;
  color: rgb(102, 102, 102);
  text-align: center;
  cursor: pointer;
}
.hottag1 {
  flex: 1;
  border-right: 1px solid rgb(207, 204, 214);
}
.hottag2 {
  flex: 1;
  border-right: 1px solid rgb(207, 204, 214);
}
.hottag3 {
  flex: 1;
  border-right: 1px solid rgb(207, 204, 214);
}
.hottag4 {
  flex: 1;
  border-right: 1px solid rgb(207, 204, 214);
}
.hottag5 {
  flex: 1;
}
.tjtitlemany {
  float: right;
  margin-top: 22px;
  /* margin-left: 233px; */
  height: 20px;
  width: 50px;
  cursor: pointer;
}
.tjtitlemanytext {
  font-size: 12px;
  line-height: 20px;
  height: 20px;
  width: 30px;
  float: left;
}
.tjtitlemanyimg {
  margin-top: 1px;
  margin-left: -4px;
  float: left;
  height: 16px;
  width: 16px;
  background: url(../image/many.jpg);
  background-size: length(100%, 100%);
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center, center;
}
.hotlists {
  float: left;
  height: 450px;
  width: 702px;
  margin-top: 20px;
  margin-left: 15px;
  /* background: pink; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.hotlist {
  /* flex: 1; */
  height: 180px;
  width: 142px;
  /* background: palegreen; */
  /* border: 1px solid palegreen; */
}
.hotlistimg {
  height: 142px;
  width: 142px;
  background: paleturquoise;
}
.hotlistimgimg {
  height: 100%;
  width: 100%;
}
.hotlisttitle {
  font-size: 14px;
  margin-top: 4px;
}
.hotlisttitleunder {
  font-size: 14px;
  margin-top: 4px;
  text-decoration: underline;
}
.gexinglists {
  float: left;
  height: 200px;
  width: 702px;
  margin-top: 20px;
  margin-left: 15px;
  margin-bottom: 20px;
  /* background: pink; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.gexinglist {
  /* flex: 1; */
  height: 200px;
  width: 142px;
  /* background: palegreen; */
  /* border: 1px solid palegreen; */
}
.gexinglistimg {
  height: 142px;
  width: 142px;
  /* background: paleturquoise; */
}
.gexinglistimgimg {
  height: 100%;
  width: 100%;
}
.gexinglisttitle1 {
  margin-top: 4px;
  font-size: 14px;
}
.gexinglisttitle2box {
  width: 142px;
  height: auto;
  /* background: palegreen; */
}
.gexinglisttitle2 {
  /* position: absolute; */
  /* height: 100%; */
  /* background: palegreen; */
  margin-top: 1px;
  font-size: 12px;
  cursor: pointer;
  color: rgb(153, 153, 153);
}
.newtvlistskuang {
  float: left;
  height: 185px;
  width: 702px;
  border: 1px solid rgb(211, 211, 211);
  margin-top: 20px;
  margin-left: 15px;
}
.newtvlists {
  float: left;
  height: 181px;
  width: 700px;
  margin-top: 2px;
  margin-left: 1px;
  background: rgb(245, 245, 245);
}

.newtvlistframe {
  height: 181px;
  width: 630px;
  margin-left: 35px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* background: papayawhip; */
}
.newtvlist {
  position: relative;
  height: 130px;
  width: 120px;
  margin-top: 20px;
  /* background: palegreen; */
}
.newtvlistimg {
  position: absolute;
  /* float: left; */
  height: 98px;
  width: 98px;
  background: lightcoral;
}
.newtvlistimgimg {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 3;
}
.newtvlistyou {
  height: 90px;
  width: 5px;
  margin-top: 3px;
  margin-left: 98px;
  border-top: 1px solid rgb(191, 191, 191);
  border-right: 2px solid rgb(191, 191, 191);
  border-bottom: 1px solid rgb(191, 191, 191);
}
.newtvlistdie {
  position: absolute;
  height: 88px;
  width: 88px;
  margin-top: 3px;
  margin-left: 25px;
  border-radius: 44px;
  background: rgb(11, 11, 11);
  z-index: 1;
}
.newtvlisttitle1 {
  margin-top: 4px;
  font-size: 12px;
  height: 14px;
  width: 98px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.newtvlisttitle2 {
  font-size: 12px;
  color: rgb(102, 102, 102);
  height: 14px;
  width: 98px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>