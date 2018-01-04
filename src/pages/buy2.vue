<template>
    <div style="overflow: hidden;">
        <m-header :title="title"></m-header>

        <div class="cell1" v-if="listData.DesceList[index].AuthType == 1" v-for="(DesceList,index) in listData.DesceList" :key="DesceList.toString()">
            <div class="cell-item1" v-for="(PriceList,index1) in listData.PriceList" :key="PriceList.toString()" v-if="listData.DesceList[index].AuthType == listData.PriceList[index1].AuthType">
                <div class="cell-top"  @click="pushPay(index1)" >
                    <div class="top-div" style="color:#58C5E0;">{{listData.PriceList[index1].AuthTitle}}</div>
                    <div class="top-div" style="color:#58C5E0;text-decoration:line-through;width: 18%;">{{listData.PriceList[index1].SourcePrice.toFixed(2)}}</div>
                    <div class="top-div" style="color:#58C5E0;width: 18%;">{{listData.PriceList[index1].Price.toFixed(2)}}</div>
                    <button style="background-color: #58C5E0;" class="btn" type="primary">{{listData.PriceList[index1].PurchaseType}}</button>
                </div>
            </div>
            
            <div class="cell-desc1">
                <p>{{listData.DesceList[index].Desc}}</p>

                <div class="circle1" style="left: -7px;"></div>
                <div class="circle1" style="right: -7px;"></div>
            </div>
        </div>

        <div class="cell2" v-if="listData.DesceList[index].AuthType == 2" v-for="(DesceList,index) in listData.DesceList" :key="DesceList.toString()">
            <div class="cell-item2" v-for="(PriceList,index1) in listData.PriceList" :key="PriceList.toString()" v-if="listData.DesceList[index].AuthType == listData.PriceList[index1].AuthType">
                <div class="cell-top"  @click="pushPay(index1)" >
                    <div class="top-div" style="color:#8A73FD;">{{listData.PriceList[index1].AuthTitle}}</div>
                    <div class="top-div" style="color:#8A73FD;text-decoration:line-through;width: 18%;">{{listData.PriceList[index1].SourcePrice.toFixed(2)}}</div>
                    <div class="top-div" style="color:#8A73FD;width: 18%;">{{listData.PriceList[index1].Price.toFixed(2)}}</div>
                    <button style="background-color: #8A73FD;" class="btn" type="primary">{{listData.PriceList[index1].PurchaseType}}</button>
                </div>
            </div>
            
            <div class="cell-desc2">
                {{listData.DesceList[index].Desc}}

                <div class="circle2" style="left: -7px;"></div>
                <div class="circle2" style="right: -7px;"></div>
            </div>
        </div>

        <div class="cell3" v-if="listData.DesceList[index].AuthType == 3" v-for="(DesceList,index) in listData.DesceList" :key="DesceList.toString()">
            <div class="cell-item3" v-for="(PriceList,index1) in listData.PriceList" :key="PriceList.toString()" v-if="listData.DesceList[index].AuthType == listData.PriceList[index1].AuthType">
                <div class="cell-top"  @click="pushPay(index1)" >
                    <div class="top-div" style="color:#F76587;">{{listData.PriceList[index1].AuthTitle}}</div>
                    <div class="top-div" style="color:#F76587;text-decoration:line-through;width: 18%;">{{listData.PriceList[index1].SourcePrice.toFixed(2)}}</div>
                    <div class="top-div" style="color:#F76587;width: 18%;">{{listData.PriceList[index1].Price.toFixed(2)}}</div>
                    <button style="background-color: #F76587;" class="btn" type="primary">{{listData.PriceList[index1].PurchaseType}}</button>
                </div>
            </div>
            
            <div class="cell-desc3">
                {{listData.DesceList[index].Desc}}

                <div class="circle3" style="left: -7px;"></div>
                <div class="circle3" style="right: -7px;"></div>
            </div>
        </div>

    </div>
</template>

<style lang="less" scoped>
.cell1 {
  margin: 10px 10px;
  position: relative;
  background-color: #ffffff;
  overflow: hidden;
  border-top: 1px solid #58c5e0;
  border-bottom: 1px solid #58c5e0;
}
.cell2 {
  margin: 10px 10px;
  position: relative;
  background-color: #ffffff;
  overflow: hidden;
  border-top: 1px solid #8a73fd;
  border-bottom: 1px solid #8a73fd;
}
.cell3 {
  margin: 10px 10px;
  position: relative;
  background-color: #ffffff;
  overflow: hidden;
  border-top: 1px solid #f76587;
  border-bottom: 1px solid #f76587;
}

.cell-item1 {
  border-left: 1px solid #58c5e0;
  border-right: 1px solid #58c5e0;
  border-bottom: 1px dotted #58c5e0;
  margin-bottom: -1px;
  padding: 10px;
}
.cell-item2 {
  border-left: 1px solid #8a73fd;
  border-right: 1px solid #8a73fd;
  border-bottom: 1px dotted #8a73fd;
  //   border: 1px solid #8a73fd;
  margin-bottom: -1px;
  padding: 10px;
}
.cell-item3 {
  border-left: 1px solid #f76587;
  border-right: 1px solid #f76587;
  border-bottom: 1px dotted #f76587;
  //   border: 1px solid #f76587;
  margin-bottom: -1px;
  padding: 10px;
}
.cell-desc1 {
  position: relative;
  padding: 6px 10px;
  line-height: 14px;
  border-left: 1px solid #58c5e0;
  border-right: 1px solid #58c5e0;
  text-align: left;
  font-size: 12px;
  color: #58c5e0;
}
.cell-desc2 {
  position: relative;
  padding: 6px 10px;
  line-height: 14px;
  border-left: 1px solid #8a73fd;
  border-right: 1px solid #8a73fd;
  //   border: 1px solid #8a73fd;
  text-align: left;
  font-size: 12px;
  color: #8a73fd;
}
.cell-desc3 {
  position: relative;
  padding: 6px 10px;
  line-height: 14px;
  border-left: 1px solid #f76587;
  border-right: 1px solid #f76587;
  //   border: 1px solid #f76587;
  text-align: left;
  font-size: 12px;
  color: #f76587;
}
.circle1 {
  width: 10px;
  height: 10px;
  border-radius: 10px;
  border-style: solid;
  border-color: #58c5e0;
  border-width: 1px;
  position: absolute;
  top: -5px;
  background: white;
}
.circle2 {
  width: 10px;
  height: 10px;
  border-radius: 10px;
  border-style: solid;
  border-color: #8a73fd;
  border-width: 1px;
  position: absolute;
  top: -5px;
  background: white;
}
.circle3 {
  width: 10px;
  height: 10px;
  border-radius: 10px;
  border-style: solid;
  border-color: #f76587;
  border-width: 1px;
  position: absolute;
  top: -5px;
  background: white;
}

.cell-top {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  .top-div {
    // margin-left: 4%;
    margin-right: 4%;
    font-size: 15px;
    font-weight: 900;
    text-align: left;
    width: 32%;
  }
  .btn {
    // position: relative;
    // right:-5%;
    // width: 42px;
    height: 18px;
    line-height: 16px;
    margin-left: 5%;
    border-radius: 25px;
    background-color: #58c5e0;
    border: 0;
    color: white;
    // font-size: 12px;
  }
}
</style>


<script>
import mHeader from "../components/hearder/Hearder";
import sha256 from "../util/sha256";
export default {
  data() {
    return {
      title: {
        text: "购买续费",
        showBack: true,
        right: false
      },
      listData: "",
      descStr: []
    };
  },
  components: {
    mHeader
  },

  methods: {
    getData() {
      let tokenCode = localStorage.tokenCode;
      let signStr =
        "Action=GetServicePrice" +
        "&SID=" +
        localStorage.sid +
        "&Token=" +
        localStorage.Token +
        tokenCode;
      let data = new FormData();
      data.append("Action", "GetServicePrice");
      data.append("SID", localStorage.sid);
      data.append("Token", localStorage.Token);
      data.append("Sign", sha256.sha256(signStr).toUpperCase());

      this.$http
        .post(this.global.url, data)
        .then(res => {
          this.listData = res.data.Data;
          for (var i = 0; i < this.listData.DesceList.length; i++) {
            this.descStr.push(this.listData.DesceList[i].AuthType);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    pushPay(index) {
      localStorage.pid = this.listData.PriceList[index].ID;
      this.$router.push({
        path: "/pay"
      });
    }
  },
  computed: {
    isAuthtype: {
      get() {
        return localStorage.AuthType;
      }
    }
  },
  mounted() {
    // 调用请求数据的方法
    this.getData();
    var ua = navigator.userAgent.toLowerCase();
    console.log(ua);
    // if (ua.match(/MicroMessenger/i) == 'micromessenger'){
    //     alert("微信");
    // }else{
    //     alert('其他');
    // }
  }
};
</script>