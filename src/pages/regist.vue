<template>
  <div>
    <m-header :title="title"></m-header>
    <div class="btnview">
      <el-button class="btn" plain=true type="primary">手机注册</el-button>
      <el-button class="btn" plain=true type="primary">用户名注册</el-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.btnview {
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  .btn {
    left: 0;right: 0;
    width: 50%;
    height: 100%;
    background-color: RGB(251, 230, 231);
    border: 0;
    color: red;
    font-size: 18px;
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
    };
  },
  components: {
    mHeader
  },

}
</script>
