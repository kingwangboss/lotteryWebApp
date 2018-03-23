<template>
  <div>
      <m-header :title="title"></m-header>
      <div class="content">
          <div class="center">
              <div class="cell">

              </div>

              <div class="cell" style="background:yellow">

              </div>

              <div class="cell">

              </div>

              <div class="cell">

              </div>
              
          </div>
      </div>
  </div>
</template>

<style lang="less">
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
    .cell {
      padding: 10px 10px;
      width: 150px;
      height: 100px;
      margin: 10px;
      font-size: 4vw;
      border: rgb(254, 232, 233) solid 1px;
      background-color: rgb(255, 244, 245);
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
        suoshuiright: true,
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
