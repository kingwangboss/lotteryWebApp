<template>
    <div class="maincontainer">

        <!-- <div class="middleLine">
        </div> -->

        <div v-show="AuthType != '1'" class="middlecontainer">
            <!-- <span class="textbtn first" style="border-left-width: 1px;" @click="xzCaizhongClick">选择彩种</span> -->
            <span class="textbtn first" style="border-left-width: 1px;" @click="changePlanClick">更改计划</span>
            <span class="textbtn" @click="planShareClick">计划分享</span>
            <span class="textbtn" @click="qhClick">切换公式</span>
            <span class="textbtn last" @click="selectNum">近{{PlanData.CycleCount}}期计划
                <img class="icon" src="../../static/images/shouye-71.png"/>
            </span>
        </div>

        <div v-show="AuthType == '1'" class="middlecontainer">
            <!-- <span class="textbtn first" style="border-left-width: 1px;" @click="xzCaizhongClick">选择彩种</span> -->
            <span class="textbtn first" style="border-left-width: 1px; width:30%;" @click="changePlanClick">更改计划</span>
            <span class="textbtn" style="width:30%;" @click="planShareClick">计划分享</span>
            <span class="textbtn last" style="width:30%;" @click="qhClick">切换公式
            </span>
        </div>

        <plancell :data="PlanData"></plancell>

        <div class="bottom-title">善意提醒：小心参考，理性投资</div>

    </div>
</template>

<style lang="less" scoped>
.maincontainer {
  // padding-bottom: 20px;
  height: auto;
  display: flex;
  flex-direction: column;
  background: #fafafa;
  .middleLine {
    height: 10px;
    background: #ededed;
  }
  .middlecontainer {
    display: flex;
    flex-direction: row;
    justify-content: center;

    .textbtn {
      font-size: 12px;
      width: 22%;
      margin-top: 10px;
      margin-bottom: 10px;
      line-height: 30px;
      height: 30px;
      // background: #f6f6f6;
      background: rgba(0, 0, 0, 0);
      border: 1px solid #d8d8d8;
      border-left-width: 0px;
      text-align: center;
      color: #767676;
      /* border-top-left-radius: 15rpx;
   border-bottom-left-radius: 15rpx; */
      &.first {
        border-top-left-radius: 7.5px;
        border-bottom-left-radius: 7.5px;
      }
      &.last {
        border-top-right-radius: 7.5px;
        border-bottom-right-radius: 7.5px;
        width: 28%;
      }
    }
    .icon {
      width: 10px;
      height: 10px;
    }
  }
  p {
    height: 70px;
    line-height: 70px;
  }
  .sss {
    background: blue;
  }
  .last {
    background: rebeccapurple;
  }
  .bottom-title {
    text-align: center;
    font-size: 12.5px;
    color: gray;
    margin-bottom: 10px;
  }
}
</style>

<script>
import plancell from "../components/plancell/plancell";
let AllData = require("../../static/data/GetPlanData2");
import sha256 from "../util/sha256";
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      PlanData: "",
      AuthType: localStorage.AuthType
    };
  },
  components: {
    plancell
  },
  created() {
    this.PlanData = AllData.Data;
  },
  methods: {
    getData() {
      // 请求数据
      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=GetPlanDatas2&AutoOpt=0" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        tokenCode;
      let data = new FormData();
      data.append("Action", "GetPlanDatas2");
      data.append("AutoOpt", "0");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("Sign", sha256.sha256(signStr).toUpperCase());
      this.$http
        .post(localStorage.SiteUrl, data)
        .then(res => {
          this.PlanData = res.data.Data;
          var nameArr = [];
          for (var i = 0; i < this.PlanData.Data.length; i++) {
            nameArr.push(this.PlanData.Data[i].Name);
          }
          console.log(nameArr);
          localStorage.selectNameArr = nameArr.join(",");
            localStorage.cycleCount = this.PlanData.CycleCount;
        })
        .catch(error => {
          console.log(error);
        });
    },
    selectNum() {
      MessageBox.prompt(" ", "填写计划期数(1-100)", {
        inputPlaceholder: "请输入期数",
        inputType: "int"
      }).then(({ value, action }) => {
        if (value > 100) {
          value = 100;
        } else if (value < 1) {
          value = 1;
        }
        console.log(value);
        var that = this;
        let tokenCode = localStorage.tokenCode;
        let signStr =
          "Action=GetPlanDatas2&AutoOpt=1" +
          "&CycleCount=" +
          value +
          "&SID=" +
          localStorage.sid +
          "&Token=" +
          localStorage.Token +
          tokenCode;
        let data = new FormData();
        data.append("Action", "GetPlanDatas2");
        data.append("AutoOpt", "1");
        data.append("CycleCount", value);
        data.append("SID", localStorage.sid);
        data.append("Token", localStorage.Token);
        data.append("Sign", sha256.sha256(signStr).toUpperCase());
        this.$http
          .post(localStorage.SiteUrl, data)
          .then(res => {
            console.log(res+'111111111');
            if (res.data.Code == "Suc") {
              localStorage.cycleCount = value;
              that.$router.push({
                path: "/routerPush"
              });
            }
          })
          .catch(error => {
            console.log(error);
          });
      });
    },
    // xzCaizhongClick() {
    //     this.$router.push({
    //         path: '/XZcaizhong'
    //     })
    // },
    planShareClick() {
      this.$router.push({
        path: "/planShare"
      });
    },
    changePlanClick() {
      var selectNameArr = [];
      for (var i = 0; i < this.PlanData.Data.length; i++) {
        selectNameArr.push(this.PlanData.Data[i].Name);
      }
      localStorage.selectNameArr = selectNameArr;
      this.$router.push({
        path: "/changePlan"
      });
    },
    qhClick() {
      var that = this;
      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=GetPlanDatas" +
        "&SID=" +
        localStorage.sid +
        "&AutoOpt=1" +
        "&Token=" +
        localStorage.Token +
        tokenCode;
      let data = new FormData();
      data.append("Action", "GetPlanDatas");
      data.append("SID", localStorage.sid);
      data.append("AutoOpt", "1");
      data.append("Token", localStorage.Token);
      data.append("Sign", sha256.sha256(signStr).toUpperCase());
      this.$http
        .post(localStorage.SiteUrl, data)
        .then(res => {
          console.log(res);
          that.getData();
          // that.$router.go(0);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    // 调用请求数据的方法
    this.getData();
  }
};
</script>
