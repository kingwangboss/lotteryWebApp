<template>
    <div>
        <div class="bottomcontainer" v-for="(cell,index) in PlanData" :key="cell.PlanArr" @click="pushDetail($event,index)">
            <!-- <span wx:if="{{DSType==0}}" class="txt-item1" style="border-top-left-radius: 25rpx;color: RGB(84, 128, 215); background:RGB(222, 231, 247);">{{Name}}</span> -->
            <!-- <span wx:else class="txt-item1" style="border-top-left-radius: 25rpx;color: RGB(199, 64, 78); background:RGB(247, 237, 237);">{{Name}}</span> -->
            <span v-if="cell.DSType === 0" class="txt-item1" style="width:22%;border-top-left-radius: 5px;color: RGB(84, 128, 215); background:RGB(222, 231, 247);">{{cell.Name.replace("定码","")}}</span>
            <span v-else-if="cell.DSType === 1" class="txt-item1" style="width:22%;border-top-left-radius: 5px;color: RGB(199, 64, 78); background:RGB(247, 237, 237);">{{cell.Name.replace("定码","")}}</span>
            <span class="txt-item1" style="width:22%;background:#fff; color:#767676;border-right: 1px dotted #d8d8d8;">{{cell.PlanSection}}</span>
            <div class="txt-item2">
                <span class="btn" v-if="cell.DSType === 0">{{cell.EndIndex ? cell.EndIndex+' ' : ""}}定</span>
                <span class="btn1" v-else>{{cell.EndIndex ? cell.EndIndex+" " : ""}}杀</span>
            </div>
            <span class="txt-item3">{{cell.GuessValue}}</span>

            <div class="zhengquelv" style="border-top-right-radius: 5px;">
                <span class="baifenbi">{{cell.GuessPercent}}</span>

                <div class="diandian" style="width:72px;">
                    <!-- <div v-for="item in dian[index]" :key="item">
                        <div v-if="item === '1'" class="dianMiddle" style="background:#30bb78;"></div>
                        <div v-else-if="item === '0'" class="dianMiddle" style="background:#d82e4b;"></div>
                        <div v-else class="dianMiddle" style="background:black;"></div>
                    </div> -->
                    <div v-for="(item,i) in analysis(cell.GuessResultList)" :key="i">
                        <div v-if="item === '1'" class="dianMiddle" style="background:#30bb78;"></div>
                        <div v-else-if="item === '0'" class="dianMiddle" style="background:#d82e4b;"></div>
                        <div v-else class="dianMiddle" style="background:black;"></div>
                    </div>
                </div>

                <!-- <div class="dian" v-show="isSandian">
                    <div class="dian-dian"></div>
                    <div class="dian-dian"></div>
                    <div class="dian-dian"></div>
                </div> -->

            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
#bundle {
  .juzhong {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
}

.bottomcontainer {
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  border: 1px solid #d8d8d8;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  word-wrap: break-word;
}

.txt-item1 {
  padding-left: 5px;
  display: flex;
  width: 60px;
  font-size: 10px;
  background: #f7eded;
  #bundle > .juzhong;
}

.txt-item2 {
  border-right: 1px dotted #d8d8d8;
  width: 60px;
  font-size: 10px;
  background: #fff;
  text-align: center;
  display: flex;
  align-items: center; // padding: 0px 5px;
  color: #767676;
  #bundle > .juzhong;
  .btn {
    // background: rgb(88, 88, 88);
    // width: 30px;
    line-height: 14px;
    // padding: 1px 5px;
    padding-top: 1px;
    min-width: 32px;
    border: 1px solid rgba(84, 128, 215, 0.5);
    border-radius: 9px;
    font-size: 10px;
    color: RGB(84, 128, 215);
  }
  .btn1 {
    //  width: 30px;
    // background: rgb(88, 88, 88);
    line-height: 14px;
    min-width: 32px;
    padding-top: 1px;
    // padding: 1px 5px;
    border: 1px solid RGBA(199, 64, 78, 0.5);
    border-radius: 9px;
    font-size: 10px;
    color: RGB(199, 64, 78);
  }
}

.txt-item3 {
  border-right: 1px dotted #d8d8d8;
  width: 140px;
  font-size: 10px;
  background: #fff;
  text-align: center;
  line-height: auto;
  padding: 15px 5px;
  color: #16b482;
  #bundle > .juzhong;
}

.zhengquelv {
  width: 100px;
  background: #fff;
  display: flex;
  flex-direction: column;
  #bundle > .juzhong;
}

.baifenbi {
  font-size: 13px;
  #bundle > .juzhong;
  color: #767676;
  margin-top: 5px;
}

.diandian {
  margin-bottom: 5px;
  #bundle > .juzhong;
  display: flex;
  flex-direction: row;
  // width: 100%;
  flex-wrap: wrap;
}

.dianMiddle {
  background: red;
  height: 2px;
  width: 5px;
  margin-left: 2px;
  // border-radius: 4px;
  margin-top: 2px;
}

.dian {
  #bundle > .juzhong;
}

.dian-dian {
  background: #909090;
  height: 4px;
  width: 4px;
  margin-left: 4px;
  border-radius: 4px;
  // color: #767676;
}
</style>

<script>
export default {
  props: {
    data: {
      type: Array
    }
  },

  created() {
    this.PlanData = this.data;
    
  },
  watch: {
    data: function(now, old) {
      this.PlanData = this.data;
    }
  },
  data() {
    return {
      myheight: 100,
      PlanData: "",
    };
  },
  computed: {
    dian: {
      // getter
      get: function() {
        var temp = [];
        if (this.PlanData.Data[0].GuessResultList.split(",").length > 10) {
          for (var i = 0; i < this.PlanData.Data.length; i++) {
            temp.push(
              this.PlanData.Data[i].GuessResultList.split(",").reverse()
            );
          }
        } else {
          for (var i = 0; i < this.PlanData.Data.length; i++) {
            temp.push(
              this.PlanData.Data[i].GuessResultList.split(",").reverse()
            );
          }
        }
        console.log(temp);
        return temp;
      },
      // setter
      set: function(newValue) {}
    },
    isSandian: {
      get() {
        if (
          parseInt(this.PlanData.CycleCount) > 0 &&
          parseInt(this.PlanData.CycleCount) <= 10
        ) {
          return false;
        } else {
          return true;
        }
      }
    }
  },
  methods: {
    pushDetail(event, index) {
      console.log("push");
      console.log(index);
      localStorage.detailID = index;
      this.$router.push({
        path: "/planVC/planDetail"
      });
    },
    analysis(str) {
      var temp = [];
      temp = str.split(",").reverse();
      return temp;
    }
  }
};
</script>
