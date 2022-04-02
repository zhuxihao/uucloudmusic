<template>
  <div class="mainbig">
    <div class="main">
      <!-- 上方栏区域 -->
      <!-- linkActiveClass -->
      <div class="maintop">
        <div class="maintopcenter">
          <div class="maintoptitle">
            云视听音乐
            <div class="maintoptitleimg"></div>
          </div>
          <div class="maintoplink">
            <router-link
              to="tuijian"
              tag="div"
              active-class="maintoplinksel"
              @click.native="Find()"
              >发现音乐</router-link
            >
            <router-link to="Mymusic" tag="div" active-class="maintoplinksel"
              >我的音乐</router-link
            >
            <router-link to="Concern" tag="div" active-class="maintoplinksel"
              >关注</router-link
            >
            <router-link
              to="Shop"
              tag="div"
              active-class="maintoplinksel"
              target="_blank"
              @click.native="inshop()"
              >商城</router-link
            >
            <router-link
              to="Musicpeople"
              tag="div"
              active-class="maintoplinksel"
              >音乐人</router-link
            >
          </div>
          <div class="maintopseek">
            <div class="maintopseekicon"></div>
            <el-input
              v-model="input"
              placeholder="音乐/视频/电台/用户"
              size="small"
              @input="cloudsearch(input)"
            ></el-input>
          </div>
          <div :class="inout" @mouseenter="indisplay" @mouseout="outdisplay">
            创作者中心
          </div>
          <div class="maintopuser" @click="textlogin()">
            <div class="maintopuserunlogin" v-show="!isnologin">登录</div>
            <div class="maintopuserlogin" v-show="isnologin">
              <img :src="titleimg" class="maintopuserlogin" alt="" />
            </div>
          </div>
        </div>
      </div>

      <!-- 中间红条指示区域 -->
      <div class="maincenter"></div>

      <!-- 下方区域 -->
      <div class="maindown">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>

      <div class="wangzhantiaokuan">
        <div class="beianhao">互联网备案:冀ICP备2022004849号</div>
        <!-- <link rel="冀ICP备2022004849号" href="https://beian.miit.gov.cn" /> -->
        <!-- <a href="https://beian.miit.gov.cn"> 冀ICP备2022004849号</a> -->
      </div>

      <!-- 登陆弹出框 -->
      <el-dialog
        width="460px"
        :visible.sync="dialogVisible"
        :modal="false"
        :title="loginmethod"
        class="logindialog"
      >
        <div class="loginframe">
          <!-- 选择登陆方式div -->
          <div class="sellogin" v-show="sellogin">
            <div class="selloginup">
              <div class="selloginupleft">
                <div class="selloginupleftimg"></div>
                <div class="selloginupleftresbutt">
                  <el-button type="info" class="el-butt1">注 册</el-button>
                </div>
              </div>
              <div class="selloginupright">
                <div class="selloginuprightphone" @click="sellectlogin()">
                  <div class="selloginuprightphoneimg"></div>
                  <div class="selloginuprightphonetitle">手机号登陆</div>
                </div>
                <div class="selloginuprightemail">
                  <div class="selloginuprightemailimg"></div>
                  <div class="selloginuprightemailtitle">网易邮箱账号登陆</div>
                </div>
              </div>
            </div>
            <div class="sellogindown">
              <div class="sellogindowntiaokuan">
                <el-checkbox
                  class="sellogindowntiaokuanbox"
                  v-model="checkargee"
                  @change="argeeclause()"
                ></el-checkbox>
                <div class="sellogindownargee">同意</div>
                <div
                  :class="inoutclause1"
                  @mouseenter="mouseenterclause('1')"
                  @mouseout="mouseoutclause('1')"
                  @click="clauseread('1')"
                >
                  《服务条款》
                </div>
                <div
                  :class="inoutclause2"
                  @mouseenter="mouseenterclause('2')"
                  @mouseout="mouseoutclause('2')"
                  @click="clauseread('2')"
                >
                  《隐私政策》
                </div>
                <div
                  :class="inoutclause3"
                  @mouseenter="mouseenterclause('3')"
                  @mouseout="mouseoutclause('3')"
                  @click="clauseread('3')"
                >
                  《儿童隐私政策》
                </div>
              </div>
              <div class="sellogindownma"></div>
            </div>
          </div>
          <!-- 手机号登陆div -->
          <div class="phonelogin" v-show="phonelogin">
            <div class="phoneloginpho">
              <div class="phoneloginphoselregion">+86</div>
              <div class="phoneloginphoselregion1">▼</div>
              <div class="phoneloginphoinput">
                <input
                  class="phoneloginphoinput1"
                  placeholder="请输入手机号"
                  type="text"
                  v-model="loginphone"
                  oninput="if(value.length>11)value=value.slice(0,11)"
                />
              </div>
            </div>
            <div class="phoneloginpwd" v-show="noteorpwd">
              <input
                class="phoneloginpwdinput"
                placeholder="请输入密码"
                type="text"
                v-model="loginpwd"
                oninput="if(value.length>11)value=value.slice(0,15)"
              />
              <div class="phoneloginpwdforgetpwd">忘记密码？</div>
            </div>
            <div class="phoneloginnote" v-show="!noteorpwd">
              <input
                class="phoneloginnoteinput"
                placeholder="请输入验证码"
                type="text"
                v-model="loginnote"
                oninput="if(value.length>11)value=value.slice(0,6)"
              />
              <el-button type="info" class="phoneloginnotebut">{{
                getnote
              }}</el-button>
            </div>
            <div class="phoneloginswap">
              <div class="phoneloginswapnote" @click="swapnotepwd()">
                {{ swapnotepwdtext }}
              </div>
              <div class="phoneloginswapauto">
                <el-checkbox
                  class="phoneloginswapautobox"
                  v-model="checked"
                  @change="autologin()"
                  >自动登录</el-checkbox
                >
              </div>
            </div>
            <div class="phoneloginbut">
              <el-button type="primary" class="loginbut" @click="login()"
                >登 录</el-button
              >
            </div>
            <div class="phoneloginsel">
              <div class="phoneloginselorder" @click="selorder()">
                ＜ 其他登录方式
              </div>
              <div class="phoneloginselnopho">没有账号？ 免费注册 ＞</div>
            </div>
          </div>
          <!-- 邮箱登录div -->
          <div class="emaillogin"></div>
          <!-- 二维码登录div -->
          <div class="codelogin"></div>
          <!-- 注册div -->
          <div class="regiser"></div>
          <div></div>
          <div></div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script >
// import { Edit } from '@element-plus/icons-vue'
// import { Search } from '@element-plus/icons-vue'
export default {
  data() {
    return {
      tex: '',
      input: '',
      //获取验证码按钮参数
      getnote: '获取验证码',
      //切换短信登陆或者验证码登陆按钮提示文字参数
      swapnotepwdnum: 0,
      swapnotepwdtext: '短信登录',
      //短信登录或者验证码登陆
      noteorpwd: true,
      //是否自动登录
      checked: '',
      //是否同意登陆条款勾选框参数
      checkargee: '',
      //鼠标移入移出条款改变样式参数
      inoutclause1: 'sellogindownclauseout',
      inoutclause2: 'sellogindownclauseout',
      inoutclause3: 'sellogindownclauseout',
      // Search: '../image/selicon.png',
      inout: 'maintopauthor',
      // 是否登陆参数
      isnologin: false,
      // 头像参数
      titleimg: require('../image/titleimg.jpg'),
      // 是否显示登陆弹窗参数
      dialogVisible: false,
      // 登陆方式显示
      loginmethod: '登陆',
      //登陆手机号输入框参数
      loginphone: '',
      loginpwd: '',
      loginnote: '',
      //控制登录框登陆方式v-show参数
      sellogin: true,
      phonelogin: false,
      emaillogin: false
    }
  },
  mounted() {
    this.displayfindmusic()
  },
  methods: {
    //测试函数区域-----------------------------------------
    //测试事件函数。。。完成
    Find() {
      console.log('123455')
    },
    //测试登陆头像部分div函数。。。转入正式函数
    textlogin() {
      if (this.isnologin == false) {
        this.dialogVisible = true
      }
    },

    //正式函数区域-----------------------------------------
    //设置首次加载进入主页函数
    displayfindmusic() {
      this.$router.push('/tuijian')
      console.log('displayfindmusic生效了')
    },
    //进入商城界面函数
    inshop() {
      let routeUrl = this.$router.resolve({ path: '/Shop' })
      window.open(routeUrl.href, 'Shop')
      console.log('13245')
    },
    //点击条款查看条款函数
    clauseread(clausenum) {
      // this.$router.push('/Clausechild')
      // window.open('/Clausechild')
      if (clausenum == 1) {
        let routeUrl = this.$router.resolve({ path: '/Clauseserve' })
        window.open(routeUrl.href, 'Clauseserve')
      } else if (clausenum == 2) {
        let routeUrl = this.$router.resolve({ path: '/Clauseprivacy' })
        window.open(routeUrl.href, 'Clauseprivacy')
      } else {
        let routeUrl = this.$router.resolve({ path: '/Clausechild' })
        window.open(routeUrl.href, 'Clausechild')
      }

      console.log('点击了查看条款')
    },
    //选择登陆方式界面条款添加下划线样式函数
    mouseenterclause(clausenum) {
      if (clausenum == 1) {
        this.inoutclause1 = 'sellogindownclausein'
      } else if (clausenum == 2) {
        this.inoutclause2 = 'sellogindownclausein'
      } else {
        this.inoutclause3 = 'sellogindownclausein'
      }

      console.log('条款进入')
    },
    //选择登陆方式界面条款清除下划线样式函数
    mouseoutclause(clausenum) {
      if (clausenum == 1) {
        this.inoutclause1 = 'sellogindownclauseout'
      } else if (clausenum == 2) {
        this.inoutclause2 = 'sellogindownclauseout'
      } else {
        this.inoutclause3 = 'sellogindownclauseout'
      }
      console.log('条款移出')
    },
    //切换短信登陆或者验证码登陆函数
    swapnotepwd() {
      this.swapnotepwdnum = this.swapnotepwdnum + 1
      if (this.swapnotepwdnum % 2 == 0) {
        this.swapnotepwdtext = '短信登录'
        this.noteorpwd = true
      } else {
        this.swapnotepwdtext = '密码登陆'
        this.noteorpwd = false
      }
    },
    //手机号登陆界面勾选自动登录框函数
    autologin() {
      console.log(this.checked)
    },
    //选择登陆方式界面勾选同意条款勾选框函数
    argeeclause() {
      // this.checkargee = !this.checkargee
      console.log(this.checkargee + '条款')
    },
    //鼠标进入搜索框，添加高亮函数
    indisplay() {
      this.inout = 'maintopauthorin'
      console.log(this.inout)
    },
    //鼠标移出搜索框，移除高亮函数
    outdisplay() {
      this.inout = 'maintopauthor'
      console.log(this.inout)
      console.log(this.input)
    },
    //点击选择登陆方式按钮
    sellectlogin() {
      this.sellogin = false
      this.phonelogin = true
      this.loginmethod = '手机号登陆'
    },
    //点击选择其他登陆方式函数
    selorder() {
      this.sellogin = true
      this.phonelogin = false
      this.loginmethod = '登陆'
    },
    //关键词搜索音乐函数
    cloudsearch(val) {
      if (val) {
        this.$axios
          .get('http://localhost:3000/cloudsearch/', {
            params: {
              keywords: val
            }
          })
          .then((res) => {
            console.log('1118')
            console.log(res.data.result.songs)
            console.log('1119')
          })
      }
    },
    //登陆函数
    login() {
      const pho = this.loginphone
      const pwd = this.loginpwd
      console.log(pho, pwd)
      this.$axios
        .post('http://localhost:3000/login/cellphone/', {
          phone: pho,
          password: pwd
        })
        .then((res) => {
          console.log('1118')
          console.log(res)
          console.log('1119')
          if (res.status == 200) {
            this.isnologin = true
            this.dialogVisible = false
          }
        })
    }
  }
}
</script>

<style lang="less" scoped>
.mainbig {
  margin: 0px;
  height: 100%;
  width: 100%;
  // min-width: 1136px;
  min-width: 985px;
  float: left;
}
.main {
  margin: auto;
  width: 100%;
  // height: 100%;
  // width: 1536px;
  float: left;
  // display: table;
}
// 登陆弹窗样式开始----------------------------------
// 登陆弹窗手机号登陆样式
.phoneloginpho {
  height: 30px;
  width: 210px;
  // background: yellowgreen;
  // text-align: center;
  margin: 10px auto;
  border: 1px solid rgb(205, 205, 205);
}
.phoneloginphoselregion {
  height: 30px;
  width: 38px;
  line-height: 30px;
  font-size: 12px;
  float: left;
}
.phoneloginphoselregion1 {
  height: 30px;
  line-height: 30px;
  font-size: 1px;
  float: left;
  border-right: 1px solid rgb(205, 205, 205);
}
.phoneloginphoinput {
  height: 30px;
  float: left;
}
.phoneloginphoinput1 {
  height: 30px;
  line-height: 30px;
  width: 150px;
  outline: none;
  border: 0px;
  // color: rgb(51, 51, 51);
  padding-left: 5px;
  // padding-top: 3px;
  font-size: 12px;
}
.phoneloginpwd {
  height: 30px;
  width: 210px;
  // background: yellowgreen;
  // text-align: center;
  margin: 10px auto;
  border: 1px solid rgb(205, 205, 205);
  position: relative;
}
.phoneloginpwdinput {
  height: 30px;
  line-height: 30px;
  width: 205px;
  border: 0px;
  outline: none;
  padding-left: 5px;
  font-size: 12px;
}
.phoneloginpwdforgetpwd {
  height: 18px;
  width: 60px;
  // background: yellowgreen;
  position: absolute;
  font-size: 12px;
  color: rgb(102, 102, 102);
  margin-left: 150px;
  margin-top: -23px;
}
.phoneloginnote {
  height: 30px;
  width: 120px;
  // background: yellowgreen;
  // text-align: center;
  // margin: 10px 124px;
  margin-top: 10px;
  margin-left: 125px;
  margin-bottom: 10px;
  border: 1px solid rgb(205, 205, 205);
  // position: relative;
  display: flex;
}
.phoneloginnoteinput {
  // float: left;
  flex: 2;
  height: 30px;
  width: 110px;
  line-height: 30px;
  border: 0px;
  outline: none;
  padding-left: 5px;
  font-size: 12px;
}
.phoneloginnotebut {
  // float: left;
  flex: 1;
  text-align: center;
  // width: 90px;
  height: 30px;
  // line-height: 30px;
  font-size: 12px;
  margin-left: 20px;
  // padding-left: -10px;
}
/deep/.el-button {
  padding: 6px;
}
.phoneloginswap {
  height: 20px;
  width: 210px;
  margin: 1px auto;
  // background: rgb(177, 120, 46);
}
.phoneloginswapnote {
  float: left;
  height: 20px;
  line-height: 20px;
  width: 50px;
  // margin-top: 10px;
  font-size: 12px;
  color: rgb(102, 102, 102);
  -webkit-tranform: scale(0.4);
  cursor: pointer;
}
.phoneloginswapauto {
  height: 20px;
  width: 70px;
  // background: greenyellow;
  float: left;
  margin-left: 90px;
}
.phoneloginswapautobox {
  font-size: 12px;
  color: rgb(102, 102, 102);
}
/deep/.el-checkbox__input.is-checked + .el-checkbox__label {
  color: rgb(102, 102, 102);
}
/deep/.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background: rgb(118, 118, 118);
  border: 1px solid rgb(79, 79, 79);
}
/deep/.el-checkbox__label {
  font-size: 12px;
  margin-left: -1px;
}
/deep/.el-checkbox__inner {
  height: 14px;
  width: 14px;
}
.phoneloginbut {
  height: 30px;
  width: 210px;
  margin: 10px auto;
}
.loginbut {
  height: 30px;
  line-height: 5px;
  font-size: 13px;
  width: 210px;
  background: rgb(53, 132, 208);
}
.phoneloginsel {
  width: 100%;
  height: 45px;
  margin-top: 30px;
  background: rgb(247, 247, 247);
  border-top: 1px solid rgb(198, 198, 198);
}
.phoneloginselorder {
  height: 25px;
  width: 100px;
  line-height: 25px;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 12.5px;
  cursor: pointer;
  color: rgb(12, 114, 195);
  float: left;
}
.phoneloginselnopho {
  height: 25px;
  width: 135px;
  line-height: 25px;
  margin-top: 10px;
  margin-left: 215px;
  font-size: 12px;
  cursor: pointer;
  color: rgb(153, 153, 153);
  float: left;
}
// 登录弹窗选择登陆方式样式-----------------
.selloginup {
  height: 210px;
  width: 450px;
  // background: blueviolet;
}
.selloginupleft {
  height: 190px;
  width: 250px;
  // background: yellowgreen;
  border-right: 1px dotted rgb(204, 204, 204);
  float: left;
}
.selloginupleftimg {
  height: 135px;
  width: 200px;
  margin-left: 20px;
  background: url(../image/loginimg.jpg);
  background-size: length(100%, 100%);
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center, center;
}
/deep/.el-butt1 {
  height: 30px;
  // line-height: 30px;
  width: 200px;
  margin-left: 20px;
  margin-top: 20px;
  background: rgb(244, 244, 244);
  color: rgb(51, 51, 51);
  font-size: 13px;
  padding-top: 8px;
}
.selloginupright {
  height: 190px;
  width: 190px;
  // background: yellowgreen;
  float: left;
}
.selloginuprightphone {
  height: 40px;
  width: 150px;
  // background: yellow;
  margin-left: 30px;
  margin-top: 20px;
}
.selloginuprightphoneimg {
  float: left;
  height: 30px;
  width: 30px;
  background: url(../image/shouji1.png);
  background-size: length(100%, 100%);
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center, center;
  cursor: pointer;
  border-radius: 17px;
  border: 2px solid rgba(223, 223, 223, 0.8);
}
.selloginuprightphonetitle {
  float: left;
  height: 30px;
  line-height: 30px;
  margin-left: 10px;
  font-size: 12px;
  cursor: pointer;
}
.selloginuprightemail {
  height: 40px;
  width: 150px;
  // background: yellow;
  margin-left: 26px;
  margin-top: 20px;
}
.selloginuprightemailimg {
  float: left;
  height: 40px;
  width: 40px;
  background: url(../image/emaillogin.jpg);
  background-size: length(100%, 100%);
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center, center;
  cursor: pointer;
  // border-radius: 20px;
  // border: 1px solid rgb(223, 223, 223);
}
.selloginuprightemailtitle {
  float: left;
  font-size: 12px;
  height: 40px;
  line-height: 40px;
  margin-left: 10px;
  cursor: pointer;
}
.sellogindown {
  // width: 450px;
  width: 100%;
  height: 60px;
  // background: yellowgreen;
}
.sellogindowntiaokuan {
  float: left;
  height: 20px;
  width: 283px;
  margin-left: 20px;
  // background: yellow;
}
.sellogindowntiaokuanbox {
  float: left;
  margin-top: -1px;
}
.sellogindownargee {
  font-size: 12px;
  color: rgb(153, 153, 153);
  float: left;
  height: 20px;
  line-height: 20px;
  margin-left: 3px;
}
.sellogindownclauseout {
  font-size: 12px;
  color: rgb(80, 125, 175);
  float: left;
  height: 20px;
  line-height: 20px;
  cursor: pointer;
}
.sellogindownclausein {
  font-size: 12px;
  color: rgb(80, 125, 175);
  float: left;
  height: 20px;
  line-height: 20px;
  text-decoration: underline;
  cursor: pointer;
}
// .sellogindownchild {
//   font-size: 12px;
//   color: rgb(80, 125, 175);
//   float: left;
//   height: 20px;
//   line-height: 20px;
//   cursor: pointer;
// }
// sellogindownserve">《服务条款》</div>
//               <div class="sellogindownprivacy">《隐私政策》</div>
//               <div class="sellogindownchild"
.sellogindownma {
  float: left;
  height: 50px;
  width: 50px;
  // background: green;
  margin-left: 404px;
  margin-top: -10px;
  background: url(../image/ma.jpg);
  background-size: length(100%, 100%);
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center, center;
  cursor: pointer;
}
// 登录弹窗基础样式-----------------
.logindialog {
  margin-top: 100px;
}
.loginframe {
  // height: 300px;
  width: 100%;
  // background: yellowgreen;
}
/deep/.el-dialog__header {
  // margin: 0px;
  padding: 0px;
  padding-left: 5%;
  height: 40px;
  line-height: 40px;
  width: 95%;
  background: rgb(45, 45, 45);
}
/deep/.el-dialog__title {
  color: rgb(255, 255, 255);
  font-size: 14px;
}
/deep/.el-dialog__headerbtn {
  top: 10px;
  right: 10px;
}
/deep/.el-dialog__body {
  padding: 0px;
  padding-top: 20px;
}
//登陆弹窗样式结束----------------------------------
.maintop {
  width: 100%;
  height: 70px;
  background: rgb(36, 36, 36);
}
.maintopcenter {
  // float: left;
  width: 1100px;
  margin: auto;
}
.maintoptitle {
  height: 100%;
  width: 165px;
  // margin-left: 13.3%;
  float: left;
  line-height: 70px;
  font-size: 22px;
  // text-indent: 1px;
  letter-spacing: 2px;
  color: rgba(244, 244, 244, 0.8);
  cursor: pointer;
}
.maintoptitleimg {
  width: 40px;
  height: 40px;
  background: greenyellow;
  float: left;
  margin-top: 15px;
  // margin-left: 5px;
  margin-right: 5px;
  background: url(../image/title.jpg);
  background-size: length(100%, 100%);
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center, center;
  cursor: pointer;
  // background-attachment: fixed;
}
.maintoplink {
  height: 100%;
  width: 500px;
  margin-left: 10px;
  float: left;
  display: flex;
  color: rgb(193, 196, 197);
  div {
    flex: 1;
    text-align: center;
    line-height: 70px;
    // color: rgb(193, 196, 197);
    font-size: 14px;
    cursor: pointer;
  }
}
.maintoplinksel {
  color: white;
  background: rgb(0, 0, 0);
}

.maincenter {
  width: 100%;
  height: 5px;
  background: rgb(194, 12, 12);
  float: left;
}
.maintopseek {
  float: left;
  height: 40px;
  width: 180px;
  // background: red;
  margin-top: 20px;
  margin-left: 90px;
  z-index: 1;
  // border-radius: 20px;
  // position: relative;
}
.maintopseekicon {
  z-index: 3;
  height: 20px;
  width: 20px;
  margin-left: 7px;
  margin-top: 5.5px;
  background: yellowgreen;
  position: absolute;
  background: url(../image/selicon.png);
  background-size: length(100%, 100%);
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center, center;
}
/deep/.el-input__inner {
  border-radius: 20px;
  // height: 30px;
  width: 160px;
  padding-left: 30px;
}
.maintopauthor {
  height: 30px;
  width: 90px;
  float: left;
  // background: yellowgreen;
  margin-top: 20px;
  border-radius: 20px;
  border: 1px solid rgb(79, 79, 79);
  color: rgb(172, 204, 193);
  line-height: 30px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
}
.maintopauthorin {
  height: 30px;
  width: 90px;
  float: left;
  // background: yellowgreen;
  margin-top: 20px;
  border-radius: 20px;
  border: 1px solid rgb(204, 204, 204);
  color: rgb(255, 255, 255);
  line-height: 30px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
}
.maintopuser {
  height: 30px;
  width: 30px;
  float: left;
  // background: yellowgreen;
  margin-top: 20px;
  margin-left: 15px;
  line-height: 30px;
}
.maintopuserunlogin {
  font-size: 13px;
  color: rgb(120, 120, 120);
  cursor: pointer;
}
.maintopuserlogin {
  cursor: pointer;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  // background: blueviolet;
  // background: url(titleimg);
  background-size: length(100%, 100%);
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center, center;
}
//新加内容 ， 布局未测试
.wangzhantiaokuan {
  float: left;
  height: 100px;
  width: 100%;
  // background-color: yellow;
}
.beianhao {
  width: 1130px;
  margin: 0px auto;
  text-align: center;
}
</style>

