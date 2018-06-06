<template>
    <div class="main">
        <m-header :title="title"></m-header>
        <div class="main">
            <div class="line">
            </div>
            <input class="input1" v-model="msg.title" placeholder="请输入标题" type="text" @input="inputFuction">
            <div class="line">
            </div>
            <el-input class="input2" :rows="6" v-model="msg.content" placeholder="请输入反馈内容" type="textarea" @input="inputFuction"></el-input>
            <div>
                <el-button v-if="disabled" :disabled="disabled" class="btnEnable" type="text" @click="btnClick">提交</el-button>
                <el-button v-else :disabled="disabled" class="btnDefault" type="text" @click="btnClick">提交</el-button>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.main {
  display: flex;
  flex-direction: column;
  .line {
    background: #ededed;
    height: 10px;
  }
  .input1 {
      outline: none;
    margin: 10px 0px;
    height: 30px;
  }
  .btnDefault {
    margin-top: 30px;
    width: 50%;
    background-image: url("../../../static/images/btnBG.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: white;
  }

  .btnEnable {
    margin-top: 30px;
    width: 50%;
    background-image: url("../../../static/images/btnBG.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: gray;
  }
}
</style>

<script>
import mHeader from "../../components/hearder/Hearder";
import sha256 from "../../util/sha256";
export default {
  data() {
    return {
      title: {
        text: "意见反馈",
        showBack: true
      },
      msg: {
        title: "",
        content: ""
      },
      disabled: true
    };
  },
  components: {
    mHeader
  },
  methods: {
    inputFuction() {
      if (this.msg.title.length > 0 && this.msg.content.length > 0) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    btnClick() {
      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=Feedback" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        "&Title=" +
        this.msg.title +
        "&Message=" +
        this.msg.content +
        tokenCode;
      let data = new FormData();
      data.append("Action", "Feedback");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("Title", this.msg.title);
      data.append("Message", this.msg.content);
      data.append("Sign", sha256.sha256(signStr).toUpperCase());

      this.$http
        .post(this.global.url, data)
        .then(res => {
          // this.$router.go(-1);
        })
        .catch(error => {
          console.log(error);
        });
      this.msg.title = null;
      this.msg.content = null;
      this.disabled = true;
    }
  }
};
</script>
