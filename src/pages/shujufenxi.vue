<template>
  <div class="main">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="遗漏分析" name="first">
        <iframe class="ichart" :style="{height:screenHeight+'px'}" name="txt0" src="../../static/JYYC1/txt.html" frameborder="0" marginheight="0px"></iframe>
      </el-tab-pane>
      <el-tab-pane label="冷热分析" name="second">
        <iframe class="ichart" style="height:500px;" name="bxt0" src="../../static/JYYC1/bxt.html" frameborder="0" marginheight="0px"></iframe>
      </el-tab-pane>
      <el-tab-pane label="指标遗漏分析" name="third">
        <iframe class="ichart" name="txt1" src="../../static/JYYC1/txt.html" frameborder="0" marginheight="0px"></iframe>
      </el-tab-pane>
      <el-tab-pane label="指标冷热分析" name="fourth">
        <iframe class="ichart" name="bxt1" src="../../static/JYYC1/bxt.html" frameborder="0" marginheight="0px"></iframe>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%; 
  background: red;
}

.ichart {
  width: 100%;
  height: 100%;
}
</style>


<script>
export default {
  data() {
    return {
      activeName2: 'first',
      screenHeight: document.body.clientHeight,
      screenWidth:  document.body.screenWidth
    };
  },
  mounted() {
    console.log(this.screenHeight)
  },
  methods: {
    item0() {
      var iframe1 = document.getElementsByName('txt0').contentWindow
      var datas = "[\
        {name : '1',value : 2,color:'#a5c2d5'},\
        {name : '3',value : 20,color:'#cbab4f'},\
        {name : '2',value : 10,color:'#76a871'},\
        {name : '3',value : 40,color:'#9f7961'},\
        {name : '1',value : 50,color:'#a56f8f'},\
        {name : '5',value : 20,color:'#db9034'}]"
      var titles = "00";
      window.parent.document.txt0.demo(datas, titles);
    },
    item1() {
      var iframe1 = document.getElementsByName('bxt0').contentWindow
      var datas = "[\
        {name : '1',value : 0.73,color:'#6f83a5'},\
        {name : '2',value : 35.75,color:'#a5c2d5'},\
        {name : '3',value : 29.84,color:'#cbab4f'},\
        {name : '4',value : 24.88,color:'#76a871'},\
        {name : '5',value : 6.77,color:'#9f7961'},\
        {name : '6',value : 2.02,color:'#a56f8f'},\
        {name : '7',value : 0.73,color:'#6f83a5'},\
        {name : '8',value : 35.75,color:'#a5c2d5'},\
        {name : '9',value : 29.84,color:'#cbab4f'},\
        {name : '10',value : 24.88,color:'#76a871'},\
        {name : '11',value : 6.77,color:'#9f7961'},\
        {name : '12',value : 2.02,color:'#a56f8f'}]"
      var titles = "11";
      window.parent.document.bxt0.demo(datas, titles);
    },
    item2() {
      var iframe1 = document.getElementsByName('txt1').contentWindow
      var datas = "[\
        {name : '12',value : 20,color:'#a5c2d5'},\
        {name : '34',value : 230,color:'#cbab4f'},\
        {name : '2',value : 130,color:'#76a871'},\
        {name : '3',value : 410,color:'#9f7961'},\
        {name : '1',value : 510,color:'#a56f8f'},\
        {name : '5',value : 120,color:'#db9034'}]"
      var titles = "22";
      window.parent.document.txt1.demo(datas, titles);
    },
    item3() {
      var iframe1 = document.getElementsByName('bxt1').contentWindow
      var datas = "[\
        {name : 'Other',value : 0.73,color:'#6f83a5'},\
        {name : 'IE',value : 35.75,color:'#a5c2d5'},\
        {name : 'Chrome',value : 29.84,color:'#cbab4f'},\
        {name : 'Firefox',value : 24.88,color:'#76a871'},\
        {name : 'Safari',value : 6.77,color:'#9f7961'},\
        {name : 'Opera',value : 2.02,color:'#a56f8f'},\
        {name : 'Other',value : 0.73,color:'#6f83a5'},\
        {name : 'IE',value : 35.75,color:'#a5c2d5'},\
        {name : 'Chrome',value : 29.84,color:'#cbab4f'},\
        {name : 'Firefox',value : 24.88,color:'#76a871'},\
        {name : 'Safari',value : 6.77,color:'#9f7961'},\
        {name : 'Opera',value : 2.02,color:'#a56f8f'}]"
      var titles = "33";
      window.parent.document.bxt1.demo(datas, titles);
    },
    handleClick(tab, event) {
      console.log(tab, event);
      if (tab.index == 0) {
        this.item0()
      } else if (tab.index == 1) {
        this.item1();
      } else if (tab.index == 2) {
        this.item2();
      } else if (tab.index == 3) {
        this.item3();
      } else {

      }
    },
  },

}

</script>
