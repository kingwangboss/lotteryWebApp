<template>
  <div class="maincontainer" @touchmove.prevent>
    <div class="content">
      <form @submit.prevent="submit">
        <div>
          <input class="input" v-model="user.name" type="text" maxlength="20" placeholder="请输入用户名" @input="inputFuction">
          <input class="input" v-model="user.num" type="number" maxlength="11" onkeyup="this.value=this.value.replace(/\D/g,'')" placeholder="安全手机" @input="inputFuction">
          <input class="input" v-model="user.newpwd1" type="password" maxlength="18" placeholder="请输入密码" @input="inputFuction">
          <input class="input" v-model="user.newpwd2" type="password" maxlength="18" placeholder="请确认密码" @input="inputFuction">
          <div style="display:flex; align-items: middle;">
            <input style="width:50%,margin-top:0px;" class="input" v-model="user.yanzhengma" type="text" maxlength="4" placeholder="验证码" @input="inputFuction">
            <img style="margin-top:20px;margin-left:10px;" :src="user.imgurl" alt="" @click="getData()">
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
  height: 100%;
  position: fixed;
  #bundle>.juzhong;
  .content {
    width: 70%;
    margin-top: 10%;
    flex-direction: column;
    .input {
      outline: none;
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
        num: '',
        newpwd1: '',
        newpwd2: '',
        vcode: '',
        imgurl: '',
        yanzhengma: '',
      },
      disabled: true,
    };
  },
  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      let data = new FormData();
      data.append('Action', 'GetImgVCode');
      this.$http.post("https://ycwidx.cpnet.com", data).then(res => {
        console.log(res);
        this.user.vcode = res.data.Data.token;
        this.user.imgurl = "https://ycwidx.cpnet.com" + res.data.Data.imgpath;
      }).catch(error => {
        console.log(error);
      });
    },

    inputFuction() {
      if (this.user.name.length > 0 && this.user.newpwd1.length > 0 && this.user.newpwd2.length > 0 && this.user.num.length > 0 && this.user.yanzhengma.length > 0) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },

    submit: function(event) {
      this.getData();
      
      if (this.user.newpwd1 === this.user.newpwd2) {
        var formData = JSON.stringify(this.user); // 这里才是你的表单数据
        console.log(formData);

        var that = this;

        let data1 = new FormData();
        data1.append('Action', 'UserNameReg2');
        data1.append('AppVersion', '1.0');
        data1.append('SID', localStorage.sid);
        data1.append('UserName', that.user.name);
        data1.append('Pwd', sha256.sha256(this.user.newpwd2).toUpperCase());
        data1.append('ImgCode', that.user.vcode + that.user.yanzhengma)
        data1.append('SafeMobile', that.user.num)
        data1.append('AppType', "4");
        data1.append('AppCode', 'YCW')
        localStorage.pwd = sha256.sha256(this.user.newpwd2).toUpperCase()
        that.$http.post('https://ycwidx.cpnet.com', data1).then(res => {
          console.log(res)
          if (res) {
            localStorage.isLogin = true;

            localStorage.uid = res.data.Data.UID;
            localStorage.AuthTypeName = res.data.Data.AuthTypeName;
            localStorage.SiteUrl = res.data.Data.SiteUrl;
            localStorage.AuthType = res.data.Data.AuthType;
            localStorage.Username = res.data.Data.NickName;
            localStorage.Token = res.data.Data.Token;
            localStorage.PayType = res.data.Data.PayType;
            localStorage.tokenCode = sha256.sha256(res.data.Data.Token + localStorage.pwd).toUpperCase()

            localStorage.user_name = this.user.name;
            localStorage.user_pwd = this.user.newpwd1;
            that.$router.push({
              path: "/"
            })
          }
        }).catch(error => {
          console.log(error);
        });
        this.user.yanzhengma = null;
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
