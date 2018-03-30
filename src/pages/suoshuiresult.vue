<template>
  <div>
      <m-header :title="title"></m-header>
      <div class="container">
        <textarea cols="20" readonly="true" style="padding-left:5%;padding-top:5%;border:none;font-size:20px;outline:none;margin:0px;position:absolute;left:0px;top:44px;bottom:0;width:95%;color:#777">{{ojresultdata}}</textarea>
          <!-- <div class="content" v-for="(item,index) in resultdata">
              <div class="line"></div>

              <div class="KJnum">
                <div v-for="(item1,index1) in item.split(',')">
                    <div class="num">{{item1}}</div>
                </div>
              </div>
          </div> -->
      </div>
  </div>
</template>

<style lang="less" scoped>
.line {
  height: 10px;
  background: #f3f3f3;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
}
.container {
  display: flex;
  flex-direction: column;
  
  .KJnum {
    // margin: 0px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    text-align: center;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .num {
    margin: 0 1.6vw;
    line-height: 6.1vw;
    height: 6vw;
    width: 6vw;
    color: #ff5065;
    font-size: 4vw;
    border: 1px solid rgba(255, 92, 66, 0.3);
    border-radius: 6vw;
  }
}
</style>

<script>
import mHeader from "../components/hearder/Hearder";
export default {
  data() {
    return {
      title: {
        text: "缩水组号",
        showBack: true
      },
      resultdata: this.$route.query.resultdata,
      ojresultdata: ""
    };
  },
  components: {
    mHeader
  },
  mounted() {
    console.log("------------");
    console.log(this.resultdata);
    this.ojresultdata = this.resultdata.join("\n");
  },
  
};
</script>
