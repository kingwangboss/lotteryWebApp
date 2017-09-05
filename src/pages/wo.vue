<template>
  <div class="maincontainer">
    <div class="userinfo">
      <img class="userinfo-avatar" src="../../static/images/me/User-104.png" background-size="cover"></img>
      <span class="userinfo-nickname">{{nickname}}</span>
    </div>

    <div class="middle">
    </div>

    <div class="bottom">
      <div class="bottom-cell" :style="{width:ojwidth+'px',height:ojwidth+'px'}">
        <img src="../../static/images/me/User-05.png" @click="buyClick"></img>
        <span>购买授权</span>
      </div>
      <div class="bottom-cell" :style="{width:ojwidth+'px',height:ojwidth+'px'}" @click="kefuClick">
        <img src="../../static/images/me/User-07.png"></img>
        <span>在线客服</span>
      </div>
      <div class="bottom-cell" :style="{width:ojwidth+'px',height:ojwidth+'px'}" @click="shouquanClick">
        <img src="../../static/images/me/User-08.png"></img>
        <span>我的授权</span>
      </div>
      <div class="bottom-cell" :style="{width:ojwidth+'px',height:ojwidth+'px'}" @click="XGpwdClick">
        <img src="../../static/images/me/User-09.png"></img>
        <span>密码管理</span>
      </div>
      <div class="bottom-cell" :style="{width:ojwidth+'px',height:ojwidth+'px'}" @click="feedbackClick">
        <img src="../../static/images/me/User-10.png"></img>
        <span>意见反馈</span>
      </div>
      <div class="bottom-cell" :style="{width:ojwidth+'px',height:ojwidth+'px'}" @click="aboutClick">
        <img src="../../static/images/me/User-11.png"></img>
        <span>关于我们</span>
      </div>
    </div>

    <div class="bottom-btndiv">
      <button class="bottom-btn" @click="loginOut">退出登录</button>
    </div>

  </div>
</template>

<style lang="less" scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(229, 87, 77);
}

.userinfo-avatar {
  width: 64px;
  height: 64px;
  margin: 10px;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #fff;
  font-size: 18px;
  padding-bottom: 10px;
}

.middle {
  background: #EDEDED;
  height: 10px;
}

.bottom {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

.bottom-cell {
  width: 124px;
  height: 124px;
  border: 1px solid gray; // border-style: none solid solid none;
  flex-direction: column;
  display: -webkit-flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
}

.bottom-cell img {
  width: 50px;
  height: 50px;
}

.bottom-cell text {
  text-align: center;
  font-size: 26px;
  color: gray;
}

.bottom-btnView {
  width: 100%;
  position: fixed;
  bottom: 10px;
  height: 40px;
  display: flex;
  justify-content: center;
}

.bottom-btn {
  margin-top: 40px;
  margin-bottom: 20px;
  width: 50%;
  height: 40px;
  border-radius: 20px;
  line-height: 35px;
  background-color: rgb(229, 87, 77);
  border-color: rgba(0, 0, 0, 0);
  color: #fff;
}
</style>

<script>
export default {
  components: {
  },
  data() {
    return {
      screenWidth: document.body.clientWidth,
      nickname: localStorage.Username
    }
  },
  mounted() {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }

  },
  methods: {
    loginOut() {
      localStorage.clear();
      this.$router.push({
        path: '/',
      })
    },
    kefuClick() {
      window.location.href = localStorage.QQUrl;
      // window.open();
    },
    shouquanClick() {
      this.$router.push({
        path: "/wo/shouquan"
      })
    },
    XGpwdClick() {
      this.$router.push({
        path: "/wo/XGpwd"
      })
    },
    feedbackClick() {
      this.$router.push({
        path: "/wo/feeback"
      })
    },
    aboutClick() {
      this.$router.push({
        path: "/wo/about"
      })
    },
    buyClick() {
      this.$router.push({
        path: "/buy"
      })
    }
  },
  watch: {
    screenWidth(val) {
      if (!this.timer) {
        this.screenWidth = val
        this.timer = true
        let that = this
        setTimeout(function() {
          that.timer = false
        }, 400)
      }
    }
  },
  computed: {
    ojwidth: {
      // getter
      get: function() {
        var ojwidth;
        var margin;
        var colnum = 3;//列
        colnum = 6 > colnum ? colnum : 6;
        var rownum = 6 / colnum;//行
        margin = 6 > 5 ? 1 : 1;//间距
        ojwidth = (this.screenWidth - (2 * (margin + 0) * colnum)) / colnum;//格子的宽
        return ojwidth;
      },
      // setter
      set: function(newValue) {

      }
    }
  }
}
</script>


