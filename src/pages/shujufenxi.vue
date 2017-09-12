<template>
  <div class="main">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="遗漏分析" name="first">
        <iframe class="ichart" name="txt0" :style="{height:screenHeight+'px'}" src="../../static/JYYC1/txt.html" frameborder="0" marginheight="0px"></iframe>
      </el-tab-pane>
      <el-tab-pane label="冷热分析" name="second">
        <iframe class="ichart" :style="{height:screenHeight+'px'}" name="bxt0" src="../../static/JYYC1/bxt.html" frameborder="0" marginheight="0px"></iframe>
      </el-tab-pane>
      <el-tab-pane label="指标遗漏分析" name="third">
        <iframe class="ichart" :style="{height:screenHeight+'px'}" name="txt1" src="../../static/JYYC1/txt.html" frameborder="0" marginheight="0px"></iframe>
      </el-tab-pane>
      <el-tab-pane label="指标冷热分析" name="fourth">
        <iframe class="ichart" :style="{height:screenHeight+'px'}" name="bxt1" src="../../static/JYYC1/bxt.html" frameborder="0" marginheight="0px"></iframe>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%; // background: red;
}

.ichart {
  width: 100%;
  height: 100%;
}
</style>


<script>
import sha256 from '../util/sha256'
import icharString from '../util/ichartString'
export default {
  name: 'shujufenxi',
  data() {
    return {
      activeName2: 'first',
      screenHeight: document.documentElement.clientHeight - 88 - 68,
      // screenWidth:  document.documentElement.screenWidth
      listData: '',
      keyNumName1: '',
      keyNumName2: '',
      Norm1: '',
      Norm2: '',
      dataCount1: 100,
      dataCount2: 500,
    };
  },
  mounted() {
    console.log("mounted");
    console.log(document.documentElement.clientHeight)
    this.item0();
  },
  created() {
    console.log("created");
  },
  methods: {
    item0() {
      var iframe1 = document.getElementsByName('txt0').contentWindow

      let tokenCode = localStorage.tokenCode;
      let signStr = 'Action=GetYiLouData' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + '&KeyNumbers=' + this.keyNumName1 + tokenCode;
      let data = new FormData();
      data.append('Action', 'GetYiLouData');
      data.append('SID', localStorage.sid);
      data.append('Token', localStorage.Token);
      data.append('KeyNumbers', this.keyNumName1);
      data.append('Sign', sha256.sha256(signStr).toUpperCase());
      this.$http.post(localStorage.SiteUrl, data).then(res => {
        this.listData = res.data.Data;
        var jsString = icharString.JsonStrWithString(this.listData.AnalysisData);
        console.log(jsString);

        var datas = jsString;
        var titles = this.listData.KeyNumberNames + '-遗漏分析';

        window.parent.document.txt0.demo(datas, titles);
      }).catch(error => {
        console.log(error);
      });

    },
    item1() {
      var iframe1 = document.getElementsByName('bxt0').contentWindow
      let tokenCode = localStorage.tokenCode;
      let signStr = 'Action=GetLengReData' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + '&KeyNumbers=' + this.keyNumName2 + '&DataCount=' + this.dataCount1 + tokenCode;
      let data = new FormData();
      data.append('Action', 'GetLengReData');
      data.append('SID', localStorage.sid);
      data.append('Token', localStorage.Token);
      data.append('KeyNumbers', this.keyNumName2);
      data.append('DataCount', this.dataCount1);
      data.append('Sign', sha256.sha256(signStr).toUpperCase());
      this.$http.post(localStorage.SiteUrl, data).then(res => {
        this.listData = res.data.Data;
        var jsString = icharString.JsonStrWithString(this.listData.AnalysisData);
        console.log(jsString);

        var datas = jsString;
        var titles = this.listData.KeyNumberNames + '近' + this.listData.DataCount + '-冷热分析';

        window.parent.document.bxt0.demo(datas, titles);
      }).catch(error => {
        console.log(error);
      });
    },
    item2() {
      var iframe1 = document.getElementsByName('txt1').contentWindow
      let tokenCode = localStorage.tokenCode;
      let signStr = 'Action=GetNormYiLouData' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + '&Norm=' + this.Norm1 + tokenCode;
      let data = new FormData();
      data.append('Action', 'GetNormYiLouData');
      data.append('SID', localStorage.sid);
      data.append('Token', localStorage.Token);
      data.append('Norm', this.Norm1);
      data.append('Sign', sha256.sha256(signStr).toUpperCase());
      this.$http.post(localStorage.SiteUrl, data).then(res => {
        this.listData = res.data.Data;
        var jsString = icharString.JsonStrWithString(this.listData.AnalysisData);
        console.log(jsString);

        var datas = jsString;
        var titles = this.listData.Norm + '-指标遗漏分析';

        window.parent.document.txt1.demo(datas, titles);
      }).catch(error => {
        console.log(error);
      });
    },
    item3() {
      var iframe1 = document.getElementsByName('bxt1').contentWindow
      let tokenCode = localStorage.tokenCode;
      let signStr = 'Action=GetNormLengReData' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + '&Norm=' + this.Norm2 + '&DataCount=' + this.dataCount2 + tokenCode;
      let data = new FormData();
      data.append('Action', 'GetNormLengReData');
      data.append('SID', localStorage.sid);
      data.append('Token', localStorage.Token);
      data.append('Norm', this.Norm2);
      data.append('DataCount', this.dataCount2);
      data.append('Sign', sha256.sha256(signStr).toUpperCase());
      this.$http.post(localStorage.SiteUrl, data).then(res => {
        this.listData = res.data.Data;
        var jsString = icharString.JsonStrWithString(this.listData.AnalysisData);
        console.log(jsString);

        var datas = jsString;
        var titles = this.listData.Norm + '近' + this.listData.DataCount + '-指标冷热分析';

        window.parent.document.bxt1.demo(datas, titles);
      }).catch(error => {
        console.log(error);
      });
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
