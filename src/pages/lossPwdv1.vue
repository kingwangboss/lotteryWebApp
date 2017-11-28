<template>
    <div @touchmove.prevent>
        <m-header :title="title"></m-header>

        <div class="maincontainer">
            <div class="content">
                <form @submit.prevent="submit">
                    <div class="bottom">
                        <!-- <input class="input" v-model="user.username" type="text" maxlength="20" placeholder="请输入账号" @input="inputFuction"> -->
                        <div class="div-bor">
                            <i class="icon-user"></i>
                            <input class="input" v-model="user.username" type="text" maxlength="20" placeholder="请输入账号" @input="inputFuction"></input>
                        </div>
                        

                        <div style="display:flex; align-items: middle;">
                            <!-- <input style="width:50%,margin-top:0px;" class="input" v-model="user.verify" type="text" maxlength="4" placeholder="验证码" @input="inputFuction"> -->
                            
                            <div class="div-bor1">
                                <i class="icon-verify"></i>
                                <input class="input1" type="text" v-model="user.verify" maxlength="4" placeholder="验证码" @input="inputFuction">
                            </div>
                            <img style="margin-left:15px;width:100px;height:40px" :src="user.imgurl" alt="" @click="getData()">
                        </div>
                    </div>
                    <el-button v-if="disabled" :disabled="disabled" class="btnEnable" type="primary" native-type="submit">下一步</el-button>
                    <el-button v-else :disabled="disabled" class="btnDefault" type="primary" native-type="submit">下一步</el-button>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
#bundle {
  .juzhong {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
}

::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #8c8c8c;
  font-size: 13px;
}

.maincontainer {
  background-image: url("../../static/images/login/Register-bg1.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  .content {
    #bundle > .juzhong;
    margin-top: 20%;
    flex-direction: column;

    .bottom {
      display: flex;
      flex-direction: column;
      width: 270px;
      .div-bor {
        position: relative;
        width: 270px;
        margin-bottom: 10%;
        height: 40px;
        line-height: 42px;
        border: solid #dedede 1px;
        border-radius: 4px;
        background-color: white;
        .input {
          background: red;
          outline: none;
          background-color: transparent;
          margin-top: 3px;
          width: 100%;
          padding-left: 40px;
          font-size: 16px;
          color: black;
        }
      }
      .div-bor1 {
        position: relative;
        width: 155px;
        margin-bottom: 10%;
        height: 40px;
        line-height: 42px;
        border: solid #dedede 1px;
        border-radius: 4px;
        background-color: white;
        .input1 {
          outline: none;
          background-color: transparent;
          margin-top: 3px;
          padding-left: 40px;
          font-size: 16px;
          color: black;
        }
      }
    }

    .icon-user {
      position: absolute;
      left: 12px;
      top: 11px;
      z-index: 5;
      background-image: url("../../static/images/login/user.png");
      background-size: 70% 70%;
      /*引入图片图片*/
      background-repeat: no-repeat;
      /*设置图片不重复*/
      background-position: 0px 0px;
      /*图片显示的位置*/
      width: 25px;
      /*设置图片显示的宽*/
      height: 28px;
      /*图片显示的高*/
    }

    .icon-verify {
      position: absolute;
      left: 11px;
      top: 11px;
      z-index: 5;
      background-image: url("../../static/images/login/verify.png");
      background-size: 70% 70%;
      /*引入图片图片*/
      background-repeat: no-repeat;
      /*设置图片不重复*/
      background-position: 0px 0px;
      /*图片显示的位置*/
      width: 28px;
      /*设置图片显示的宽*/
      height: 25px;
      /*图片显示的高*/
    }

    .btnDefault {
      margin-top: 15px;
      width: 100%;
    //   border-radius: 40px;
    //   background-color: RGB(251, 230, 231);
      background-image: url(../../static/images/login/anniuE.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      border: 0;
      color: #fff;
      font-size: 18px;
    }
    .btnEnable {
      margin-top: 15px;
      width: 100%;
    //   border-radius: 40px;
    //   background-color: RGB(240, 144, 156);
      background-image: url(../../static/images/login/anniuE.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      border: 0;
      color: #fff;
      font-size: 18px;
    }
  }
}
</style>


<script>
import mHeader from "../components/hearder/Hearder";
export default {
  name: "lossPwdVC",
  data() {
    return {
      title: {
        text: "找回密码",
        showBack: true
      },
      user: {
        username: "",
        verify: "",
        vcode: "",
        imgurl: ""
      },
      disabled: true
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let data = new FormData();
      data.append("Action", "GetImgVCode");
      this.$http
        .post("https://ycwidx.cpnet.com", data)
        .then(res => {
          console.log(res);
          this.user.vcode = res.data.Data.token;
          this.user.imgurl = "https://ycwidx.cpnet.com" + res.data.Data.imgpath;
        })
        .catch(error => {
          console.log(error);
        });
    },
    inputFuction() {
      if (this.user.username.length > 0 && this.user.verify.length > 0) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },

    submit: function(event) {
      this.getData();

      // 请求数据
      let data = new FormData();
      data.append("Action", "QueryUserByAccount");
      data.append("Account", this.user.username);
      data.append("ImgCode", this.user.vcode + this.user.verify);
      localStorage.Username = this.user.username;

      this.$http
        .post("https://ycwidx.cpnet.com", data)
        .then(res => {
          console.log(res);
          if (res.data.Code == "Suc") {
            localStorage.phoneNum = res.data.Data;
            this.$router.push({
              path: "/lossPwdv2"
            });
          } else {
            localStorage.removeItem("phoneNum");
          }
        })
        .catch(error => {
          console.log(error);
        });
      this.user.verify = null;
    }
  },
  components: {
    mHeader
  }
};
</script>