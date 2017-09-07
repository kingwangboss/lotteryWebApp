<template>
  <div>
    <m-header :title="title"></m-header>
    <div class="btnview">
      <el-button :class="{ 'btnDefault' : isA, 'btnEnable': !isA}" type="primary" @click="btnClick">手机注册</el-button>
      <el-button :class="{ 'btnEnable' : isA, 'btnDefault': !isA}" type="primary" @click="btnClick">用户名注册</el-button>
    </div>
    
    <leftRegist v-show="!isA"></leftRegist>
    <rightRegist v-show="isA"></rightRegist>
    
  </div>
</template>

<style lang="less" scoped>
.btnview {
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  .btnDefault {
    margin-left: 0;
    margin-right: 0;
    border-radius:0;
    width: 50%;
    height: 100%;
    background-color: RGB(251, 230, 231);
    background-image: url(../../static/images/login/Register-03.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border: 0;
    color: #B54123;
    font-size: 15px;
  }
  .btnEnable {
    margin-left: 0;
    margin-right: 0;
    border-radius:0;
    width: 50%;
    height: 100%;
    background-color: RGB(251, 230, 231);
    background-image: url(../../static/images/login/Register-02.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border: 0;
    color:white;
    font-size: 15px;
  }
}
</style>


<script>
import mHeader from '../components/hearder/Hearder';
import leftRegist from '../components/regist/leftregist'
import rightRegist from '../components/regist/rightregist'

export default {
  name: 'registVC',
  data() {
    return {
      title: {
        text: "注册",
        showBack: true,
      },
      isA:false,
    };
  },
  created(){
    if (localStorage.sid) {

      } else {
        this.$router.push({
          path:'/XZcaizhong'
        })
      }
  },
  components: {
    mHeader,
    leftRegist,
    rightRegist
  },
  methods:{
    btnClick(event) {
      this.isA = !this.isA;
    }
  },


}
</script>
