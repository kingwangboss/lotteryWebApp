<template>
    <div>
        <div class="container">
            
            <div v-for="(item,index) in playdata">
                <div class="cell-top">
                    <span class="name">{{item.Name}}</span>
                    <button class="sel" v-show="isNum(index)" @click="daClick(index)">大</button>
                    <button class="sel" v-show="isNum(index)"  @click="xiaoClick(index)">小</button>
                    <button class="sel" v-show="isNum(index)"  @click="jiClick(index)">奇</button>
                    <button class="sel" v-show="isNum(index)"  @click="ouClick(index)">偶</button>
                    <button class="sel" @click="allselect(index)">全</button>
                    <button class="sel" @click="reversalselect(index)">反</button>
                    <button class="sel" @click="allunselect(index)">清</button>

                    <button class="tip" v-show="isTip(index)" @click="showTitle(index)">?</button>
                </div>

                <div class="cell-bottom">
                    <div v-for="(item1,index1) in item.Value">
                        <div class="num" :class="{'selectnum':item.SelectValue.indexOf(item1) > -1}" @click="addBtn(item1,index1,index)">
                            {{item1}}
                        </div>
                    </div>
                </div>

                <div class="line"></div>
            </div>

            <div class="bottom-btnView">

                <button class="bottom-btn" style="background-color: rgb(229, 87, 77);border-color:rgba(0,0,0,0);color:#fff;" @click="commit">提交</button>
                <button class="bottom-btn" style="background-color: rgb(232, 159, 109);border-color:rgba(0,0,0,0);color:#fff;">重置</button>
                
            </div>
        </div>

    </div>
</template>

<style lang="less" scoped>
:focus {
  outline: none;
}
#bundle {
  .juzhong {
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
}
.bottom-btnView {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 55px;
}

.bottom-btn {
  width: 50%;
  border-radius: 0px;
}
.line {
  height: 2.5vw;
  background: rgb(240, 240, 240);
  border-bottom: rgb(232, 232, 232) solid 1px;
  border-top: rgb(232, 232, 232) solid 1px;
}
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 44px;
  .cell-top {
    display: flex;
    flex-direction: row;
    margin-top: 3vw;

    // background: red;
    .name {
      width: 23%;
      text-align: left;
      border-top-right-radius: 3.5vw;
      border-bottom-right-radius: 3.5vw;
      font-size: 3.5vw;
      margin: 0px 3vw 0vw 0px;
      padding-left: 2vw;
      height: 7vw;
      line-height: 7.5vw;
      color: white;
      background: rgb(248, 68, 51);
      box-shadow: rgb(252, 191, 166) 0px 4px 10px;
    }
    .sel {
      #bundle > .juzhong;
      background: linear-gradient(to bottom, white, rgb(213, 213, 213));
      border-radius: 1vw;
      width: 7vw;
      height: 7vw;
      margin: 0 2vw 0 0;
    }
    .tip {
      #bundle > .juzhong;
      margin: 0.6vw 0 0 0.6vw;
      width: 5.5vw;
      height: 5.5vw;
      border-radius: 5.5vw;
      background: white;
      border: rgb(184, 184, 184) solid 1px;
      color: rgb(184, 184, 184);
      font-size: 3vw;
    }
  }
  .cell-bottom {
    margin: 5vw 4vw 3vw 4vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .num {
      padding: 1vw 2.18vw;
      #bundle > .juzhong;
      height: 5vw;
      margin: 1vw;
      font-size: 4vw;
      border: rgb(214, 214, 214) solid 1px;
      color: rgb(135, 135, 135);
      border-radius: 1vw;
    }
    .selectnum {
      padding: 1vw 2.18vw;
      #bundle > .juzhong;
      height: 5vw;
      margin: 1vw;
      font-size: 4vw;
      border: rgb(248, 68, 51) solid 1px;
      color: white;
      background: rgb(248, 68, 51);
      border-radius: 1vw;
    }
  }
}
</style>

<script>
import Vue from "vue";
import mHeader from "../components/hearder/Hearder";
import sha256 from "../util/sha256";
import index from "vue";
import { Toast, MessageBox } from "mint-ui";
export default {
  props: ["data"],
  data() {
    return {
      playdata: "",
      selectValueArr: [],
      selectIndexArr: []
    };
  },
  components: {
    mHeader
  },
  methods: {
    getData() {
      // 请求数据
      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=InitFilter" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        "&PlayTypeName=" +
        localStorage.playtype +
        tokenCode;

      let data = new FormData();
      data.append("Action", "InitFilter");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("PlayTypeName", localStorage.playtype);
      data.append("Sign", sha256.sha256(signStr).toUpperCase());
      this.$http
        .post(localStorage.SiteUrl, data)
        .then(res => {
          this.playdata = res.data.Data;
          console.log(this.playdata);
          let arr = [];
          let valueArr = [];
          let indexArr = [];
          for (let index = 0; index < this.playdata.length; index++) {
            const element = this.playdata[index];
            let arrV = [];
            let arrI = [];
            for (let i = 0; i < element.Data.length; i++) {
              arrI.push(element.Data[i].split(":")[0]);
              arrV.push(element.Data[i].split(":")[1]);
            }
            valueArr.push(arrV);
            indexArr.push(arrI);
            arr.push(element.Data);
            this.playdata[index].Value = arrV;
            this.playdata[index].Index = arrI;
            this.playdata[index].SelectValue = arrV;
            this.playdata[index].SelectIndex = arrI;
          }
          console.log(this.playdata);
        })
        .catch(error => {
          console.log(error);
        });
    },
    isTip(index) {
      if (this.playdata[index].Tip === "" || this.playdata[index].Tip == null) {
        return false;
      } else {
        return true;
      }
    },
    showTitle(index) {
      Toast({
        message: this.playdata[index].Tip,
        position: "bottom",
        duration: 2000
      });
    },
    isNum(index) {
      var reg = /^[0-9]+.?[0-9]*$/;
      for (let i = 0; i < this.playdata[index].Value.length; i++) {
        const element = this.playdata[index].Value[i];

        if (reg.test(element)) {
          return true;
        } else {
          continue;
        }
      }
      return false;
    },
    remove(arr, item) {
      var result = [];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] != item) {
          result.push(arr[i]);
        }
      }
      return result;
    },
    addBtn(item1, index1, index) {
      if (this.playdata[index].SelectValue.indexOf(item1) > -1) {
        this.playdata[index].SelectValue = this.remove(
          this.playdata[index].SelectValue,
          item1
        );
        this.playdata[index].SelectIndex = this.remove(
          this.playdata[index].SelectIndex,
          this.playdata[index].SelectIndex[index1]
        );
      } else {
        this.playdata[index].SelectValue.push(
          this.playdata[index].Value[index1]
        );
        this.playdata[index].SelectIndex.push(
          this.playdata[index].Index[index1]
        );
      }
      Vue.set(this.playdata, index, this.playdata[index]);
    },
    daClick(index) {
      var daValue = [];
      var xiaoValue = [];
      var daIndex = [];
      var xiaoIndex = [];
      for (
        let index1 = 0;
        index1 < this.playdata[index].Index.length;
        index1++
      ) {
        const item1 = this.playdata[index].Value[index1];
        if (this.playdata[index].Index.length % 2 == 0) {
          if (index1 < this.playdata[index].Index.length / 2) {
            xiaoValue.push(this.playdata[index].Value[index1]);
            xiaoIndex.push(this.playdata[index].Index[index1]);
          } else {
            daValue.push(this.playdata[index].Value[index1]);
            daIndex.push(this.playdata[index].Index[index1]);
          }
        } else {
          if (index1 < this.playdata[index].Index.length / 2) {
            xiaoValue.push(this.playdata[index].Value[index1]);
            xiaoIndex.push(this.playdata[index].Index[index1]);
          } else if (index1 > this.playdata[index].Index.length / 2) {
            daValue.push(this.playdata[index].Value[index1]);
            daIndex.push(this.playdata[index].Index[index1]);
          }
        }
      }
      this.playdata[index].SelectValue = daValue;
      this.playdata[index].SelectIndex = daIndex;
      Vue.set(this.playdata, index, this.playdata[index]);
    },
    xiaoClick(index) {
      var daValue = [];
      var xiaoValue = [];
      var daIndex = [];
      var xiaoIndex = [];
      for (
        let index1 = 0;
        index1 < this.playdata[index].Index.length;
        index1++
      ) {
        const item1 = this.playdata[index].Value[index1];
        if (this.playdata[index].Index.length % 2 == 0) {
          if (index1 < this.playdata[index].Index.length / 2) {
            xiaoValue.push(this.playdata[index].Value[index1]);
            xiaoIndex.push(this.playdata[index].Index[index1]);
          } else {
            daValue.push(this.playdata[index].Value[index1]);
            daIndex.push(this.playdata[index].Index[index1]);
          }
        } else {
          if (index1 < this.playdata[index].Index.length / 2 - 1) {
            xiaoValue.push(this.playdata[index].Value[index1]);
            xiaoIndex.push(this.playdata[index].Index[index1]);
          } else if (index1 > this.playdata[index].Index.length / 2) {
            daValue.push(this.playdata[index].Value[index1]);
            daIndex.push(this.playdata[index].Index[index1]);
          }
        }
      }
      this.playdata[index].SelectValue = xiaoValue;
      this.playdata[index].SelectIndex = xiaoIndex;
      Vue.set(this.playdata, index, this.playdata[index]);
    },
    jiClick(index) {
      var jiValue = [];
      var ouValue = [];
      var jiIndex = [];
      var ouIndex = [];
      for (
        let index1 = 0;
        index1 < this.playdata[index].Index.length;
        index1++
      ) {
        const item1 = this.playdata[index].Value[index1];
        if (item1 % 2 != 0) {
          jiValue.push(this.playdata[index].Value[index1]);
          jiIndex.push(this.playdata[index].Index[index1]);
        } else {
          ouValue.push(this.playdata[index].Value[index1]);
          ouIndex.push(this.playdata[index].Index[index1]);
        }
      }
      this.playdata[index].SelectValue = jiValue;
      this.playdata[index].SelectIndex = jiIndex;
      Vue.set(this.playdata, index, this.playdata[index]);
    },
    ouClick(index) {
      var jiValue = [];
      var ouValue = [];
      var jiIndex = [];
      var ouIndex = [];
      for (
        let index1 = 0;
        index1 < this.playdata[index].Index.length;
        index1++
      ) {
        const item1 = this.playdata[index].Value[index1];
        if (item1 % 2 != 0) {
          jiValue.push(this.playdata[index].Value[index1]);
          jiIndex.push(this.playdata[index].Index[index1]);
        } else {
          ouValue.push(this.playdata[index].Value[index1]);
          ouIndex.push(this.playdata[index].Index[index1]);
        }
      }
      this.playdata[index].SelectValue = ouValue;
      this.playdata[index].SelectIndex = ouIndex;
      Vue.set(this.playdata, index, this.playdata[index]);
    },
    allselect(index) {
      this.playdata[index].SelectValue = this.playdata[index].Value;
      this.playdata[index].SelectIndex = this.playdata[index].Index;
      Vue.set(this.playdata, index, this.playdata[index]);
    },

    reversalselect(index) {
      for (
        let index1 = 0;
        index1 < this.playdata[index].Index.length;
        index1++
      ) {
        const item1 = this.playdata[index].Value[index1];
        this.addBtn(item1, index1, index);
      }
      Vue.set(this.playdata, index, this.playdata[index]);
    },

    allunselect(index) {
      this.playdata[index].SelectValue = [];
      this.playdata[index].SelectIndex = [];
      Vue.set(this.playdata, index, this.playdata[index]);
    },

    commit() {
      console.log(this.playdata);
      var arr = [];
      for (let i = 0; i < this.playdata.length; i++) {
        const element = this.playdata[i];

        if (element.SelectIndex.length > 0) {
          // console.log();
          arr.push(
            '"在(' + element.Name + "," + element.SelectIndex.toString() + ')"'
          );
        } else {
        }
      }
      console.log("[" + arr.toString() + "]");
      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=FilterData" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        "&FilterExp=" +
        "[" +
        arr.toString() +
        "]" +
        "&PlayTypeName=" +
        localStorage.playtype +
        tokenCode;
      let data = new FormData();
      data.append("Action", "FilterData");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("FilterExp", "[" + arr.toString() + "]");
      data.append("PlayTypeName", localStorage.playtype);
      data.append("Sign", sha256.sha256(signStr).toUpperCase());

      if (arr.length == 0) {
        Toast({
          message: "请设置缩水公式",
          position: "bottom",
          duration: 2000
        });
      } else {
        this.$http
          .post(localStorage.SiteUrl, data)
          .then(res => {
            // console.log(res);
            let dataArr =[];
            for (let index = 0; index < res.data.Data.length; index++) {
              const element = res.data.Data[index];
              let str = element.toString();
              dataArr.push(str)
            }
            // console.log(dataArr);
            if (res.data.Code === "Suc") {
              this.$router.push({
                path: "/suoshuiresult",
                query: {
                  resultdata: dataArr
                }
              });
            } else {
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  },
  watch: {
    data: function(now, old) {
      this.playdata = this.data;
    }
  },
  computed: {},
  created() {
    this.playdata = this.data;
    console.log(this.playdata);
  },
  mounted() {}
};
</script>
