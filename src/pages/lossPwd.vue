<template>
  <div @touchmove.prevent>
    <m-header :title="title"></m-header>

    <div class="maincontainer">
      <div class="content">
        <form @submit.prevent="submit">
          <div>
            <div class="top">
              <input type="number" class="input1" v-model="user.num" maxlength="11" placeholder="请输入正确的手机号码" @input="inputFuction">
              <el-button class="btn" type="primary">获取验证码</el-button>
            </div>
            <div class="bottom">
              <input class="input" v-model="user.verify" type="text" maxlength="20" placeholder="请输入验证码" @input="inputFuction">
              <input class="input" v-model="user.newpwd1" type="password" maxlength="18" placeholder="请输入6-18位新密码" @input="inputFuction">
              <input class="input" v-model="user.newpwd2" type="password" maxlength="18" placeholder="确认输入" @input="inputFuction">
            </div>
          </div>
          <el-button v-if="disabled" :disabled="disabled" class="btnEnable" type="primary" native-type="submit">确认修改</el-button>
          <el-button v-else :disabled="disabled" class="btnDefault" type="primary" native-type="submit">确认修改</el-button>
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
  color: RGB(229, 164, 153);
  font-size: 12px;
}

.maincontainer {
  background-image: url('../../static/images/login/Passwordbg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: absolute;
  top:0px;
  .content {
    #bundle>.juzhong;
    margin-top: 20%;
    flex-direction: column;
    .top {
      margin-top: 20%;
      display: flex;
      flex-direction: row;
      .input1 {
        background-color: transparent;
        background-image: url('../../static/images/login/a4.png');
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
        background-image: url('../../static/images/login/a2.png');
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
import mHeader from '../components/hearder/Hearder';
export default {
  name: 'lossPwdVC',
  data() {
    return {
      title: {
        text: "忘记密码",
        showBack: true
      },
      user: {
        num: '',
        verify: '',
        newpwd1: '',
        newpwd2: '',
      },
      disabled: true,
    };
  },
  methods: {
    inputFuction() {
      if (this.user.num.length > 0 && this.user.verify.length > 0 && this.user.newpwd1.length > 0 && this.user.newpwd2.length > 0) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },

    submit: function(event) {

      var formData = JSON.stringify(this.user); // 这里才是你的表单数据
      console.log(formData);

      // this.$http.post('/path/to', formData).then((response) => {
      //     // success callback
      // }, (response) => {
      //     // error callback
      // });

    }
  },
  components: {
    mHeader
  },
}
</script>