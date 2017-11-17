<template>
    <div @touchmove.prevent>
        <m-header :title="title"></m-header>

        <div class="maincontainer">
            <div class="content">
                <form @submit.prevent="submit">
                    <div class="bottom">
                        <!-- <input class="input" v-model="user.username" type="text" maxlength="20" placeholder="请输入账号" @input="inputFuction"> -->

                        <div class="main">
                            <img class="line1" src="../../static/images/zuo.png">
                            </img>
                            <div class="line21">
                              <input class="line22" v-model="user.username" type="text" maxlength="20" placeholder="请输入账号" @input="inputFuction">
                              </input>
                            </div>
                            <img class="line3" src="../../static/images/you.png">
                            </img>
                        </div>

                        <div style="display:flex; align-items: middle;">
                            <!-- <input style="width:50%,margin-top:0px;" class="input" v-model="user.verify" type="text" maxlength="4" placeholder="验证码" @input="inputFuction"> -->
                            <div class="main">
                              <img class="line1" src="../../static/images/zuo.png">
                              </img>
                              <div class="line21" style="width:50%">
                                <input class="line22" type="text" v-model="user.verify" maxlength="4" placeholder="验证码" @input="inputFuction">
                                </input>
                              </div>
                              <img class="line3" src="../../static/images/you.png">
                              </img>
                            </div>
                            <img style="margin-top:20px;margin-left:-60px;" :src="user.imgurl" alt="" @click="getData()">
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
.main {
    display: flex;
    flex-direction: row;
    // margin: 2px;
    line-height: 38px;
    color: #fffde4;
    position: relative;
    margin-top: 10%;
    //   background: red;
    .line1 {
      background-repeat: no-repeat;
      height: 40px;
      width: 19px;
    }
    .line21 {
      background: url("../../static/images/zhong.png");
      background-repeat: repeat;
      font-size: 12px;
      height: 40px;
      width: 215px;
      color: white;
    //   padding:0px -5px 0px -5px;
    }
    .line22 {
        outline: none;
      font-size: 12px;
      height: 40px;
      width: 215px;
      color: white;
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
  font-size: 12px;
}

.maincontainer {
  background-image: url("../../static/images/login/Passwordbg.png");
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
      .input {
        outline: none;
        margin-top: 10%;
        background-color: transparent;
        background-image: url("../../static/images/login/a2.png");
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
import mHeader from "../components/hearder/Hearder";
export default {
  name: "lossPwdVC",
  data() {
    return {
      title: {
        text: "忘记密码",
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
              path: "/lossPwd"
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