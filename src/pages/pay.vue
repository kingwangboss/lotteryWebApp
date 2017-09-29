<template>
    <div>
        <m-header :title="title"></m-header>
        <div class="main">

            <div v-for="(item,index) in paytype" :key="item">
                <div v-if="item == 2">
                    <div class="cell" @click="cellClick(index)">
                        <img src="../../static/images/zflog.png" alt="">
                        <div class="title">
                            <span class="title-span1">{{listData.PriceList[index].PayTypeTitle}}</span>
                            <span class="title-span2">{{listData.PriceList[index].PayTypeDesc}}</span>
                        </div>
                        <img v-show="isSelect != 2" src="../../static/images/quan1.png" alt="">
                        <img v-show="isSelect == 2" src="../../static/images/quan2.png" alt="">
                    </div>
                    <div class="line">
                    </div>
                </div>
                <div v-else-if="item == 1">
                    <div class="cell" @click="cellClick(index)">
                        <img src="../../static/images/wxlog.png" alt="">
                        <div class="title">
                            <span class="title-span1">{{listData.PriceList[index].PayTypeTitle}}</span>
                            <span class="title-span2">{{listData.PriceList[index].PayTypeDesc}}</span>
                        </div>
                        <img v-show="isSelect != 1" src="../../static/images/quan1.png" alt="">
                        <img v-show="isSelect == 1" src="../../static/images/quan2.png" alt="">
                    </div>
                    <div class="line">
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom-btndiv">
            <button class="bottom-btn" @click="payClick">确认支付 {{price}}</button>
        </div>
    </div>
</template>

<style lang="less" scoped>
.main {

    display: flex;
    flex-direction: column;
    .line {
        height: 1px;
        background: #B7B7B7;
    }
}

.cell {
    display: flex;
    flex-direction: row;
    height: 60px;
    img {
        margin: 15px 15px;
        height: 30px;
        widows: 30px;
    }
    .title {
        margin: 10px 10px;
        height: 40px;
        width: 80%;
        display: flex;
        flex-direction: column;
        .title-span1 {
            font-size: 16px;
            font-weight: 900;
            color: black;
        }
        .title-span2 {
            margin-top: 10px;
            font-size: 11px;
            color: #B7B7B7;
        }
    }
}

.bottom-btnView {
    width: 100%;
    position: fixed;
    bottom: 10px;
    height: 40px;
    display: flex;
    justify-content: center;
}

.bottom-btn {
    margin-top: 100%;
    margin-bottom: 20px;
    width: 60%;
    height: 40px;
    border-radius: 20px;
    line-height: 35px;
    background-color: rgb(229, 87, 77);
    border-color: rgba(0, 0, 0, 0);
    color: #fff;
    outline: none;
}
</style>

<script>
import mHeader from '../components/hearder/Hearder';
import sha256 from '../util/sha256'
export default {
    data() {
        return {
            title: {
                text: '支付订单',
                showBack: true,
                right: false,
            },
            pid: localStorage.pid,
            listData: "",
            price: '',
            url: '',
            paytype: localStorage.PayType.split(','),
            isSelect: '',
        };
    },
    components: {
        mHeader,
    },
    methods: {
        payClick() {
            console.log(this.pid);
            console.log(this.isSelect);
            if (this.isSelect == 1) {
                console.log('微信');
                this.url = 'http://wz.cpnet.com/wechat/purchase/#/wxservicePrice/' + this.pid + '?uid=' + localStorage.uid;
            } else if(this.isSelect == 2) {
                console.log('zhifubao');
                this.url = 'http://wz.cpnet.com/wechat/purchase/#/servicePrice/' + this.pid + '?uid=' + localStorage.uid;
            }

            window.location.href = this.url;
        },
        cellClick(index) {

            this.isSelect = this.paytype[index];
            if (this.isSelect == 1) {
                console.log('微信');
                this.price = this.listData.PriceList[index].PayTypeDisPrice.toFixed(2);
            } else if(this.isSelect == 2) {
                console.log('zhifubao');
                this.price = this.listData.PriceList[index].PayTypeDisPrice.toFixed(2);
            }
        },
        getData() {
            let tokenCode = localStorage.tokenCode;
            let signStr = 'Action=GetServicePriceByPid' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + '&PID=' + localStorage.pid + tokenCode;
            let data = new FormData();
            data.append('Action', 'GetServicePriceByPid');
            data.append('SID', localStorage.sid);
            data.append('Token', localStorage.Token);
            data.append('PID', localStorage.pid);
            data.append('Sign', sha256.sha256(signStr).toUpperCase());

            this.$http.post('https://ycwidx.cpnet.com', data).then(res => {
                this.listData = res.data.Data;
                var arr =[];
                for(var i = 0; i < this.paytype.length; i++){
                    for(var j =0; j < this.listData.PriceList.length;j++){
                        if(this.paytype[i] == this.listData.PriceList[j].PayType){
                            arr.push(this.listData.PriceList[j]);
                        }
                    }
                }
                // console.log(arr);
                this.listData.PriceList = arr;

                this.price = this.listData.PriceList[0].PayTypeDisPrice.toFixed(2);

            }).catch(error => {
                console.log(error);
            })
        },
    },
    computed: {

    },
    mounted() {
        // 调用请求数据的方法
        this.getData()
        this.cellClick(0);
    }
}
</script>
