<template>
  <div class="songlistmainbig">
    <div class="songlistjuzhong">
      <div class="songlistjzleft">
        <div class="songlistlist">
          <div class="slltitle">
            <div class="sllttex">歌曲列表</div>
            <div class="slltnum">30首歌</div>
          </div>
          <div class="slllistsframe">
            <div class="sllliststitle">
              <div class="sllliststitlenum"></div>
              <div class="sllliststitletitle">歌曲列表</div>
              <div class="sllliststitletime">时长</div>
              <div class="sllliststitlesinger">歌手</div>
              <div class="sllliststitlealbum">专辑</div>
            </div>
            <div class="slllists" v-if="loading">
              <div
                class="slllist"
                v-for="(sliten, idx) in daysonglist"
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
                  {{ sliten.dt }}
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
      loading: true,
      daysonglist: [
        {
          num: 1,
          name: 'woaini',
          dt: 10,
          ar: [
            {
              name: 'chaoba'
            }
          ],
          al: {
            name: 'name'
          },
          alia: []
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
          },
          alia: []
        }
      ]
    }
  },
  mounted() {
    this.geteveryday()
  },
  methods: {
    geteveryday() {
      this.$axios
        .get('http://localhost:3000/recommend/songs', {
          params: {
            // limit: 8
            // order: 'new'
            // order:new
          }
        })
        .then((res) => {
          console.log('1118')
          console.log(res.data)
          this.daysonglist = res.data.data.dailySongs
          for (let getsongdetaili = 0; getsongdetaili < 30; getsongdetaili++) {
            let linshiarname = this.daysonglist[getsongdetaili].ar[0].name
            let time = ''
            let linshitime = parseInt(
              Number(this.daysonglist[getsongdetaili].dt) / 1000
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
            this.daysonglist[getsongdetaili].dt = time
            if (this.daysonglist[getsongdetaili].ar.length > 1) {
              for (
                let getsongdetailj = 1;
                getsongdetailj < this.daysonglist[getsongdetaili].ar.length;
                getsongdetailj++
              ) {
                linshiarname =
                  linshiarname +
                  '/' +
                  this.daysonglist[getsongdetaili].ar[getsongdetailj].name
              }
            }
            this.daysonglist[getsongdetaili].ar[0].name = linshiarname
          }
          this.loading = true
          console.log('1119')
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