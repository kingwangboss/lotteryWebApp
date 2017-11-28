<template>
  <div class="maincontainer" @touchmove.prevent>
    <div class="content">
      <form @submit.prevent="submit">
        <div>
          <!-- <input class="input" v-model="user.name" type="text" maxlength="20" placeholder="请输入用户名" @input="inputFuction">
          <input class="input" v-model="user.num" type="number" maxlength="11" onkeyup="this.value=this.value.replace(/\D/g,'')" placeholder="安全手机" @input="inputFuction">
          <input class="input" v-model="user.newpwd1" type="password" maxlength="18" placeholder="请输入密码" @input="inputFuction">
          <input class="input" v-model="user.newpwd2" type="password" maxlength="18" placeholder="请确认密码" @input="inputFuction"> -->
         
            <div class="div-bor">
                <i class="icon-user"></i>
                <input class="input" v-model="user.name" type="text" maxlength="20" placeholder="请输入用户名" @input="inputFuction"></input>
            </div>

            <div class="div-bor">
                <i class="icon-phone"></i>
                <input class="input" v-model="user.num" type="text" maxlength="11" onkeyup="this.value=this.value.replace(/\D/g,'')" placeholder="安全手机" @input="inputFuction"></input>
            </div>

            <div class="div-bor">
                <i class="icon-pwd"></i>
                <input class="input" v-model="user.newpwd1" type="password" maxlength="18" placeholder="请输入密码" @input="inputFuction"></input>
            </div>

            <div class="div-bor">
                <i class="icon-pwd"></i>
                <input class="input" v-model="user.newpwd2" type="password" maxlength="18" placeholder="请确认密码" @input="inputFuction"></input>
            </div>


          
          <!-- <div style="display:flex; align-items: middle;">
            <input style="width:50%,margin-top:0px;" class="input" v-model="user.yanzhengma" type="text" maxlength="4" placeholder="验证码" @input="inputFuction">
            <img style="margin-top:20px;margin-left:10px;" :src="user.imgurl" alt="" @click="getData()">
          </div> -->

            <div class="top">
                <div class="div-bor1">
                    <i class="icon-verify"></i>
                    <input class="input1"  v-model="user.yanzhengma" type="text" maxlength="4" placeholder="验证码" @input="inputFuction"></input>
                </div>
                <img style="margin-left:15px;height:40px" :src="user.imgurl" alt="" @click="getData()">
            </div>
        </div>

        <el-button v-if="disabled" :disabled="disabled" class="btnEnable" type="primary" native-type="submit">注册</el-button>
        <el-button v-else :disabled="disabled" class="btnDefault" type="primary" native-type="submit">注册</el-button>
      </form>
    </div>
  </div>
</template>

<style lang="less" scoped>
.top {
      margin-top: 10%;
      display: flex;
      flex-direction: row;
}

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
  color: #8c8c8c;
  font-size: 13px;
}

.maincontainer {
  background-image: url('../../../static/images/login/Register-bg1.png');
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
    .div-bor {
      position: relative;
    //   width: 270px;
      margin-bottom: 10%;
      height: 40px;
      line-height: 42px;
      border: solid #dedede 1px;
      border-radius: 4px;
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
    //   width: 155px;
      margin-bottom: 10%;
      height: 40px;
      line-height: 42px;
      border: solid #dedede 1px;
      border-radius: 4px;
      .input1 {
        outline: none;
        width: 100%;
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
      background-image: url("../../../static/images/login/user.png");
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
    .icon-phone {
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
    .btnDefault {
      margin-top: 30px;
      width: 100%;
    //   border-radius: 40px;
    //   background-color: RGB(251, 230, 231);
      background-image: url(../../../static/images/login/anniuE.png);
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
