<template>
  <div class="maincontainer" @touchmove.prevent>
    <div class="content">
      <form @submit.prevent="submit">
        <div>
          <input class="input" v-model="mobile.num" type="text" maxlength="20" placeholder="请输入手机号码" @input="inputFuction">
          <div class="top">
            <input type="number" class="input1" v-model="mobile.verify" maxlength="11" placeholder="请输入验证码" @input="inputFuction">
            <el-button class="btn" type="primary" @click="getVcode">获取验证码</el-button>
          </div>
          <div class="bottom">

            <input class="input" v-model="mobile.newpwd1" type="password" maxlength="18" placeholder="请输入密码" @input="inputFuction">
            <input class="input" v-model="mobile.newpwd2" type="password" maxlength="18" placeholder="请确认密码" @input="inputFuction">
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
      background-color: transparent;
      background-image: url('../../../static/images/login/a2.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      height: 44px;
      line-height: 44px;
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
        background-color: transparent;
        background-image: url('../../../static/images/login/a4.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 44px;
        line-height: 44px;
        width: 100%;
        padding-left: 10px;
        font-size: 12px;
        color: white;
      }
      .btn {
        // #bundle>.juzhong;
        margin-left: 20px;
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
        height: 44px;
        line-height: 44px;
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
      this.$http.post("https://ycwidx.cpnet.com", data).then(res => {
        console.log(res);
        this.mobile.vcode = res.data.Data;

        let data1 = new FormData();
        data1.append('Action', 'SendRegSMS');
        data1.append('SID', localStorage.sid);
        data1.append('Mobile', that.mobile.num);
        data1.append('AppType', '4');
        data1.append('VCode', that.mobile.vcode);
        that.$http.post('https://ycwidx.cpnet.com', data1).then(res => {
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
      data.append('Pwd', this.mobile.newpwd2);
      data.append('AppType', '4')
      data.append('Pwd', this.mobile.newpwd2);
      data.append('SMSCode', this.mobile.verify)
      data.append('AppCode', 'YCW');
      this.$http.post('https://ycwidx.cpnet.com', data).then(res => {

        if (res) {
          localStorage.uid = res.data.Data.UID;
          localStorage.AuthTypeName = res.data.Data.AuthTypeName;
          localStorage.SiteUrl = res.data.Data.SiteUrl;
          localStorage.AuthType = res.data.Data.AuthType;
          localStorage.Username = res.data.Data.NickName;
          localStorage.Token = res.data.Data.Token;
          localStorage.PayType = res.data.Data.PayType;
          localStorage.tokenCode = sha256.sha256(res.data.Data.Token + that.user.newpwd2).toUpperCase()
          this.$router.push({
            path: "/planVC"
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
