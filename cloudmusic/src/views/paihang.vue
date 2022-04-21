<template>
  <div class="phmainbig">
    <div class="phjuzhong">
      <div class="phjzleft">
        <div class="phltitle" @click="texttoplist()">云音乐特色榜</div>
        <div class="phlteselists">
          <div
            :class="list1on == idx ? 'phlliston' : 'phllist'"
            v-for="(item1, idx) in teselist"
            :key="idx"
            @click="list1onf(idx, item1.id)"
          >
            <div class="phllistimg">
              <img class="phllistimgimg" :src="item1.coverImgUrl" alt="" />
            </div>
            <div class="phllisttitle1">{{ item1.name }}</div>
            <div class="phllisttitle2">{{ item1.updateFrequency }}</div>
          </div>
        </div>
        <div class="phltitle2">全球媒体帮</div>
        <div class="phlmeitilists">
          <div
            :class="list2on == idx ? 'phlliston' : 'phllist'"
            v-for="(item2, idx) in meitilist"
            :key="idx"
            @click="list2onf(idx, item2.id)"
          >
            <div class="phllistimg">
              <img class="phllistimgimg" :src="item2.coverImgUrl" alt="" />
            </div>
            <div class="phllisttitle1">{{ item2.name }}</div>
            <div class="phllisttitle2">{{ item2.updateFrequency }}</div>
          </div>
        </div>
      </div>
      <div class="phjzright">
        <div class="phlisttitle">
          <div class="phltimg">
            <img class="phltimgimg" :src="songlist.coverImgUrl" alt="" />
          </div>
          <div class="phlttitle">{{ songlist.name }}</div>
          <div class="phlttime">
            <img class="phlttimeimg" src="../image/03.jpg" alt="" />
            <div class="phlttimetext">最近更新：</div>
            <div class="phlttimetextdata1">{{ updatatime }}</div>
            <div class="phlttimetextdata2">({{ updatastatus }})</div>
          </div>
          <div class="phltbut"></div>
        </div>
        <!-- 插入代码 -->
        <div class="songlistlist">
          <div class="slltitle">
            <div class="sllttex" @click="displaysongdrawer()">歌曲列表</div>
            <div class="slltnum">{{ songlist.trackIds.length }}首歌</div>
            <div class="slltbf">
              <div class="slltbofangcishu1">播放：</div>
              <div class="slltbofangcishunum">{{ songlist.playCount }}</div>
              <div class="slltbofangcishu2">次</div>
            </div>
          </div>
          <div class="slllistsframe">
            <div class="sllliststitle">
              <div class="phsllliststitlenum"></div>
              <div class="phsllliststitletitle">标题</div>
              <div class="phsllliststitletime">时长</div>
              <div class="phsllliststitlesinger">歌手</div>
            </div>
            <div class="slllists">
              <div
                class="phslllist"
                v-for="(sliten, idx) in songlistdata"
                :key="idx"
                @click="audiosong(sliten.id)"
              >
                <div
                  :class="[
                    'phslllist1',
                    idx % 2 === 1 ? 'slllistpub' : 'slllistpub1'
                  ]"
                >
                  {{ idx + 1 }}
                </div>
                <div
                  :class="[
                    'phslllist2',
                    idx % 2 === 1 ? 'slllistpub' : 'slllistpub1'
                  ]"
                >
                  <div class="slllist21">{{ sliten.name }}</div>
                  <div class="slllist22" v-if="sliten.alia.length >= 1">
                    {{ ' - ' + '(' + sliten.alia + ')' }}
                  </div>
                </div>
                <div
                  :class="[
                    'phslllist3',
                    idx % 2 === 1 ? 'slllistpub' : 'slllistpub1'
                  ]"
                >
                  {{ sliten.dt }}
                </div>
                <div
                  :class="[
                    'phslllist4',
                    idx % 2 === 1 ? 'slllistpub' : 'slllistpub1'
                  ]"
                >
                  {{ sliten.ar[0].name }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 插入代码 -->
        <!-- 抽屉 -->
        <el-drawer
          :modal="false"
          direction="btt"
          size="44px"
          title="我是标题"
          :visible.sync="drawer"
          :with-header="false"
        >
          <div class="drawerbig">
            <div class="drawerjuzhong">
              <div class="drawersongup">
                <img class="drawersongupimg" src="../image/songup.png" alt="" />
              </div>
              <div class="drawersongdo">
                <img class="drawersongdoimg" src="../image/songdo.png" alt="" />
              </div>
            </div>
          </div>
        </el-drawer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //多少首歌
      listlength: 0,
      //播放次数
      playCount: 0,
      text: 6817992958,
      //控制排行榜标签列
      list1on: -1,
      list2on: -1,
      //云音乐特色榜
      teselist: [
        {
          coverImgUrl: '',
          name: '123',
          updateFrequency: '234'
        },
        {
          coverImgUrl: '',
          name: '123',
          updateFrequency: '234'
        }
      ],
      //全球媒体榜
      meitilist: [],
      //======================================
      //获取到的歌单详细信息
      songlist: {
        coverImgUrl: '',
        name: '',
        creator: {
          nickname: ''
        },
        tags: [1, 2, 3],
        description: 'taichaole',
        trackIds: [1, 2, 3, 4, 5, 6, 7]
      },
      //歌单创建日期
      songlistcreattime: '',
      //歌曲列表数组
      songlistdata: [],
      //更新日期
      updatatime: '',
      //更新状态
      updatastatus: '',
      //控制歌曲播放抽屉显示参数
      drawer: true,
      //存放当前歌单歌曲id
      persentsongid: [],
      //当前歌曲URL
      songurl: ''
    }
  },
  mounted() {
    this.texttoplist()
    // this.phgetsongdetail()
  },
  methods: {
    //设置歌曲播放抽屉显示函数
    displaysongdrawer() {
      this.drawer = true
      alert('生效了')
      console.log(this.drawer)
    },
    //测试榜单类型
    texttoplist() {
      this.$axios
        .get('http://localhost:3000/toplist', {
          params: {}
        })
        .then((res) => {
          console.log(res.data)
          this.teselist = res.data.list
          for (let i = 1; i <= 32; i++) {
            let linshi = this.teselist.pop()
            this.meitilist.unshift(linshi)
            console.log(this.teselist)
            console.log(this.meitilist)
          }
          // this.getsonglist(this.teselist[0].id)
          // this.list1on = 0
          // this.list2on = -1
          this.list1onf(0, this.teselist[0].id)
        })
    },
    //控制排行榜标签列选中样式函数
    list1onf(idx, id) {
      this.list1on = idx
      this.list2on = -1
      console.log(idx + '1')
      this.getsonglist(id)
      this.updatastatus = this.teselist[idx].updateFrequency
      let timer = new Date(this.teselist[idx].updateTime)
      let m = timer.getMonth() + 1
      let d = timer.getDate()
      this.updatatime = m + '月' + d + '日'
    },
    list2onf(idx, id) {
      this.list1on = -1
      this.list2on = idx
      console.log(idx + '2')
      this.getsonglist(id)
      this.updatastatus = this.meitilist[idx].updateFrequency
      let timer = new Date(this.meitilist[idx].updateTime)
      let m = timer.getMonth() + 1
      let d = timer.getDate()
      this.updatatime = m + '月' + d + '日'
    },
    //获取歌单详情函数
    getsonglist(id) {
      this.$axios
        .get('http://localhost:3000/playlist/detail', {
          params: {
            id: id
          }
        })
        .then((res) => {
          console.log('1118')
          console.log(res.data.playlist)
          this.songlist = res.data.playlist
        })
      this.phgetsongdetail(id)
    },
    //获取歌单所有歌曲函数
    phgetsongdetail(id) {
      this.$axios
        .get('http://localhost:3000/playlist/track/all', {
          params: {
            id: id
            // limit: 20
          }
        })
        .then((res) => {
          console.log('1111')
          console.log(res.data)
          console.log('2222')
          this.songlistdata = res.data.songs
          this.persentsongid = res.data.privileges
          for (
            let getsongdetaili = 0;
            getsongdetaili < this.songlistdata.length;
            getsongdetaili++
          ) {
            let linshiarname = this.songlistdata[getsongdetaili].ar[0].name
            //处理时间代码
            // let linshiarname = this.daysonglist[getsongdetaili].ar[0].name
            let time = ''
            let linshitime = parseInt(
              Number(this.songlistdata[getsongdetaili].dt) / 1000
            )
            let linsihtimefen = parseInt(linshitime / 60)
            if (linsihtimefen < 10) {
              time = time + '0' + String(linsihtimefen) + ':'
            } else {
              time = time + String(linsihtimefen) + ':'
            }
            let linshitimemiao = linshitime % 60
            if (linshitimemiao < 10) {
              time = time + '0' + String(linshitimemiao)
            } else {
              time = time + String(linshitimemiao)
            }
            this.songlistdata[getsongdetaili].dt = time
            //处理时间代码结束
            if (this.songlistdata[getsongdetaili].ar.length > 1) {
              for (
                let getsongdetailj = 1;
                getsongdetailj < this.songlistdata[getsongdetaili].ar.length;
                getsongdetailj++
              ) {
                linshiarname =
                  linshiarname +
                  '/' +
                  this.songlistdata[getsongdetaili].ar[getsongdetailj].name
              }
            }
            this.songlistdata[getsongdetaili].ar[0].name = linshiarname
          }
          this.songlistdataop = res.data.privileges
        })
    },
    //播放单曲函数
    audiosong(id) {
      this.$axios
        .get('http://localhost:3000/song/url', {
          params: {
            id: id
          }
        })
        .then((res) => {
          console.log('1118')
          console.log(res.data)
          this.songurl = res.data.data[0].url
          console.log(this.songurl)
        })
    }
  }
}
</script>
<style class="less" scope>
/* 公用drawer样式开始 */
.drawerbig {
  height: 43px;
  width: 100%;
  border-top: 1px solid rgb(56, 56, 56);
  background: linear-gradient(rgb(56, 56, 56), rgb(0, 0, 0));
}
.drawerjuzhong {
  height: 41px;
  width: 985px;
  margin: 0 auto;
  /* background: palegoldenrod; */
  border: 1px solid red;
}
.drawersongup {
  float: left;
  height: 25px;
  width: 25px;
  margin-top: 8px;
  margin-left: 2px;
}
.drawersongupimg {
  height: 100%;
  width: 100%;
}
.drawersongdo {
  float: left;
  height: 25px;
  width: 25px;
  margin-top: 8px;
  margin-left: 2px;
}
.drawersongdoimg {
  height: 100%;
  width: 100%;
}
/* 公用drawer样式结束 */
.phmainbig {
  height: 3000px;
  width: 100%;
  background: rgb(245, 245, 245);
}
.phjuzhong {
  height: 3000px;
  width: 985px;
  margin: 0 auto;
  border-left: 1px solid rgb(211, 211, 211);
  border-right: 1px solid rgb(211, 211, 211);
}
.phjzleft {
  float: left;
  height: 3000px;
  width: 241px;
  border-right: 1px solid rgb(217, 217, 217);
  background: rgb(249, 249, 249);
}
.phjzright {
  float: left;
  height: 3000px;
  width: 742px;
  border-left: 1px solid rgb(242, 242, 242);
  background: rgb(255, 255, 255);
}
.phltitle {
  cursor: pointer;
  float: left;
  height: 30px;
  width: 100px;
  font-size: 14px;
  font-family: simsun, \5b8b\4f53;
  font-weight: bold;
  margin-top: 40px;
  margin-left: 10px;
}
.phltitle2 {
  cursor: pointer;
  float: left;
  height: 30px;
  width: 100px;
  font-size: 14px;
  font-family: simsun, \5b8b\4f53;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 10px;
}
.phlteselists {
  float: left;
  width: 241px;
}
.phllist {
  float: left;
  height: 62px;
  width: 241px;
  /* background: rgb(230, 230, 230); */
}
.phlliston {
  float: left;
  height: 62px;
  width: 241px;
  background: rgb(230, 230, 230);
}
.phllistimg {
  float: left;
  height: 42px;
  width: 42px;
  margin-top: 10px;
  margin-left: 20px;
  background: greenyellow;
}
.phllistimgimg {
  height: 100%;
  width: 100%;
}
.phllisttitle1 {
  float: left;
  height: 16px;
  width: 160px;
  font-size: 12px;
  color: rgb(0, 0, 0);
  margin-top: 10px;
  margin-left: 8px;
  /* background: yellowgreen; */
}
.phllisttitle2 {
  float: left;
  height: 16px;
  width: 160px;
  font-size: 12px;
  color: rgb(153, 153, 153);
  margin-top: 10px;
  margin-left: 8px;
  /* background: yellowgreen; */
}
.phlisttitle {
  float: left;
  height: 200px;
  width: 636px;
  margin-left: 41px;
  /* background: yellowgreen; */
}
.phltimg {
  float: left;
  height: 151px;
  width: 151px;
  margin-top: 45px;
  border: 1px solid rgb(204, 204, 204);
  /* background: greenyellow; */
}
.phltimgimg {
  float: left;
  height: 147px;
  width: 147px;
  margin-top: 2px;
  margin-left: 2px;
  background: greenyellow;
}
.phlttitle {
  float: left;
  height: 30px;
  width: 450px;
  margin-top: 60px;
  margin-left: 30px;
  font-size: 20px;
}
.phlttime {
  float: left;
  height: 18px;
  width: 390px;
  margin-top: 10px;
  margin-left: 30px;
  /* background: yellowgreen; */
}
.phlttimeimg {
  float: left;
  height: 18px;
  width: 18px;
}
.phlttimetext {
  float: left;
  font-size: 12px;
}
.phlttimetextdata1 {
  float: left;
  font-size: 12px;
}
.phlttimetextdata2 {
  float: left;
  font-size: 12px;
  color: rgb(153, 153, 153);
  margin-left: 7px;
}
.phltbut {
  float: left;
  height: 35px;
  width: 390px;
  margin-top: 25px;
  margin-left: 30px;
  border: 1px solid yellowgreen;
}
/* ------------------------------------------------------------------- */
.songlistlist {
  float: left;
  /* height: 300px; */
  width: 636px;
  margin-top: 44px;
  margin-left: 41px;
  /* background: palegoldenrod; */
}
.slltitle {
  height: 30px;
  width: 636px;
  /* background: pink; */
  border-bottom: 2px solid rgb(194, 12, 12);
}
.sllttex {
  float: left;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  color: rgb(51, 51, 51);
}
.slltnum {
  float: left;
  height: 15px;
  font-size: 12px;
  color: rgb(102, 102, 102);
  /* line-height: 30px; */
  margin-top: 10px;
  margin-left: 20px;
}
.slltbf {
  float: right;
  font-size: 12px;
  margin-top: 10px;
}
.slltbofangcishu1 {
  float: left;
  color: rgb(102, 102, 102);
  height: 15px;
}
.slltbofangcishunum {
  float: left;
  font-weight: bold;
  color: rgb(194, 12, 12);
}
.slltbofangcishu2 {
  float: left;
  color: rgb(102, 102, 102);
}
.slllistsframe {
  float: left;
  /* height: 200px; */
  width: 634px;
  border: 1px solid rgb(217, 217, 217);
  /* background: palegreen; */
}
.sllliststitle {
  float: left;
  height: 34px;
  width: 634px;
  background: linear-gradient(rgb(255, 255, 255), rgb(240, 240, 240));
  display: flex;
}
.phsllliststitlenum {
  height: 34px;
  width: 80px;
  line-height: 34px;
  font-size: 12px;
  color: rgb(102, 102, 102);
  /* padding-left: 4px; */
  border-right: 1px solid rgb(224, 224, 224);
}
.phsllliststitletitle {
  height: 34px;
  width: 318px;
  line-height: 34px;
  font-size: 12px;
  color: rgb(102, 102, 102);
  padding-left: 6px;
  border-right: 1px solid rgb(224, 224, 224);
  border-left: 1px solid rgb(224, 224, 224);
}
.phsllliststitletime {
  height: 34px;
  width: 87px;
  line-height: 34px;
  font-size: 12px;
  padding-left: 6px;
  color: rgb(102, 102, 102);
  border-right: 1px solid rgb(224, 224, 224);
}
.phsllliststitlesinger {
  height: 34px;
  width: 127px;
  line-height: 34px;
  font-size: 12px;
  padding-left: 6px;
  color: rgb(102, 102, 102);
  /* border-right: 1px solid rgb(224, 224, 224); */
}
.slllists {
  /* height: 234px; */
  width: 634px;
  /* background: pink; */
}
.phslllist {
  cursor: pointer;
  display: flex;
  height: 30px;
  width: 634px;
}
.slllistpub {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  padding-left: 6px;
  padding-right: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.slllistpub1 {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  padding-left: 6px;
  padding-right: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: rgb(247, 247, 247);
}
.phslllist1 {
  width: 74px;
}
.phslllist2 {
  display: flex;
  width: 318px;
}
.slllist21 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.slllist22 {
  color: rgb(174, 174, 174);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.phslllist3 {
  width: 87px;
}
.phslllist4 {
  width: 127px;
}
</style>