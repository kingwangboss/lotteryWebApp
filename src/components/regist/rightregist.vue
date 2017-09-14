<template>
  <div class="maincontainer">
    <div class="content">
      <form @submit.prevent="submit">
        <div>
          <input class="input" v-model="user.name" type="text" maxlength="20" placeholder="请输入用户名" @input="inputFuction">
          <input class="input" v-model="user.newpwd1" type="password" maxlength="18" placeholder="请输入密码" @input="inputFuction">
          <input class="input" v-model="user.newpwd2" type="password" maxlength="18" placeholder="请确认密码" @input="inputFuction">
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
    align-items: middle;
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
  height: 90%;
  position: absolute;
  #bundle>.juzhong;
  .content {
    width: 70%;
    margin-top: 20%;
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
import { Toast, MessageBox } from 'mint-ui'
export default {
  data() {
    return {
      user: {
        name: '',
        newpwd1: '',
        newpwd2: '',
        vcode: '',
      },
      disabled: true,
    };
  },
  
  methods: {
    inputFuction() {
      if (this.user.name.length > 0 && this.user.newpwd1.length > 0 && this.user.newpwd2.length > 0) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },

    submit: function(event) {

      if (this.user.newpwd1 === this.user.newpwd2) {
        var formData = JSON.stringify(this.user); // 这里才是你的表单数据
        console.log(formData);

        var that = this;
        let data = new FormData();
        data.append('Action', 'GetVCode');
        data.append('SID', localStorage.sid);
        this.$http.post("https://ycwidx.cpnet.com", data).then(res => {
          console.log(res);
          this.user.vcode = res.data.Data;

          let data1 = new FormData();
          data1.append('Action', 'UserNameReg');
          data1.append('AppVersion', '1.0');
          data1.append('SID', localStorage.sid);
          data1.append('UserName', that.user.name);
          data1.append('Pwd', that.user.newpwd2);
          data1.append('VCode', that.user.vcode)
          data1.append('AppType', "4");
          data1.append('AppCode', 'YCW')
          that.$http.post('https://ycwidx.cpnet.com', data1).then(res => {
            console.log(res)
            if (res) {
              localStorage.uid = res.data.Data.UID;
              localStorage.AuthTypeName = res.data.Data.AuthTypeName;
              localStorage.SiteUrl = res.data.Data.SiteUrl;
              localStorage.AuthType = res.data.Data.AuthType;
              localStorage.Username = res.data.Data.NickName;
              localStorage.Token = res.data.Data.Token;
              localStorage.PayType = res.data.Data.PayType;
              localStorage.tokenCode = sha256.sha256(res.data.Data.Token + that.user.newpwd2).toUpperCase()
              that.$router.push({
                path: "/planVC"
              })
            }
          }).catch(error => {
            console.log(error);
          });
        })
      } else {
        MessageBox({
          title: '提示',
          message: '两次输入密码不同，请重新输入',
          showCancelButton: false,
        })
      }

    }
  },
}
</script>
