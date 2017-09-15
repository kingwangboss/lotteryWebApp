<template>
  <div class="main">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="遗漏分析" name="first">
        <iframe class="ichart" name="txt0" :style="{height:screenHeight+'px'}" src="http://192.168.1.40/dist/static/JYYC1/txt.html" frameborder="0" marginheight="0px"></iframe>
      </el-tab-pane>
      <el-tab-pane label="冷热分析" name="second">
        <iframe class="ichart" :style="{height:screenHeight+'px'}" name="bxt0" src="http://192.168.1.40/dist/static/JYYC1/bxt.html" frameborder="0" marginheight="0px"></iframe>
      </el-tab-pane>
      <el-tab-pane label="指标遗漏分析" name="third">
        <iframe class="ichart" :style="{height:screenHeight+'px'}" name="txt1" src="http://192.168.1.40/dist/static/JYYC1/txt.html" frameborder="0" marginheight="0px"></iframe>
      </el-tab-pane>
      <el-tab-pane label="指标冷热分析" name="fourth">
        <iframe class="ichart" :style="{height:screenHeight+'px'}" name="bxt1" src="http://192.168.1.40/dist/static/JYYC1/bxt.html" frameborder="0" marginheight="0px"></iframe>
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
      activeName2: localStorage.activeName2,
      screenHeight: document.documentElement.clientHeight - 88 - 68,
      // screenWidth:  document.documentElement.screenWidth
      listData: '',
      keyNum1: localStorage.keyNum1 === null ? "0" : localStorage.keyNum1,
      keyNum2: localStorage.keyNum2 === null ? "0" : localStorage.keyNum2,
      Norm1: typeof (localStorage.Norm1) == "undefined" ? "" : localStorage.Norm1,
      Norm2: typeof (localStorage.Norm2) == "undefined" ? "" : localStorage.Norm2,
      dataCount1: localStorage.selectDataCount1 === null ? "50" : localStorage.selectDataCount1,
      dataCount2: localStorage.selectDataCount2 === null ? "50" : localStorage.selectDataCount2,

    };
  },
  mounted() {
    console.log("mounted");
    console.log(document.documentElement.clientHeight)

    if (localStorage.activeName2 == 'first') {
      this.item0();
    }else if(localStorage.activeName2 == 'second'){
      this.item1();
    }
    else if(localStorage.activeName2 == 'third'){
      this.item2();
    }
    else if(localStorage.activeName2 == 'fourth'){
      this.item3();
    }else{
      this.item0();
    }
  },
  created() {
    console.log("created");
    console.log(localStorage.Norm1)
  },
  methods: {
    item0() {
      this.activeName2 = 'first';
      localStorage.activeName2 = this.activeName2;

      var iframe1 = document.getElementsByName('txt0').contentWindow
      // window.txt0.fMain();
      let tokenCode = localStorage.tokenCode;
      let signStr = 'Action=GetYiLouData' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + '&KeyNumbers=' + this.keyNum1 + tokenCode;
      let data = new FormData();
      data.append('Action', 'GetYiLouData');
      data.append('SID', localStorage.sid);
      data.append('Token', localStorage.Token);
      data.append('KeyNumbers', this.keyNum1);
      data.append('Sign', sha256.sha256(signStr).toUpperCase());
      this.$http.post(localStorage.SiteUrl, data).then(res => {
        this.listData = res.data.Data;
        var jsString = icharString.JsonStrWithString(this.listData.AnalysisData);
        console.log(jsString);

        var datas = jsString;
        var titles = this.listData.KeyNumberNames + '-遗漏分析';
        localStorage.selectKeyNumberName1 = this.listData.KeyNumberNames.split(',');
        localStorage.shujufenxi = '1';
        window.parent.document.txt0.demo(datas, titles);
      }).catch(error => {
        console.log(error);
      });

    },
    item1() {
      this.activeName2 = 'second';
      localStorage.activeName2 = this.activeName2;

      var iframe1 = document.getElementsByName('bxt0').contentWindow

      let tokenCode = localStorage.tokenCode;
      let signStr = 'Action=GetLengReData' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + '&KeyNumbers=' + this.keyNum2 + '&DataCount=' + this.dataCount1 + tokenCode;
      let data = new FormData();
      data.append('Action', 'GetLengReData');
      data.append('SID', localStorage.sid);
      data.append('Token', localStorage.Token);
      data.append('KeyNumbers', this.keyNum2);
      data.append('DataCount', this.dataCount1);
      data.append('Sign', sha256.sha256(signStr).toUpperCase());
      this.$http.post(localStorage.SiteUrl, data).then(res => {
        this.listData = res.data.Data;
        var jsString = icharString.JsonStrWithString(this.listData.AnalysisData);
        console.log(jsString);

        var datas = jsString;
        var titles = this.listData.KeyNumberNames + '近' + this.listData.DataCount + '-冷热分析';
        localStorage.selectKeyNumberName2 = this.listData.KeyNumberNames.split(',');
        localStorage.selectDataCount1 = this.listData.DataCount;

        localStorage.shujufenxi = "2";
        window.parent.document.bxt0.demo(datas, titles);
      }).catch(error => {
        console.log(error);
      });
    },
    item2() {
      this.activeName2 = 'third';
      localStorage.activeName2 = this.activeName2;

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
        localStorage.selectKeyNumberName3 = this.listData.Norm.split(',');

        localStorage.shujufenxi = "3";
        window.parent.document.txt1.demo(datas, titles);
      }).catch(error => {
        console.log(error);
      });
    },
    item3() {
      this.activeName2 = 'fourth';
      localStorage.activeName2 = this.activeName2;

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
        localStorage.selectKeyNumberName4 = this.listData.Norm.split(',');
        localStorage.selectDataCount2 = this.listData.DataCount;
        localStorage.shujufenxi = "4";
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
