<template>
  <div class="maincontainer" @touchmove.prevent>
    <div class="content">
      <form @submit.prevent="submit">
        <div>
            <div class="div-bor">
                <i class="icon-user"></i>
                <input class="input" v-model="mobile.num" type="text" maxlength="11" onkeyup="this.value=this.value.replace(/\D/g,'')" placeholder="请输入手机号码" @input="inputFuction">
            </div>

          <div class="top">
            <!-- <input type="number" class="input1" v-model="mobile.verify" maxlength="11" placeholder="请输入验证码" @input="inputFuction"> -->
            <div class="div-bor1">
                <i class="icon-verify"></i>
                <input type="text" class="input1" v-model="mobile.verify" maxlength="11" placeholder="请输入验证码" @input="inputFuction">
            </div>
            <el-button class="btn" type="primary" @click="getVcode">获取验证码</el-button>
            
          </div>
          <div class="bottom">

            <div class="div-bor">
                <i class="icon-pwd"></i>
                <input class="input" v-model="mobile.newpwd1" type="password" maxlength="18" placeholder="请输入密码" @input="inputFuction">
            </div>
            <div class="div-bor">
                <i class="icon-pwd"></i>
                <input class="input" v-model="mobile.newpwd2" type="password" maxlength="18" placeholder="请确认密码" @input="inputFuction">
            </div>
            <!-- <input class="input" v-model="mobile.newpwd1" type="password" maxlength="18" placeholder="请输入密码" @input="inputFuction">
            <input class="input" v-model="mobile.newpwd2" type="password" maxlength="18" placeholder="请确认密码" @input="inputFuction"> -->
            
          </div>
        </div>
        <el-button v-if="disabled" :disabled="disabled" class="btnEnable" type="primary" native-type="submit">注册</el-button>
        <el-button v-else :disabled="disabled" class="btnDefault" type="primary" native-type="submit">注册</el-button>
      </form>
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
  background-image: url("../../../static/images/login/Register-bg1.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: fixed;
  .content {
    #bundle > .juzhong;
    margin-top: 10%;
    flex-direction: column;
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

    .icon-user {
      position: absolute;
      left: 12px;
      top: 11px;
      z-index: 5;
      background-image: url("../../../static/images/login/phonenum.png");
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
    .icon-pwd {
      position: absolute;
      left: 12px;
      top: 11px;
      z-index: 5;
      background-image: url("../../../static/images/login/pwd.png");
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
      background-image: url("../../../static/images/login/verify.png");
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

    .top {
      margin-top: 10%;
      display: flex;
      flex-direction: row;

      .btn {
        // #bundle>.juzhong;
        margin-left: 15px;
        height: 40px;
        width: 100px;
        border-radius: 4px;
        background-color: #f0f0f0;
        border: solid #dedede 1px;
        // border: 0;
        color: red;
        font-size: 12px;
        align-content: center;
      }
    }
    .bottom {
      display: flex;
      flex-direction: column;
    }

    .btnDefault {
      margin-top: 30px;
      width: 100%;
    //   border-radius: 40px;
    //   background-color: RGB(251, 230, 231);
      background-image: url(../../../static/images/login/anniuD.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      border: 0;
      color: #fff;
      font-size: 18px;
    }
    .btnEnable {
      margin-top: 30px;
      width: 100%;
    //   border-radius: 40px;
    //   background-color: RGB(240, 144, 156);
      background-image: url(../../../static/images/login/anniuE.png);
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
import sha256 from "../../util/sha256";
export default {
  data() {
    return {
      mobile: {
        num: "",
        verify: "",
        newpwd1: "",
        newpwd2: "",
        vcode: ""
      },
      disabled: true
    };
  },
  methods: {
    inputFuction() {
      if (
        this.mobile.num.length > 0 &&
        this.mobile.verify.length > 0 &&
        this.mobile.newpwd1.length > 0 &&
        this.mobile.newpwd2.length > 0
      ) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },

    getVcode() {
      var that = this;
      let data = new FormData();
      data.append("Action", "GetVCode");
      data.append("SID", localStorage.sid);
      this.$http.post(this.global.url, data).then(res => {
        console.log(res);
        this.mobile.vcode = res.data.Data;

        let data1 = new FormData();
        data1.append("Action", "SendRegSMS");
        data1.append("SID", localStorage.sid);
        data1.append("Mobile", that.mobile.num);
        data1.append("AppType", that.global.AppType);
        data1.append("VCode", that.mobile.vcode);
        that.$http
          .post(this.global.url, data1)
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      });
    },

    submit: function(event) {
      var formData = JSON.stringify(this.user); // 这里才是你的表单数据
      console.log(formData);

      let data = new FormData();
      data.append("Action", "MobileReg");
      data.append("SID", localStorage.sid);
      data.append("AppVersion", this.global.AppVersion);
      data.append("Mobile", this.mobile.num);
      data.append("AppType", this.global.AppType);
      data.append("Pwd", sha256.sha256(this.mobile.newpwd2).toUpperCase());
      data.append("SMSCode", this.mobile.verify);
      data.append("AppCode", this.global.AppCode);
      localStorage.pwd = sha256.sha256(this.mobile.newpwd2).toUpperCase();
      this.$http
        .post(this.global.url, data)
        .then(res => {
          if (res) {
            localStorage.isLogin = true;

            localStorage.uid = res.data.Data.UID;
            localStorage.AuthTypeName = res.data.Data.AuthTypeName;
            localStorage.SiteUrl = res.data.Data.SiteUrl;
            localStorage.AuthType = res.data.Data.AuthType;
            localStorage.Username = res.data.Data.NickName;
            localStorage.Token = res.data.Data.Token;
            localStorage.PayType = res.data.Data.PayType;
            localStorage.tokenCode = sha256
              .sha256(
                res.data.Data.Token +
                  sha256.sha256(this.mobile.newpwd2).toUpperCase()
              )
              .toUpperCase();

            localStorage.user_name = this.mobile.num;
            localStorage.user_pwd = this.mobile.newpwd1;
            this.$router.push({
              path: "/"
            });
          }
        })
        .catch(error => {
          console.log(error);
        });

      // this.$http.post('/path/to', formData).then((response) => {
      //     // success callback
      // }, (response) => {
      //     // error callback
      // });
    }
  }
};
</script>
