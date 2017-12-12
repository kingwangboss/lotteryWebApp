<template>
    <div style="overflow:hidden">
        <m-header :title="title"></m-header>
        <div v-if="listData.DesceList[index].AuthType == 1" class="cell1" v-for="(DesceList,index) in listData.DesceList" :key="DesceList.toString()">
            <div class="cell-item" v-for="(PriceList,index1) in listData.PriceList" :key="PriceList.toString()">
                <div class="cell-top"  @click="pushPay(index1)" v-if="listData.DesceList[index].AuthType == listData.PriceList[index1].AuthType" style="border-bottom: 1px dotted #58C5E0;">
                    <div class="top-div" style="color:#58C5E0;">{{listData.PriceList[index1].AuthTitle}}</div>
                    <div class="top-div" style="color:#58C5E0;text-decoration:line-through;width: 13%;">{{listData.PriceList[index1].SourcePrice.toFixed(2)}}</div>
                    <div class="top-div" style="color:#58C5E0;width: 13%;">{{listData.PriceList[index1].Price.toFixed(2)}}</div>
                    <button style="background-color: #58C5E0;" class="btn" type="primary">{{listData.PriceList[index1].PurchaseType}}</button>
                </div>
                
            </div>
            <div class="cell-desc1" v-if="listData.DesceList[index].AuthType == 1">
                {{listData.DesceList[index].Desc}}
            </div>
            <div class="cell-desc2" v-if="listData.DesceList[index].AuthType == 2">
                {{listData.DesceList[index].Desc}}
            </div>
            <div class="cell-desc3" v-if="listData.DesceList[index].AuthType == 3">
                {{listData.DesceList[index].Desc}}
            </div>
        </div>


        <div v-if="listData.DesceList[index].AuthType == 2" class="cell2" v-for="(DesceList,index) in listData.DesceList" :key="DesceList.toString()">
            <div class="cell-item" v-for="(PriceList,index1) in listData.PriceList" :key="PriceList.toString()">
                <div class="cell-top"  @click="pushPay(index1)" v-if="listData.DesceList[index].AuthType == listData.PriceList[index1].AuthType" style="border-bottom: 1px dotted #8A73FD;">
                    <div class="top-div" style="color:#8A73FD;">{{listData.PriceList[index1].AuthTitle}}</div>
                    <div class="top-div" style="color:#8A73FD;text-decoration:line-through;width: 13%;">{{listData.PriceList[index1].SourcePrice.toFixed(2)}}</div>
                    <div class="top-div" style="color:#8A73FD;width: 13%;">{{listData.PriceList[index1].Price.toFixed(2)}}</div>
                    <button style="background-color: #8A73FD;" class="btn" type="primary">{{listData.PriceList[index1].PurchaseType}}</button>
                </div>
                
            </div>
            <div class="cell-desc1" v-if="listData.DesceList[index].AuthType == 1">
                {{listData.DesceList[index].Desc}}
            </div>
            <div class="cell-desc2" v-if="listData.DesceList[index].AuthType == 2">
                {{listData.DesceList[index].Desc}}
            </div>
            <div class="cell-desc3" v-if="listData.DesceList[index].AuthType == 3">
                {{listData.DesceList[index].Desc}}
            </div>
        </div>
        
        <div v-if="listData.DesceList[index].AuthType == 3" class="cell3" v-for="(DesceList,index) in listData.DesceList" :key="DesceList.toString()">
            <div class="cell-item" v-for="(PriceList,index1) in listData.PriceList" :key="PriceList.toString()">
                <div class="cell-top"  @click="pushPay(index1)" v-if="listData.DesceList[index].AuthType == listData.PriceList[index1].AuthType" style="border-bottom: 1px dotted #F76587;">
                    <div class="top-div" style="color:#F76587;">{{listData.PriceList[index1].AuthTitle}}</div>
                    <div class="top-div" style="color:#F76587;text-decoration:line-through;width: 13%;">{{listData.PriceList[index1].SourcePrice.toFixed(2)}}</div>
                    <div class="top-div" style="color:#F76587;width: 13%;">{{listData.PriceList[index1].Price.toFixed(2)}}</div>
                    <button style="background-color: #F76587;" class="btn" type="primary">{{listData.PriceList[index1].PurchaseType}}</button>
                </div>
                
            </div>
            <div class="cell-desc1" v-if="listData.DesceList[index].AuthType == 1">
                {{listData.DesceList[index].Desc}}
            </div>
            <div class="cell-desc2" v-if="listData.DesceList[index].AuthType == 2">
                {{listData.DesceList[index].Desc}}
            </div>
            <div class="cell-desc3" v-if="listData.DesceList[index].AuthType == 3">
                {{listData.DesceList[index].Desc}}
            </div>
        </div>

    </div>
</template>

<style lang="less" scoped>
.cell1 {
  margin: 20px 5px;
  border: 1px solid #58C5E0;
  border-radius: 2px;
}

.cell2 {
  margin: 20px 5px;
  border: 1px solid #8A73FD;
  border-radius: 2px;
}

.cell3 {
  margin: 20px 5px;
  border: 1px solid #F76587;
  border-radius: 2px;
}

.cell-desc1 {
    margin: 0px 10px 5px 10px;
    margin-top: 5px;
    text-align: left;
    font-size: 12px;
    color:#58C5E0;
  }
  .cell-desc2 {
    margin: 0px 10px 5px 10px;
    margin-top: 5px;
    text-align: left;
    font-size: 12px;
    color:#8A73FD;
  }
  .cell-desc3 {
    margin: 0px 10px 5px 10px;
    margin-top: 5px;
    text-align: left;
    font-size: 12px;
    color:#F76587;
  }

.cell2 {
  margin: 20px 5px;
  border: 1px solid #8A73FD;
  .cell-desc {
    margin: 0px 10px 5px 10px;
    margin-top: 5px;
    text-align: left;
    font-size: 12px;
    color:#8A73FD;
  }
}

.cell3 {
  margin: 20px 5px;
  border: 1px solid #F76587;
  .cell-desc {
    margin: 0px 10px 5px 10px;
    margin-top: 5px;
    text-align: left;
    font-size: 12px;
    color:#F76587;
  }
}

.cell-top {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  .top-div {
    margin-left: 3%;
    margin-right: 3%;
    font-size: 15px;
    font-weight: 900;
    text-align: left;
    width: 30%;
  }
  .btn {
    // position: relative;
    // right:-5%;

    height: 18px;
    line-height: 6px;
    margin-left: 10%;
    border-radius: 25px;
    background-color: #58C5E0;
    border: 0;
    color: white;
    font-size: 8px;
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
        .post("https://ycwidx.cpnet.com", data)
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