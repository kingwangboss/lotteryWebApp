<template>
  <div>
    <m-header :title="title"></m-header>
      
    <el-button v-for="(item,index) in plandata" :key="item.toString()" type="text" class="btn" :class="{'btnSelect':playtypeold == item}" @click="btnclick(item)">{{item}}
      <img src="../../static/images/you_image.png" class="you_image_select" v-if="playtypeold == item" alt="">
      
    </el-button>

  </div>
</template>

<style lang="less" scoped>
.btn {
  height: 30px;
  align-content: center;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  padding: 0px 20px 0px 20px;
  font-size: 13px;
  color: black;
  // background-size: 100% 100%;
  // background-image: url('../../../static/images/Select-05.png')
  border-radius: 0px;
  border: 1px solid rgb(222, 222, 222);
}
.btnSelect {
  height: 30px;
  line-height: 30px;
  align-content: center;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 20px;
  font-size: 13px;
  color: #f82b56;
  // background-size: 100% 100%;
  // background-image: url('../../../static/images/Select-06.png')
  border-radius: 0px;
  border: 1px solid #f82b56;
}
.you_image_select {
  // width: 20px;
  height: 20px;
  position: relative;
  right: 0px;
  bottom: -8px;
}
.you_image {
  // width: 20px;
  height: 20px;
  position: relative;
  right: 0px;
  bottom: -8px;
}
</style>

<script>
import mHeader from "../components/hearder/Hearder";
import sha256 from "../util/sha256";
export default {
  data() {
    return {
      title: {
        text: "缩水组号",
        suoshuiright: true
      },
      playtypeold:'',
      plandata: "",
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
