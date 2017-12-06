<template>
  <div class="main">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="遗漏分析" name="first">
        <!-- <iframe class="ichart" name="txt0" :style="{height:screenHeight+'px'}" :src="url1" frameborder="0" marginheight="0px"></iframe> -->
        <div id="main1" class="ichart" name="txt0" :style="{height:screenHeight+'px'}"></div>
      </el-tab-pane>
      <el-tab-pane label="冷热分析" name="second">
        <!-- <iframe class="ichart" :style="{height:screenHeight+'px'}" name="bxt0" :src="url2" frameborder="0" marginheight="0px"></iframe> -->
        <div id="main2" class="ichart" name="bxt0" :style="{height:screenHeight+'px'}"></div>
      </el-tab-pane>
      <el-tab-pane label="指标遗漏分析" name="third">
        <!-- <iframe class="ichart" :style="{height:screenHeight+'px'}" name="txt1" :src="url1" frameborder="0" marginheight="0px"></iframe> -->
        <div id="main3" class="ichart" name="txt1" :style="{height:screenHeight+'px'}"></div>
      </el-tab-pane>
      <el-tab-pane label="指标冷热分析" name="fourth">
        <!-- <iframe class="ichart" :style="{height:screenHeight+'px'}" name="bxt1" :src="url2" frameborder="0" marginheight="0px"></iframe> -->
        <div id="main4" class="ichart" name="bxt1" :style="{height:screenHeight+'px'}"></div>
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
import sha256 from "../util/sha256";
import icharString from "../util/ichartString";
import echartGetName from "../util/echartGetName";
import echartGetData from "../util/echartGetData";
import echartPie from "../util/echartPieData";
import echarts from "echarts";
export default {
  name: "shujufenxi",
  data() {
    return {
      url1: "//ycwapp.cpnet.com/static/JYYC1/txt.html",
      url2: "//ycwapp.cpnet.com/static/JYYC1/bxt.html",
      activeName2: localStorage.activeName2,
      screenHeight: document.documentElement.clientHeight - 88 - 68,
      // screenWidth:  document.documentElement.screenWidth
      listData: "",
      keyNum1: localStorage.keyNum1 === null ? "0" : localStorage.keyNum1,
      keyNum2: localStorage.keyNum2 === null ? "0" : localStorage.keyNum2,
      Norm1: typeof localStorage.Norm1 == "undefined" ? "" : localStorage.Norm1,
      Norm2: typeof localStorage.Norm2 == "undefined" ? "" : localStorage.Norm2,
      // url1:window.location.origin + '/static/JYYC1/bxt.html',
      dataCount1:
        localStorage.selectDataCount1 === null
          ? "50"
          : localStorage.selectDataCount1,
      dataCount2:
        localStorage.selectDataCount2 === null
          ? "50"
          : localStorage.selectDataCount2,
      title: "",
      name: [],
      data: [],
      data1: []
    };
  },
  mounted() {
    console.log("mounted");
    console.log(document.documentElement.clientHeight);
    // alert(this.url1)

    if (localStorage.activeName2 == "first") {
      this.item0();
    } else if (localStorage.activeName2 == "second") {
      this.item1();
    } else if (localStorage.activeName2 == "third") {
      this.item2();
    } else if (localStorage.activeName2 == "fourth") {
      this.item3();
    } else {
      this.item0();
    }
  },

  created() {
    console.log("created");
    console.log(localStorage.Norm1);
    console.log(window.location.protocol);
    this.url1 = window.location.protocol + this.url1;
    this.url2 = window.location.protocol + this.url2;
    console.log(this.url1);
    console.log(this.url2);
  },
  methods: {
    drawPie1(id) {

      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        title: {
          text: this.title,
          x: "center",
          textStyle:{
            // lineHeight:200,
            // height:100,
            fontSize:20,
          }
        },
        // color: ["#a5c2d5","red"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        yAxis: [
          {
            type: "category",
            data: this.name,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        xAxis: [
          {
            position: "bottom",
            type: "value"
          }
        ],
        series: [
          {
            name: "出现次数",
            type: "bar",
            barWidth: "60%",
            data: this.data,
            label: {
              normal: {
                show: true,
                position: "inside"
              }
            },
            itemStyle: {
              //通常情况下：
              normal: {
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function(params) {
                  var colorList = ["#db9034","#a5c2d5","#cbab4f","#76a871","#9f7961","#a56f8f","#db9034","#a5c2d5","#cbab4f","#76a871","#9f7961","#a56f8f","#db9034","#a5c2d5","#cbab4f","#76a871","#9f7961","#a56f8f","#db9034","#a5c2d5","#cbab4f","#76a871","#9f7961","#a56f8f"];
                  return colorList[params.dataIndex];
                }
              },
              //鼠标悬停时：
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    },

    drawPie2(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        title: {
          text: this.title,
          left: "center",
          textStyle:{
            // lineHeight:200,
            // height:100,
            fontSize:20,
          }
        },
        
        legend: {
          bottom: 10,
          left: "center"
        },
        series: [
          {
            type: "pie",
            radius: "42%",
            center: ["50%", "50%"],
            selectedMode: "single",
            data: this.data1,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    },

    item0() {
      this.activeName2 = "first";
      localStorage.activeName2 = this.activeName2;

      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=GetYiLouData" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        "&KeyNumbers=" +
        this.keyNum1 +
        tokenCode;
      let data = new FormData();
      data.append("Action", "GetYiLouData");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("KeyNumbers", this.keyNum1);
      data.append("Sign", sha256.sha256(signStr).toUpperCase());
      this.$http
        .post(localStorage.SiteUrl, data)
        .then(res => {
          this.listData = res.data.Data;

          this.name = echartGetName.strWithName(this.listData.AnalysisData);
          this.data = echartGetData.strWithData(this.listData.AnalysisData);
          this.data.reverse();
          this.title = this.listData.KeyNumberNames + "-遗漏分析";

          localStorage.selectKeyNumberName1 = this.listData.KeyNumberNames.split(
            ","
          );
          localStorage.shujufenxi = "1";
          this.$nextTick(function() {
            this.drawPie1("main1");
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    item1() {
      this.activeName2 = "second";
      localStorage.activeName2 = this.activeName2;

      var iframe1 = document.getElementsByName("bxt0").contentWindow;

      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=GetLengReData" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        "&KeyNumbers=" +
        this.keyNum2 +
        "&DataCount=" +
        this.dataCount1 +
        tokenCode;
      let data = new FormData();
      data.append("Action", "GetLengReData");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("KeyNumbers", this.keyNum2);
      data.append("DataCount", this.dataCount1);
      data.append("Sign", sha256.sha256(signStr).toUpperCase());
      this.$http
        .post(localStorage.SiteUrl, data)
        .then(res => {
          this.listData = res.data.Data;

          this.data1 = echartPie.JsonStrWithString(this.listData.AnalysisData);

          this.title =
            this.listData.KeyNumberNames +
            "近" +
            this.listData.DataCount +
            "-冷热分析";
          localStorage.selectKeyNumberName2 = this.listData.KeyNumberNames.split(
            ","
          );
          localStorage.selectDataCount1 = this.listData.DataCount;

          localStorage.shujufenxi = "2";
          this.$nextTick(function() {
            this.drawPie2("main2");
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    item2() {
      this.activeName2 = "third";
      localStorage.activeName2 = this.activeName2;

      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=GetNormYiLouData" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        "&Norm=" +
        this.Norm1 +
        tokenCode;
      let data = new FormData();
      data.append("Action", "GetNormYiLouData");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("Norm", this.Norm1);
      data.append("Sign", sha256.sha256(signStr).toUpperCase());
      this.$http
        .post(localStorage.SiteUrl, data)
        .then(res => {
          this.listData = res.data.Data;
          this.name = echartGetName.strWithName(this.listData.AnalysisData);
          this.data = echartGetData.strWithData(this.listData.AnalysisData);
          this.data.reverse();
          this.title = this.listData.Norm + "-指标遗漏分析";
          localStorage.selectKeyNumberName3 = this.listData.Norm.split(",");

          localStorage.shujufenxi = "3";
          this.$nextTick(function() {
            this.drawPie1("main3");
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    item3() {
      this.activeName2 = "fourth";
      localStorage.activeName2 = this.activeName2;

      var iframe1 = document.getElementsByName("bxt1").contentWindow;
      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=GetNormLengReData" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        "&Norm=" +
        this.Norm2 +
        "&DataCount=" +
        this.dataCount2 +
        tokenCode;
      let data = new FormData();
      data.append("Action", "GetNormLengReData");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("Norm", this.Norm2);
      data.append("DataCount", this.dataCount2);
      data.append("Sign", sha256.sha256(signStr).toUpperCase());
      this.$http
        .post(localStorage.SiteUrl, data)
        .then(res => {
          this.listData = res.data.Data;

          this.data1 = echartPie.JsonStrWithString(this.listData.AnalysisData);

          this.title =
            this.listData.Norm + "近" + this.listData.DataCount + "-指标冷热分析";
          localStorage.selectKeyNumberName4 = this.listData.Norm.split(",");
          localStorage.selectDataCount2 = this.listData.DataCount;
          localStorage.shujufenxi = "4";
          this.$nextTick(function() {
            this.drawPie2("main4");
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    handleClick(tab, event) {
      console.log(tab, event);
      if (tab.index == 0) {
        this.item0();
      } else if (tab.index == 1) {
        this.item1();
      } else if (tab.index == 2) {
        this.item2();
      } else if (tab.index == 3) {
        this.item3();
      } else {
      }
    }
  }
};
</script>
