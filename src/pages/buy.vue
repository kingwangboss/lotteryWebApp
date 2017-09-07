<template>
    <div style="overflow:hidden">
        <m-header :title="title"></m-header>
        <div v-if="isAuthtype == 2">
            <div class="rectangle1">
                <div>
                    <div class="top" @click="pushPay(0)">
                        <div class="top-div" style="color:#8A73FD;">{{listData.PriceList[0].AuthTitle}}</div>
                        <div class="top-div" style="color:#BDB6E3;text-decoration:line-through">{{listData.PriceList[0].SourcePrice.toFixed(2)}}</div>
                        <div class="top-div" style="color:#8A73FD;">{{listData.PriceList[0].Price.toFixed(2)}}</div>
                        <el-button style="background-color: #8A73FD;" class="btn" type="primary">{{listData.PriceList[0].PurchaseType}}</el-button>
                    </div>
                    <div class="line" style="border: 1px dashed #8A73FD;">
                    </div>
                </div>
                <div>
                    <div class="top" @click="pushPay(1)">
                        <div class="top-div" style="color:#8A73FD;">{{listData.PriceList[1].AuthTitle}}</div>
                        <div class="top-div" style="color:#BDB6E3;text-decoration:line-through">{{listData.PriceList[1].SourcePrice.toFixed(2)}}</div>
                        <div class="top-div" style="color:#8A73FD;">{{listData.PriceList[1].Price.toFixed(2)}}</div>
                        <el-button style="background-color: #8A73FD;" class="btn" type="primary">{{listData.PriceList[1].PurchaseType}}</el-button>
                    </div>
                    <div class="line" style="border: 1px dashed #8A73FD;">
                    </div>
                    <p style="color:#8A73FD">{{listData.DesceList[0].Desc}}</p>
                </div>
            </div>

            <div class="rectangle2" >
                <div>
                    <div class="top" @click="pushPay(2)">
                        <div class="top-div" style="color:#F76587;">{{listData.PriceList[2].AuthTitle}}</div>
                        <div class="top-div" style="color:#ECB7C4;text-decoration:line-through">{{listData.PriceList[2].SourcePrice.toFixed(2)}}</div>
                        <div class="top-div" style="color:#F76587;">{{listData.PriceList[2].Price.toFixed(2)}}</div>
                        <el-button style="background-color: #F76587;" class="btn" type="primary">{{listData.PriceList[2].PurchaseType}}</el-button>
                    </div>
                    <div class="line" style="border: 1px dashed #F76587;">
                    </div>
                </div>
                <div>
                    <div class="top" @click="pushPay(3)">
                        <div class="top-div" style="color:#F76587;">{{listData.PriceList[3].AuthTitle}}</div>
                        <div class="top-div" style="color:#ECB7C4;text-decoration:line-through">{{listData.PriceList[3].SourcePrice.toFixed(2)}}</div>
                        <div class="top-div" style="color:#F76587;">{{listData.PriceList[3].Price.toFixed(2)}}</div>
                        <el-button style="background-color: #F76587;" class="btn" type="primary">{{listData.PriceList[3].PurchaseType}}</el-button>
                    </div>
                    <div class="line" style="border: 1px dashed #F76587;">
                    </div>
                    <p style="color:#F76587">{{listData.DesceList[1].Desc}}</p>
                </div>
            </div>
        </div>

        <div v-else-if="isAuthtype == 3">

            <div class="rectangle2">
                <div>
                    <div class="top" @click="pushPay(0)">
                        <div class="top-div" style="color:#F76587;">{{listData.PriceList[0].AuthTitle}}</div>
                        <div class="top-div" style="color:#ECB7C4;text-decoration:line-through">{{listData.PriceList[0].SourcePrice.toFixed(2)}}</div>
                        <div class="top-div" style="color:#F76587;">{{listData.PriceList[0].Price.toFixed(2)}}</div>
                        <el-button style="background-color: #F76587;" class="btn" type="primary">{{listData.PriceList[0].PurchaseType}}</el-button>
                    </div>
                    <div class="line" style="border: 1px dashed #F76587;">
                    </div>
                </div>
                <div>
                    <div class="top" @click="pushPay(1)">
                        <div class="top-div" style="color:#F76587;">{{listData.PriceList[1].AuthTitle}}</div>
                        <div class="top-div" style="color:#ECB7C4;text-decoration:line-through">{{listData.PriceList[1].SourcePrice.toFixed(2)}}</div>
                        <div class="top-div" style="color:#F76587;">{{listData.PriceList[1].Price.toFixed(2)}}</div>
                        <el-button style="background-color: #F76587;" class="btn" type="primary">{{listData.PriceList[1].PurchaseType}}</el-button>
                    </div>
                    <div class="line" style="border: 1px dashed #F76587;">
                    </div>
                    <p style="color:#F76587">{{listData.DesceList[0].Desc}}</p>
                </div>
            </div>
        </div>

        <div v-else>
            <div class="rectangle">
                <div>
                    <div class="top" @click="pushPay(0)">
                        <div class="top-div" style="color: #58C5E0;">{{listData.PriceList[0].AuthTitle}}</div>
                        <div class="top-div" style="color:#AED6E0;text-decoration:line-through">{{listData.PriceList[0].SourcePrice.toFixed(2)}}</div>
                        <div class="top-div" style="color:#58C5E0;">{{listData.PriceList[0].Price.toFixed(2)}}</div>
                        <el-button class="btn" type="primary">{{listData.PriceList[0].PurchaseType}}</el-button>
                    </div>
                    <div class="line">
                    </div>
                    <p style="color:#58C5E0">{{listData.DesceList[0].Desc}}</p>
                </div>
            </div>

            <div class="rectangle1">
                <div>
                    <div class="top" @click="pushPay(1)">
                        <div class="top-div" style="color:#8A73FD;">{{listData.PriceList[1].AuthTitle}}</div>
                        <div class="top-div" style="color:#BDB6E3;text-decoration:line-through">{{listData.PriceList[1].SourcePrice.toFixed(2)}}</div>
                        <div class="top-div" style="color:#8A73FD;">{{listData.PriceList[1].Price.toFixed(2)}}</div>
                        <el-button style="background-color: #8A73FD;" class="btn" type="primary">{{listData.PriceList[1].PurchaseType}}</el-button>
                    </div>
                    <div class="line" style="border: 1px dashed #8A73FD;">
                    </div>
                </div>
                <div>
                    <div class="top" @click="pushPay(2)">
                        <div class="top-div" style="color:#8A73FD;">{{listData.PriceList[2].AuthTitle}}</div>
                        <div class="top-div" style="color:#BDB6E3;text-decoration:line-through">{{listData.PriceList[2].SourcePrice.toFixed(2)}}</div>
                        <div class="top-div" style="color:#8A73FD;">{{listData.PriceList[2].Price.toFixed(2)}}</div>
                        <el-button style="background-color: #8A73FD;" class="btn" type="primary">{{listData.PriceList[2].PurchaseType}}</el-button>
                    </div>
                    <div class="line" style="border: 1px dashed #8A73FD;">
                    </div>
                    <p style="color:#8A73FD">{{listData.DesceList[1].Desc}}</p>
                </div>
            </div>

            <div class="rectangle2">
                <div>
                    <div class="top" @click="pushPay(3)">
                        <div class="top-div" style="color:#F76587;">{{listData.PriceList[3].AuthTitle}}</div>
                        <div class="top-div" style="color:#ECB7C4;text-decoration:line-through">{{listData.PriceList[3].SourcePrice.toFixed(2)}}</div>
                        <div class="top-div" style="color:#F76587;">{{listData.PriceList[3].Price.toFixed(2)}}</div>
                        <el-button style="background-color: #F76587;" class="btn" type="primary">{{listData.PriceList[3].PurchaseType}}</el-button>
                    </div>
                    <div class="line" style="border: 1px dashed #F76587;">
                    </div>
                </div>
                <div>
                    <div class="top" @click="pushPay(4)">
                        <div class="top-div" style="color:#F76587;">{{listData.PriceList[4].AuthTitle}}</div>
                        <div class="top-div" style="color:#ECB7C4;text-decoration:line-through">{{listData.PriceList[4].SourcePrice.toFixed(2)}}</div>
                        <div class="top-div" style="color:#F76587;">{{listData.PriceList[4].Price.toFixed(2)}}</div>
                        <el-button style="background-color: #F76587;" class="btn" type="primary">{{listData.PriceList[4].PurchaseType}}</el-button>
                    </div>
                    <div class="line" style="border: 1px dashed #F76587;">
                    </div>
                    <p style="color:#F76587">{{listData.DesceList[2].Desc}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.rectangle {
    margin: 20px 5px;
    background-image: url('../../static/images/Pruchase/Pruchase-06.png');
    background-repeat: no-repeat;
    background-size: 100% 100%; // height: 100px;
    display: flex;
    flex-direction: column;
    .top {
        margin-left: 10px;
        height: 62px; // line-height: 62px;
        display: flex;
        flex-direction: row;
        align-items: center;
        .top-div {
            margin-left: 3%;
            margin-right: 3%;
            font-size: 12px;
            font-weight: 900
        }
        .btn {
            position: relative;
            right:-5%;
            height: 30px;
            width: 17%;
            border-radius: 30px;
            background-color: #58C5E0;
            border: 0;
            color: white;
            font-size: 14px;
        }
    }
    .line {
        margin: 0px 11px;
        border: 1px dashed #58C5E0; // background: rebeccapurple;
    }
    p {
        margin: 0px 10px;
        margin-top: 5px;
        text-align: left;
        height: 30px;
        font-size: 12px;
    }
}

.rectangle1 {
    margin: 20px 5px;
    background-image: url('../../static/images/Pruchase/Pruchase-07.png');
    background-repeat: no-repeat;
    background-size: 100% 100%; // height: 100px;
    display: flex;
    flex-direction: column;
    .top {
        margin-left: 10px;
        height: 62px; // line-height: 62px;
        display: flex;
        flex-direction: row;
        align-items: center;
        .top-div {
            margin-left: 3%;
            margin-right: 3%;
            font-size: 12px;
            font-weight: 900
        }
        .btn {
            position: relative;
            right:-5%;
            height: 30px;
            width: 17%;
            border-radius: 30px;
            background-color: #58C5E0;
            border: 0;
            color: white;
            font-size: 14px;
        }
    }
    .line {
        margin: 0px 11px;
        border: 1px dashed #58C5E0; // background: rebeccapurple;
    }
    p {
        margin: 0px 10px;
        margin-top: 5px;
        text-align: left;
        height: 30px;
        font-size: 12px;
    }
}

.rectangle2 {
    margin: 20px 5px;
    background-image: url('../../static/images/Pruchase/Pruchase-08.png');
    background-repeat: no-repeat;
    background-size: 100% 100%; // height: 100px;
    display: flex;
    flex-direction: column;
    .top {
        margin-left: 10px;
        height: 62px; // line-height: 62px;
        display: flex;
        flex-direction: row;
        align-items: center;
        .top-div {
            margin-left: 3%;
            margin-right: 3%;
            font-size: 12px;
            font-weight: 900
        }
        .btn {
            position: relative;
            right:-5%;
            height: 30px;
            width: 17%;
            border-radius: 30px;
            background-color: #58C5E0;
            border: 0;
            color: white;
            font-size: 14px;
        }
    }
    .line {
        margin: 0px 11px;
        border: 1px dashed #58C5E0; // background: rebeccapurple;
    }
    p {
        margin: 0px 10px;
        margin-top: 5px;
        text-align: left;
        height: 30px;
        font-size: 12px;
    }
}

</style>


<script>
import mHeader from '../components/hearder/Hearder';
import sha256 from '../util/sha256'
export default {
    data() {
        return {
            title: {
                text: '购买续费',
                showBack: true,
                right: false,
            },
            listData: '',
            descStr: [],
        };
    },
    components: {
        mHeader,
    },
    methods: {
        getData() {
            let tokenCode = localStorage.tokenCode;
            let signStr = 'Action=GetServicePrice' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + tokenCode;
            let data = new FormData();
            data.append('Action', 'GetServicePrice');
            data.append('SID', localStorage.sid);
            data.append('Token', localStorage.Token);
            data.append('Sign', sha256.sha256(signStr).toUpperCase());

            this.$http.post('https://ycwidx.cpnet.com', data).then(res => {
                this.listData = res.data.Data;
                for (var i = 0; i < this.listData.DesceList.length; i++) {
                    this.descStr.push(this.listData.DesceList[i].AuthType)
                }

            }).catch(error => {
                console.log(error);
            })
        },
    
        pushPay(index) {
            localStorage.pid = this.listData.PriceList[index].ID;
            this.$router.push({
                path: '/pay',
            })
        },
    },
    computed: {
        isAuthtype: {
            get() {
                return localStorage.AuthType;
            }
        },
    },
    mounted() {
        // 调用请求数据的方法
        this.getData()
        var ua = navigator.userAgent.toLowerCase();
        console.log(ua);
        // if (ua.match(/MicroMessenger/i) == 'micromessenger'){
        //     alert("微信");
        // }else{
        //     alert('其他');
        // }
    }
}
</script>
