<template>
  <div class="maincontainer">
    <div class="content">
      <form @submit.prevent="submit">
        <div >
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
  height: 100%;
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
export default {
  data() {
    return {
      user: {
        name: '',
        newpwd1: '',
        newpwd2: '',
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

      var formData = JSON.stringify(this.user); // 这里才是你的表单数据
      console.log(formData);

      // this.$http.post('/path/to', formData).then((response) => {
      //     // success callback
      // }, (response) => {
      //     // error callback
      // });

    }
  },
}
</script>
