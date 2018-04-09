<template>
    <div>
      <div class="bottom-btnView">
        <div class="btn" style="background:white;">
          <img class="images" src="../../static/images/s1_03.png" alt="">
          <button class="bottom"  @click="qhplay">切换玩法</button>
        </div>
            
        <button class="bottom-btn" style="" @click="removecontinue">清除条件</button>

        <div class="btn">
          <button class="bottom" style="background:rgb(248, 68, 51);color:white;" @click="commit">执行组号</button>   
          <img class="images" src="../../static/images/s2_05.png" alt="">
        </div>       

        <!-- <button class="bottom-btn" style="visibility:hidden;" @click="addcontinue">添加条件</button>     -->
      </div>
      
      <div class="container">
            <div class="line"></div>
            <div v-for="(item,index) in playdata">
              
                <div class="cell-topcontainer">
                  <div class="cell-top" style="float:left">
                    <span class="name">{{item.Name}}</span>
                    <button class="sel" v-show="isNum(index)" @click="daClick(index)">大</button>
                    <div class="line1" v-show="isNum(index)"></div>
                    <button class="sel" v-show="isNum(index)"  @click="xiaoClick(index)">小</button>
                    <div class="line1" v-show="isNum(index)"></div>
                    <button class="sel" v-show="isNum(index)"  @click="jiClick(index)">奇</button>
                    <div class="line1" v-show="isNum(index)"></div>
                    <button class="sel" v-show="isNum(index)"  @click="ouClick(index)">偶</button>
                    <div class="line1" v-show="isNum(index)"></div>
                    <button class="sel" @click="allselect(index)">全</button>
                    <div class="line1"></div>
                    <button class="sel" @click="reversalselect(index)">反</button>
                    <div class="line1"></div>
                    <button class="sel" style="border:0; border-top-right-radius: 4vw; border-bottom-right-radius: 4vw;" @click="allunselect(index)">清</button>

                    
                  </div>
                  <div style="float:right;">
                    <button class="tip" v-show="isTip(index)" @click="showTitle(index)">?</button>
                  </div>
                  
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
  top: 1;
  height: 10vw;
  display: flex;
  justify-content: space-between;
  background: white;
  border-bottom: rgb(223, 204, 199) solid 1px;
  .btn {
    display: flex;
    flex-direction: row;
    #bundle > .juzhong;
    border-radius: 3vw;
    font-size: 3vw;
    background: rgb(248, 68, 51);
    color: rgb(135, 135, 135);
    border-color: rgba(0, 0, 0, 0);
    padding: 0 2vw;
    margin: 2vw 1vw;
    .images {
      margin-top: 1px;
      width: 3vw;
      height: 3vw;
    }
    .bottom {
      padding: 0 2px;
      font-size: 3vw;
      background-color: white;
      color: rgb(135, 135, 135);
      border-color: rgba(0, 0, 0, 0);
    }
  }
}

.bottom-btn {
  border-radius: 3vw;
  font-size: 3vw;
  background-color: white;
  color: rgb(135, 135, 135);
  border-color: rgba(0, 0, 0, 0);
  padding: 0 2vw;
  margin: 2vw 1vw;
}

.line {
  height: 2.5vw;
  background: rgb(240, 240, 240);
  border-bottom: rgb(232, 232, 232) solid 1px;
  border-top: rgb(232, 232, 232) solid 1px;
}
.line1 {
  margin-top: 1.5vw;
  height: 4vw;
  width: 1px;
  background: rgb(232, 232, 232);
}
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 10vw;
  .cell-topcontainer {
    height: 8vw;
    .tip {
      #bundle > .juzhong;
      margin: 4vw 2vw 0 0vw;
      width: 5vw;
      height: 5vw;
      border-radius: 5vw;
      line-height: 4.5vw;
      background: rgb(250, 250, 250);
      border: rgb(184, 184, 184) solid 1px;
      color: rgb(184, 184, 184);
      font-size: 2vw;
    }
  }
  .cell-top {
    display: flex;
    flex-direction: row;
    margin-top: 3vw;
    margin-right: 5.5vw;
    background: rgb(250, 250, 250);
    border-top: rgb(232, 232, 232) solid 1px;
    border-right: rgb(232, 232, 232) solid 1px;
    border-bottom: rgb(232, 232, 232) solid 1px;
    border-top-right-radius: 4vw;
    border-bottom-right-radius: 4vw;
    .name {
      font-style: oblique;
      min-width: 20vw;
      text-align: left;
      border-top-right-radius: 3.5vw;
      border-bottom-right-radius: 3.5vw;
      // border-top: rgb(248, 68, 51) solid 1px;
      // border-bottom: rgb(248, 68, 51) solid 1px;
      font-size: 3.5vw;
      // margin: 0px 3vw 0vw 0px;
      padding-left: 2vw;
      padding-right: 2vw;
      margin: -1px 0px -1px 0px;
      height: 7vw;
      line-height: 7.5vw;
      color: white;
      background: rgb(248, 68, 51);
      // box-shadow: rgb(252, 191, 166) 0px 4px 10px;
    }
    .sel {
      #bundle > .juzhong;
      // background: linear-gradient(to bottom, white, rgb(213, 213, 213));
      // margin-top: 1vw;
      // margin-bottom: 1vw;
      font-weight: 800;
      font-size: 3vw;
      border-radius: 1vw;
      margin-right: 1px;
      width: 8vw;
      // height: 6vw;
      border: rgba(0, 0, 0, 0);
      background-color: rgb(250, 250, 250);
      // border-radius: 0;
      // border-right: rgb(232, 232, 232) solid 1px;
      color: rgb(155, 155, 155);
      // border-top-right-radius: 3.5vw;
      // border-bottom-right-radius: 3.5vw;
      // margin: 0 2vw 0 0;
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
      border: rgb(254, 232, 233) solid 1px;
      background-color: rgb(255, 244, 245);
      color: rgb(135, 135, 135);
      // border-radius: 1vw;
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
      // border-radius: 1vw;
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
      playdata: ""
    };
  },
  components: {
    mHeader
  },
  methods: {
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

    qhplay() {
      this.$router.push("/qihuanwanfa");
    },
    addcontinue() {},
    removecontinue() {
      for (let index = 0; index < this.playdata.length; index++) {
        const element = this.playdata[index];
        element.SelectValue = [];
        element.SelectIndex = [];
        Vue.set(this.playdata, index, this.playdata[index]);
      }
    },

    commit() {
      console.log(this.playdata);
      var arr = [];
      var temparr = [];
      for (let i = 0; i < this.playdata.length; i++) {
        const element = this.playdata[i];

        if (element.SelectIndex.length > 0) {
          // console.log();
          arr.push(
            '"在(' + element.Name + "," + element.SelectIndex.toString() + ')"'
          );
          var reg = new RegExp(",", "g");
          temparr.push(
            element.Name +
              ":" +
              element.SelectIndex.toString().replace(reg, ".") +
              "-" +
              element.SelectValue.toString().replace(reg, ".")
          );
        } else {
        }
      }

      console.log(temparr);
      var obj_arr;
      if (localStorage.a) {
        obj_arr = JSON.parse(localStorage.a);
      } else {
        obj_arr = [];
        var obj = {
          user_name: localStorage.user_name,
          caizhong: localStorage.czname,
          playtype: localStorage.playtype,
          tempplay: temparr
        };
        obj_arr.push(obj);
      }

      var temp;
      for (let index = 0; index < obj_arr.length; index++) {
        const element = obj_arr[index];
        if (
          element.caizhong === localStorage.czname &&
          element.user_name === localStorage.user_name &&
          element.playtype === localStorage.playtype
        ) {
          temp = true;
          element.tempplay = temparr;
        } else {
          temp = false;
        }
      }

      if (temp) {
      } else {
        

        // console.log(obj_arr);
        var obj = {
          user_name: localStorage.user_name,
          caizhong: localStorage.czname,
          playtype: localStorage.playtype,
          tempplay: temparr
        };
        obj_arr.push(obj);
      }

      obj_arr = JSON.stringify(obj_arr);
      console.log(obj_arr);
      localStorage.a = obj_arr;
      console.log(JSON.parse(localStorage.a));

      localStorage.tempplay = temparr;
      console.log(temparr);
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
            let dataArr = [];
            for (let index = 0; index < res.data.Data.length; index++) {
              const element = res.data.Data[index];
              let str = element.toString();
              dataArr.push(str);
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
  },
  mounted() {}
};
</script>
