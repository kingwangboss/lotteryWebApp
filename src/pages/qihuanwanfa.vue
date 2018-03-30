<template>
  <div>
      <m-header :title="title"></m-header>
      <div class="content">
          <div class="center">
              <div class="cell" v-for="(item,index) in plandata" :key="item.toString()"  @click="btnclick(item)">
                <div style="height:13vw;line-height:13vw;color:#333;font-size:5vw">{{item}}</div>
                <div style="height:7vw;line-height:7vw;background:#fc5c42;color:#fff;font-size:4.5vw">选择</div>
              </div>
          </div>
      </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  background-image: url(../../static/images/bg_02.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 30%;
  position: absolute;
  
}

.center {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 4vw;
    .cell {
      // padding: 10px 10px;
      width: 38vw;
      height: 20vw;
      margin: 2vw;
      font-size: 4vw;
      border: #e3e3e3 solid 1px;
      // border-radius: 2vw;
      background-color: rgb(255, 255, 255);
      color: rgb(135, 135, 135);
      
    }
  }
</style>

<script>
import mHeader from "../components/hearder/Hearder";
import sha256 from "../util/sha256";
export default {
  data() {
    return {
      title: {
        text: "选择玩法",
        suoshuiright: false,
        showBack: true
      },
      playtypeold: "",
      plandata: ""
    };
  },

  components: {
    mHeader
  },

  methods: {
    btnclick(item) {
      this.playtypeold = item;
      localStorage.playtypenew = item;
      localStorage.tempplay = "";

      localStorage.playtype = localStorage.playtypenew;
      if (
        localStorage.playtype == null ||
        localStorage.playtype == "" ||
        localStorage.playtype === "undefined"
      ) {
        Toast({
          message: '请选择玩法',
          position: "bottom",
          duration: 2000
        });
      } else {
        this.$router.go(-1);
      }
    },
    getData() {
      // 请求数据
      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=GetPlayTypes" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        tokenCode;
      let data = new FormData();
      data.append("Action", "GetPlayTypes");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("Sign", sha256.sha256(signStr).toUpperCase());
      this.$http
        .post(localStorage.SiteUrl, data)
        .then(res => {
          this.plandata = res.data.Data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {},
  mounted() {
    this.playtypeold = localStorage.playtype;
    this.getData();
  }
};
</script>
