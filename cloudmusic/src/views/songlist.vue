<template>
  <div class="songlistmainbig">
    <div class="songlistjuzhong">
      <div class="songlistjzleft">
        <div class="songltitle">
          <div class="sltleft">
            <img class="sltleftimg" :src="songlist.coverImgUrl" alt="" />
          </div>
          <div class="sltright">
            <div class="sltrtitle">
              <img class="sltrtitleimg" src="../image/sl2.jpg" alt="" />
              <div class="sltrtitletex">{{ songlist.name }}</div>
            </div>
            <div class="sltrauthor">
              <img
                class="sltrauthorimg"
                :src="songlist.creator.avatarUrl"
                alt=""
              />
              <div class="sltrauthorname">{{ songlist.creator.nickname }}</div>
              <div class="sltrauthortime">{{ songlistcreattime }}创建</div>
            </div>
            <div class="sltrbuts"></div>
            <div class="sltrtags">
              标签：
              <el-tag
                class="sltrtag"
                type="info"
                size="small"
                v-for="itag in songlist.tags"
                :key="itag"
                >{{ itag }}</el-tag
              >
            </div>
            <div class="sltrintro">介绍:{{ songlist.description }}</div>
          </div>
        </div>
        <div class="songlistlist">
          <div class="slltitle">
            <div class="sllttex">歌曲列表</div>
            <div class="slltnum">{{ songlist.trackIds.length }}首歌</div>
            <div class="slltbf">
              <div class="slltbofangcishu1">播放：</div>
              <div class="slltbofangcishunum">{{ songlist.playCount }}</div>
              <div class="slltbofangcishu2">次</div>
            </div>
          </div>
          <div class="slllistsframe">
            <div class="sllliststitle">
              <div class="sllliststitlenum"></div>
              <div class="sllliststitletitle">歌曲列表</div>
              <div class="sllliststitletime">时长</div>
              <div class="sllliststitlesinger">歌手</div>
              <div class="sllliststitlealbum">专辑</div>
            </div>
            <div class="slllists">
              <div
                class="slllist"
                v-for="(sliten, idx) in songlistdata"
                :key="idx"
              >
                <div
                  :class="[
                    'slllist1',
                    idx % 2 === 1 ? 'slllistpub' : 'slllistpub1'
                  ]"
                >
                  {{ idx + 1 }}
                </div>
                <div
                  :class="[
                    'slllist2',
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
                    'slllist3',
                    idx % 2 === 1 ? 'slllistpub' : 'slllistpub1'
                  ]"
                >
                  {{ sliten.time }}
                </div>
                <div
                  :class="[
                    'slllist4',
                    idx % 2 === 1 ? 'slllistpub' : 'slllistpub1'
                  ]"
                >
                  {{ sliten.ar[0].name }}
                </div>
                <div
                  :class="[
                    'slllist5',
                    idx % 2 === 1 ? 'slllistpub' : 'slllistpub1'
                  ]"
                >
                  {{ sliten.al.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="songlistjzright"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: 6817992958,
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
      songlistdata: [
        {
          num: 1,
          name: 'woaini',
          time: 10,
          ar: [
            {
              name: 'chaoba'
            }
          ],
          al: {
            name: 'name'
          }
        },
        {
          num: 1,
          name: 'woaini',
          time: 10,
          ar: [
            {
              name: 'chaoba'
            }
          ],
          al: {
            name: 'name'
          }
        }
      ],
      //暂存歌曲列表权限shuzu
      songlistdataop: []
    }
  },
  mounted() {
    this.getid()
  },
  methods: {
    seltable(num) {
      console.log(num)
    },
    //获取传过来的歌单id值
    getid() {
      this.text = window.sessionStorage.getItem('slid')
      this.getsonglist()
    },
    //获取歌单详情
    getsonglist() {
      this.$axios
        .get('http://localhost:3000/playlist/detail', {
          params: {
            id: this.text
          }
        })
        .then((res) => {
          console.log('1118')
          console.log(res.data.playlist)
          var time = new Date(res.data.playlist.createTime)
          console.log(res.data.playlist.createTime)
          var n = time.getFullYear()
          var y = time.getMonth() + 1
          var r = time.getDate()
          this.songlistcreattime = n + '-' + y + '-' + r
          this.songlist = res.data.playlist
        })
      this.getsongdetail()
    },
    //获取歌单所有歌曲详情
    getsongdetail() {
      this.$axios
        .get('http://localhost:3000/playlist/track/all', {
          params: {
            id: this.text,
            limit: 20
          }
        })
        .then((res) => {
          console.log('1118')
          console.log(res.data.songs)
          this.songlistdata = res.data.songs
          for (
            let getsongdetaili = 0;
            getsongdetaili < this.songlistdata.length;
            getsongdetaili++
          ) {
            let linshiarname = this.songlistdata[getsongdetaili].ar[0].name
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
    }
  }
}
</script>
<style class="less" scope>
.songlistmainbig {
  height: 2000px;
  width: 100%;
  background: rgb(245, 245, 245);
  /* margin: 10px auto;
  border: 3px solid pink; */
}
.songlistjuzhong {
  height: 2000px;
  width: 985px;
  margin: 0px auto;
  border-left: 1px solid rgb(211, 211, 211);
  border-right: 1px solid rgb(211, 211, 211);
  background: rgb(255, 255, 255);
}
.songlistjzleft {
  float: left;
  height: 2000px;
  width: 719px;
  border-right: 1px solid rgb(234, 234, 234);
}
.songlistjzright {
  float: left;
  height: 2000px;
  width: 264px;
  border-left: 1px solid rgb(240, 240, 240);
}
.songltitle {
  /* height: 257px; */
  width: 675px;
  margin-top: 2px;
  margin-left: 7px;
  /* border: 1px solid pink; */
  background: pink;
}
.sltleft {
  float: left;
  height: 202px;
  width: 202px;
  margin-top: 40px;
  margin-left: 32px;
  border: 1px solid rgb(242, 242, 242);
  /* border: 1px solid rgb(213, 213, 213); */
  outline: 1px solid rgb(213, 213, 213);
}
.sltleftimg {
  height: 198px;
  width: 198px;
  margin-left: 2px;
  margin-top: 2px;
}
.sltright {
  float: left;
  /* height: 210px; */
  width: 410px;
  margin-top: 37px;
  margin-left: 20px;
  border: 1px solid palegreen;
}
.sltrtitle {
  width: 410px;
}
.sltrtitleimg {
  float: left;
  height: 30px;
  width: 68px;
  margin-left: 2px;
}
.sltrtitletex {
  float: left;
  width: 340px;
  font-size: 20px;
  color: rgb(51, 51, 51);
}
.sltrauthor {
  float: left;
  height: 36px;
  width: 400px;
  margin-top: 9px;
  margin-left: 6px;
  border: 1px solid pink;
}
.sltrauthorimg {
  float: left;
  height: 36px;
  width: 36px;
}
.sltrauthorname {
  float: left;
  height: 36px;
  margin-left: 10px;
  line-height: 36px;
  font-size: 12px;
  color: rgb(12, 115, 194);
}
.sltrauthortime {
  float: left;
  height: 36px;
  margin-left: 20px;
  line-height: 36px;
  font-size: 12px;
  color: rgb(153, 153, 153);
}
.sltrbuts {
  float: left;
  height: 36px;
  width: 400px;
  margin-top: 13px;
  margin-left: 6px;
  border: 1px solid pink;
}
.sltrtags {
  float: left;
  height: 36px;
  width: 400px;
  font-size: 12px;
  line-height: 36px;
  color: rgb(102, 102, 102);
  margin-top: 11px;
  margin-left: 6px;
  border: 1px solid pink;
}
.sltrtag {
  margin-right: 14px;
}
.el-tag.el-tag--info {
  height: 21px;
  width: 50px;
  line-height: 18px;
  text-align: center;
  background: rgb(119, 119, 119);
  border: 1px solid rgb(209, 209, 209);
  border-radius: 10px;
}
.sltrintro {
  float: left;
  /* height: 36px; */
  width: 400px;
  font-size: 12px;
  color: rgb(102, 102, 102);
  margin-top: 2px;
  margin-left: 6px;
  border: 1px solid pink;
}
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
.sllliststitlenum {
  height: 34px;
  width: 80px;
  line-height: 34px;
  font-size: 12px;
  color: rgb(102, 102, 102);
  /* padding-left: 4px; */
  border-right: 1px solid rgb(224, 224, 224);
}
.sllliststitletitle {
  height: 34px;
  width: 229px;
  line-height: 34px;
  font-size: 12px;
  color: rgb(102, 102, 102);
  padding-left: 6px;
  border-right: 1px solid rgb(224, 224, 224);
  border-left: 1px solid rgb(224, 224, 224);
}
.sllliststitletime {
  height: 34px;
  width: 102px;
  line-height: 34px;
  font-size: 12px;
  padding-left: 6px;
  color: rgb(102, 102, 102);
  border-right: 1px solid rgb(224, 224, 224);
}
.sllliststitlesinger {
  height: 34px;
  width: 79px;
  line-height: 34px;
  font-size: 12px;
  padding-left: 6px;
  color: rgb(102, 102, 102);
  border-right: 1px solid rgb(224, 224, 224);
}
.sllliststitlealbum {
  height: 34px;
  width: 112px;
  line-height: 34px;
  font-size: 12px;
  padding-left: 6px;
  color: rgb(102, 102, 102);
  /* background: red; */
}
.slllists {
  /* height: 234px; */
  width: 634px;
  /* background: pink; */
}
.slllist {
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
.slllist1 {
  width: 74px;
}
.slllist2 {
  display: flex;
  width: 223px;
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
.slllist3 {
  width: 96px;
}
.slllist4 {
  width: 73px;
}
.slllist5 {
  width: 109px;
}
</style>