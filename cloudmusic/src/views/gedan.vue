<template>
  <div class="gedanmainbig">
    <div class="gedanmainbigjuzhong">
      <div class="gedantitle">
        <div class="gdtplaytax">全部</div>
        <div class="gdtseektax" @click="textvmodel()">选择分类 ∨</div>
        <div class="gdtseekhot" @click="getallgedanlist()">热门</div>
      </div>
      <div class="gedanselkuang" v-if="false"></div>
      <div class="gedanlistsfarme">
        <div class="gedanlists">
          <div
            class="gedanlist"
            v-for="(item, index) in gedanlist[gdpagepro]"
            :key="index"
            @click="displaysonglist(item.id)"
          >
            <div class="gedanlistimg">
              <img class="gedanlistimgimg" :src="item.coverImgUrl" alt="" />
            </div>
            <div class="gedanlisttitle1">
              {{ item.name }}
            </div>
            <div class="gedanlisttitle2">
              <!-- {{ item.creator.nickname }} -->
            </div>
          </div>
        </div>
      </div>
      <div class="gedanselpage">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="35"
          :total="315"
          :current-page.sync="gdpage"
          @current-change="textvmodel()"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gedanlist: [[1, 2, 3], [1], [1, 2], [1, 2, 3]],
      //控制显示第几页参数
      gdpage: 1,
      gdpagepro: 0,
      //记录上一页分页参数
      uppagebefore: 0,
      //记录标签参数
      tagisnochange: ''
    }
  },
  activated() {
    if (
      window.sessionStorage.getItem('tag') != this.tagisnochange ||
      this.gedanlist[1].length < 30
    ) {
      console.log('干' + this.tagisnochange)
      this.mounted()
    }
    // console.log(window.sessionStorage.getItem('tag'))
  },
  mounted() {
    if (window.sessionStorage.getItem('tag') == null) {
      this.getallgedanlist()
    } else {
      this.gettaggedanlist()
    }
  },
  methods: {
    //页码变化时切换歌单界面
    textvmodel(a) {
      console.log(a)
      console.log(this.gdpage)
      this.gdpagepro = this.gdpage
    },
    //存入选中歌单id
    displaysonglist(slid) {
      window.sessionStorage.setItem('slid', slid)
      this.$router.push('songlist')
    },
    //获取三页歌单,即热门歌单
    getallgedanlist() {
      // this.$axios
      //   .get('http://localhost:3000/top/playlist', {
      //     params: {
      //       limit: 90,
      //       // before: 1636723738000
      //       order: 'hot'
      //       // order: 'new'
      //     }
      //   })
      //   .then((res) => {
      //     console.log('1118')
      //     console.log(res.data.playlists)
      //     for (let i = 0; i < 30; i++) {
      //       this.gedanlist[1][i] = res.data.playlists[i]
      //       this.gedanlist[2][i] = res.data.playlists[i + 30]
      //       this.gedanlist[3][i] = res.data.playlists[i + 60]
      //     }
      //     // this.gedanlist[1] = res.data.playlists
      //     this.uppagebefore = res.data.playlists.updateTime
      //     this.gdpagepro = 1
      //     console.log('1119')
      //   })
      console.log(window.sessionStorage.getItem('tags') + 'getallgedanlist')
      if (window.sessionStorage.getItem('tag')) {
        sessionStorage.removeItem('tag')
      }

      this.gedanlist[0] = [1]
    },
    //按标签获取歌单
    gettaggedanlist() {
      this.tagisnochange = window.sessionStorage.getItem('tag')
      console.log(window.sessionStorage.getItem('tag') + 'gettaggedanlist')
      this.gedanlist[0] = [1, 2]
    }
  }
}
</script>
<style class="less" scope>
.gedanmainbig {
  height: 2000px;
  width: 100%;
  background: rgb(245, 245, 245);
}
.gedanmainbigjuzhong {
  position: relative;
  height: 2000px;
  width: 985px;
  margin: 0px auto;
  border-left: 1px solid rgb(211, 211, 211);
  border-right: 1px solid rgb(211, 211, 211);
  background: rgb(255, 255, 255);
}
.gedantitle {
  float: left;
  height: 80px;
  width: 905px;
  margin-left: 40px;
  border-bottom: 2px solid rgb(194, 12, 12);
}
.gdtplaytax {
  float: left;
  height: 40px;
  font-size: 24px;
  color: rgb(51, 51, 51);
  margin-top: 40px;
}
.gdtseektax {
  float: left;
  cursor: pointer;
  height: 27px;
  width: 85px;
  font-size: 12px;
  line-height: 27px;
  text-align: center;
  color: rgb(12, 115, 194);
  border: 1px solid rgb(237, 237, 237);
  outline: 1px solid rgb(196, 196, 196);
  border-radius: 3px;
  margin-top: 42px;
  margin-left: 13px;
  background: linear-gradient(rgb(251, 251, 251), rgb(241, 241, 241));
}
.gdtseekhot {
  float: right;
  cursor: pointer;
  height: 27px;
  width: 46px;
  font-size: 12px;
  line-height: 27px;
  text-align: center;
  color: white;
  margin-top: 46px;
  border-radius: 3px;
  background: rgb(190, 10, 13);
}
.gedanselkuang {
  height: 40px;
  width: 80px;
  margin-top: 100px;
  margin-left: 30px;
  background: palegoldenrod;
  position: absolute;
}
.gedanlistsfarme {
  float: left;
  height: 1450px;
  width: 915px;
  margin-top: 20px;
  margin-left: 35px;
  background: pink;
}
.gedanlists {
  float: left;
  height: 1450px;
  width: 915px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.gedanlist {
  height: 180px;
  width: 142px;
  margin-left: 6px;
  margin-right: 6px;
}
.gedanlistimg {
  height: 142px;
  width: 142px;
  background: paleturquoise;
}
.gedanlistimgimg {
  height: 100%;
  width: 100%;
}
.gedanlisttitle1 {
  font-size: 14px;
  margin-top: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.gedanlisttitle2 {
  margin-top: 1px;
  font-size: 12px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(153, 153, 153);
}
.gedanlisttitleunder {
  font-size: 14px;
  margin-top: 4px;
  text-decoration: underline;
}
.gedanselpage {
  float: left;
  margin-left: 50%;
  transform: translate(-50%, 0);
}
/* .el-pagination.is-background .el-pager li:not(.disabled).active {
  background: rgb(221, 17, 24);
}
.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  background: white;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 2px;
} */
</style>