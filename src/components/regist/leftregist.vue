<template>
  <div class="maincontainer" @touchmove.prevent>
    <div class="content">
      <form @submit.prevent="submit">
        <div>
          <!-- <input class="input" v-model="mobile.num" type="text" maxlength="11" onkeyup="this.value=this.value.replace(/\D/g,'')" placeholder="请输入手机号码" @input="inputFuction"> -->
          <div class="main">
                            <img class="line1" src="../../../static/images/zuo.png">
                            </img>
                            <div class="line21">
                              <input class="line22" v-model="mobile.num" type="text" maxlength="11" onkeyup="this.value=this.value.replace(/\D/g,'')" placeholder="请输入手机号码" @input="inputFuction">
                              </input>
                            </div>
                            <img class="line3" src="../../../static/images/you.png">
                            </img>
          </div>

          <div class="top">
            <!-- <input type="number" class="input1" v-model="mobile.verify" maxlength="11" placeholder="请输入验证码" @input="inputFuction"> -->
            <div class="main">
                              <img class="line1" src="../../../static/images/zuo.png">
                              </img>
                              <div class="line21" style="width:50%">
                                <input class="line22" type="number" v-model="mobile.verify" maxlength="11" placeholder="请输入验证码" @input="inputFuction">
                                </input>
                              </div>
                              <img class="line3" src="../../../static/images/you.png">
                              </img>
            </div>
            <el-button class="btn" type="primary" @click="getVcode">获取验证码</el-button>
          </div>
          <div class="bottom">

            <!-- <input class="input" v-model="mobile.newpwd1" type="password" maxlength="18" placeholder="请输入密码" @input="inputFuction">
            <input class="input" v-model="mobile.newpwd2" type="password" maxlength="18" placeholder="请确认密码" @input="inputFuction"> -->
            <div class="main">
                <img class="line1" src="../../../static/images/zuo.png">
                </img>
                <div class="line21">
                  <input class="line22" v-model="mobile.newpwd1" type="password" maxlength="18" placeholder="请输入密码" @input="inputFuction">
                  </input>
                </div>
                <img class="line3" src="../../../static/images/you.png">
                </img>
            </div>

            <div class="main">
                <img class="line1" src="../../../static/images/zuo.png">
                </img>
                <div class="line21">
                  <input class="line22" v-model="mobile.newpwd2" type="password" maxlength="18" placeholder="请确认密码" @input="inputFuction">
                  </input>
                </div>
                <img class="line3" src="../../../static/images/you.png">
                </img>
            </div>
          </div>
        </div>
        <el-button v-if="disabled" :disabled="disabled" class="btnEnable" type="primary" native-type="submit">注册</el-button>
        <el-button v-else :disabled="disabled" class="btnDefault" type="primary" native-type="submit">注册</el-button>
      </form>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main {
    display: flex;
    flex-direction: row;
    // margin: 2px;
    line-height: 38px;
    color: #fffde4;
    position: relative;
    margin-bottom: 10%;
    //   background: red;
    .line1 {
      background-repeat: no-repeat;
      height: 40px;
      width: 19px;
    }
    .line21 {
      background: url("../../../static/images/zhong.png");
      background-repeat: repeat;
      font-size: 12px;
      height: 40px;
      width: 225px;
      color: white;
    //   padding:0px -5px 0px -5px;
    }
    .line22 {
        outline: none;
      font-size: 12px;
      height: 40px;
      width: 225px;
      color: white;
      // padding-left: 15px;
      background: rgba(255,255,255,0);
    //   padding:0px -5px 0px -5px;
    }
    
    .line3 {
      background-repeat: no-repeat;
      height:40px;
      width: 19px;
    }


}
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
  color: RGB(229, 164, 153);
  font-size: 13px;
}

.maincontainer {
  background-image: url('../../../static/images/login/Register-bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: fixed;
  .content {
    #bundle>.juzhong;
    margin-top: 15%;
    flex-direction: column;
    .input {
      // margin-top: 10%;
      outline: none;
      background-color: transparent;
      background-image: url('../../../static/images/login/a2.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      // height: 44px;
      // line-height: 44px;
      padding: 13px;
      width: 100%;
      padding-left: 10px;
      font-size: 12px;
      color: white;
    }
    .top {
      margin-top: 10%;
      display: flex;
      flex-direction: row;
      .input1 {
        outline: none;
        background-color: transparent;
        background-image: url('../../../static/images/login/a4.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        // height: 44px;
        // line-height: 44px;
        padding: 10px;
        width: 100%;
        padding-left: 10px;
        font-size: 12px;
        color: white;
      }
      .btn {
        // #bundle>.juzhong;
        margin-left: -70px;
        height: 40px;
        width: 40%;
        border-radius: 5px;
        background-color: RGB(251, 230, 231);
        border: 0;
        color: red;
        font-size: 12px;
        align-content: center;
      }
    }
    .bottom {
      display: flex;
      flex-direction: column;
      .input {
        margin-top: 10%;
        background-color: transparent;
        background-image: url('../../../static/images/login/a2.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        // height: 44px;
        // line-height: 44px;
        padding: 13px;
        width: 100%;
        padding-left: 10px;
        font-size: 12px;
        color: white;
      }
    }

    .btnDefault {
      margin-top: 30px;
      height: 40px;
      width: 100%;
      border-radius: 40px;
      background-color: RGB(251, 230, 231);
      border: 0;
      color: red;
      font-size: 18px;
    }
    .btnEnable {
      margin-top: 30px;
      height: 40px;
      width: 100%;
      border-radius: 40px;
      background-color: RGB(240, 144, 156);
      border: 0;
      color: #fff;
      font-size: 18px;
    }
  }
}
</style>


<script>
import sha256 from '../../util/sha256'
export default {
  data() {
    return {
      mobile: {
        num: '',
        verify: '',
        newpwd1: '',
        newpwd2: '',
        vcode: '',
      },
      disabled: true,
    };
  },
  methods: {
    inputFuction() {
      if (this.mobile.num.length > 0 && this.mobile.verify.length > 0 && this.mobile.newpwd1.length > 0 && this.mobile.newpwd2.length > 0) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },

    getVcode() {

      var that = this;
      let data = new FormData();
      data.append('Action', 'GetVCode');
      data.append('SID', localStorage.sid);
      this.$http.post(this.global.url, data).then(res => {
        console.log(res);
        this.mobile.vcode = res.data.Data;

        let data1 = new FormData();
        data1.append('Action', 'SendRegSMS');
        data1.append('SID', localStorage.sid);
        data1.append('Mobile', that.mobile.num);
        data1.append('AppType', '4');
        data1.append('VCode', that.mobile.vcode);
        that.$http.post(this.global.url, data1).then(res => {
          console.log(res);
        }).catch(error => {
          console.log(error);
        });
      })
    },

    submit: function(event) {

      var formData = JSON.stringify(this.user); // 这里才是你的表单数据
      console.log(formData);

      let data = new FormData();
      data.append('Action', 'MobileReg');
      data.append('SID', localStorage.sid);
      data.append('AppVersion', '1.0');
      data.append('Mobile', this.mobile.num);
      data.append('AppType', this.global.AppType)
      data.append('Pwd',  sha256.sha256(this.mobile.newpwd2).toUpperCase());
      data.append('SMSCode', this.mobile.verify)
      data.append('AppCode', this.global.AppCode);
      localStorage.pwd = sha256.sha256(this.mobile.newpwd2).toUpperCase()
      this.$http.post(this.global.url, data).then(res => {

        if (res) {
          localStorage.isLogin = true;

          localStorage.uid = res.data.Data.UID;
          localStorage.AuthTypeName = res.data.Data.AuthTypeName;
          localStorage.SiteUrl = res.data.Data.SiteUrl;
          localStorage.AuthType = res.data.Data.AuthType;
          localStorage.Username = res.data.Data.NickName;
          localStorage.Token = res.data.Data.Token;
          localStorage.PayType = res.data.Data.PayType;
          localStorage.tokenCode = sha256.sha256(res.data.Data.Token + sha256.sha256(this.mobile.newpwd2).toUpperCase()).toUpperCase()

          localStorage.user_name = this.mobile.num;
          localStorage.user_pwd = this.mobile.newpwd1;
          this.$router.push({
            path: "/"
          })
        }
      }).catch(error => {
        console.log(error);
      });

      // this.$http.post('/path/to', formData).then((response) => {
      //     // success callback
      // }, (response) => {
      //     // error callback
      // });

    }
  },
}
</script>
