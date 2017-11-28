<template>
  <div @touchmove.prevent>
    <m-header :title="title"></m-header>
    
    <div class="top">
        <div class="btnview">
            <!-- <el-button class="btnDefault">sfaf</el-button>
            <el-button class="btnDefault">sfaf</el-button> -->
            <el-button :class="{ 'btnDefault' : isA, 'btnEnable': !isA}" type="primary" @click="btnClick">手机注册</el-button>
            <el-button :class="{ 'btnEnable' : isA, 'btnDefault': !isA}" type="primary" @click="btnClick">用户名注册</el-button>
        </div>
    </div>

    <leftRegist v-show="!isA"></leftRegist>
    <rightRegist v-show="isA"></rightRegist>

  </div>
</template>

<style lang="less" scoped>
.top {
  width: 100%;
  height: 100px;
  background-image: url("../../static/images/rgtopbg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  margin-top: 44px;
  margin-bottom: -5px;
  .btnview {
    width: 100%;
    bottom: 6px;
    position: absolute;
    display: flex;
    justify-content: space-around;
    .btnDefault {
      width: 40%;
      height: 100%;
      background-color: RGBA(0, 0, 0, 0);
      border: 0;
      color: #ffffff66;
      font-size: 16px;
      border-radius: 0;
      //   border-bottom: solid #fff 5px;
    }
    .btnEnable {
      //   width: 20%;
      width: 40%;
      height: 100%;
      background-color: RGBA(0, 0, 0, 0);
      border: 0;
      color: #fff;
      font-size: 16px;
      border-radius: 0;
      border-bottom: solid #fff 5px;
    }
  }
}
</style>


<script>
import mHeader from "../components/hearder/Hearder";
import leftRegist from "../components/regist/leftregist1";
import rightRegist from "../components/regist/rightregist1";

export default {
  name: "registVC",
  data() {
    return {
      title: {
        text: "注册",
        showBack: true
      },
      isA: false
    };
  },
  created() {
    if (localStorage.sid) {
    } else {
      // this.$router.push({
      //   path: '/XZcaizhong'
      // })
      localStorage.sid = "2";
      localStorage.czname = "北京pk10";
    }
  },
  components: {
    mHeader,
    leftRegist,
    rightRegist
  },
  methods: {
    btnClick(event) {
      this.isA = !this.isA;
    }
  }
};
</script>
