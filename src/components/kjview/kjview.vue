<template>
    <div class="kjview">
        <div class="top-top">
            <span class="qishu1">第{{KJData.NewLottery.CurrentPeriod}}期开奖</span>
            <div class="xian"></div>
            <span class="qishu2">{{shijian}}</span>
        </div>

        <kjnum class="top-middle" :data="kjnum"></kjnum>

        <div class="top-bottom" v-if="time===0">
            <span class="label1">第{{KJData.NewLottery.NextPeriod}}期正在开奖...</span>
        </div>
        <div class="top-bottom" v-else>
            <span class="label1">第{{KJData.NewLottery.NextPeriod}}期开奖倒计时</span>
            <div class="img"> </div>
            <span class="sj">{{shijianArr[0]}}</span>
            <span class="sj">{{shijianArr[1]}}</span>
            <span style="color:#FFFDE4">:</span>
            <span class="sj">{{shijianArr[2]}}</span>
            <span class="sj">{{shijianArr[3]}}</span>
        </div>
    </div>
</template>

<script>
import kjnum from './kjnum'
var data = require('../../../static/data/clock')
import axios from 'axios';
import http from '../../util/http'
import sha256 from '../../util/sha256'

export default {
    components: {
        kjnum,
    },
    created() {
        // console.log(data);
        let tokenCode = localStorage.tokenCode;
        let signStr = 'Action=Clock' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + '&CurrentLottery=0' + tokenCode;
        let data = new FormData();
        data.append('Action', 'Clock');
        data.append('SID', localStorage.sid);
        data.append('Token', localStorage.Token);
        data.append('CurrentLottery', '0');
        data.append('Sign', sha256.sha256(signStr).toUpperCase());
        // console.log('tokencode'+tokenCode)
        // console.log('toeken'+localStorage.Token)
        // console.log('sign'+sha256.sha256(signStr).toUpperCase())
        // let signStr = '2' + localStorage.Username + '4YCW1.0' + sha256.sha256(localStorage.pwd).toUpperCase();
        // let data = new FormData();
        // data.append('Action', 'Login');
        // data.append('SID', '2');
        // data.append('Account', localStorage.Username);
        // data.append('AppType', '4');
        // data.append('AppCode', 'YCW');
        // data.append('AppVersion', '1.0');
        // data.append('Sign', sha256.sha256(signStr).toUpperCase());

        //getClock握手
        this.$http.post(localStorage.SiteUrl, data).then(res => {
            // console.log(res.data.Data);
            this.KJData = res.data.Data
        }).catch(error => {
            console.log(error);
        })
    },
    data() {
        return {
            KJData: data,
        }
    },
    computed: {
        shijian: {
            get() {
                return this.KJData.NewLottery.CurrentOpenTime.split(" ")[1];
            }
        },
        kjnum: {
            get() {
                return this.KJData.NewLottery.LotteryResult.split(',');
            }
        },
        shijianArr: {
            get() {
                var time = parseInt(this.KJData.NewLottery.NextPeriodTime);
                console.log(time);
                var minu = parseInt(time / 60);
                var second = time % 60;

                var num1 = parseInt(minu / 10) > 0 ? parseInt(minu / 10) : 0;
                var num2 = minu % 10;
                var num3 = parseInt(second / 10) > 0 ? parseInt(second / 10) : 0;
                var num4 = second % 10;

                var arr = [];
                arr.push(num1);
                arr.push(num2);
                arr.push(num3);
                arr.push(num4);
                return arr;

            }
        },
        time: {
            get() {
                return parseInt(this.KJData.NewLottery.NextPeriodTime);
            }
        }
    }

}
</script>


<style lang="less" scoped>
.kjview {
    height: auto;
    width: 100%;
    background-color: red;
    background: url(../../../static/images/shouyebg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    .top-top {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-top: 15px;
        .qishu1 {
            width: 180px;
            font-size: 14px;
            padding: 5px 10px 5px 5px;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            color: #fff;
            background-image: url('../../../static/images/qishubg.png');
        }
        .qishu2 {
            // margin-left: 30px;
            width: 70px;
            align-content: right;
            color: #fff;
        }
        .xian {
            background-color: #eb8e89;
            width: 130px;
            height: 1px;
        }
    }

    .top-middle {
        margin: 10px 0;
    }

    .top-bottom {
        display: flex;
        flex-direction: row;
        margin-top: 0px;
        margin-bottom: 10px;
        justify-content: center;
        height: 20px;
        .label1 {
            color: #fffde4;
            font-size: 13px;
            line-height: 20px;
            height: 20px;
        }
        .img {
            width: 15px;
            height: 15px;
            padding-top: 2.5px;
            background: url(../../../static/images/shouyeicon.png);
            -moz-background-size: 100% 100%;
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
        .sj {
            margin: 0px 2.5px;
            background-color: #fffde4;
            border-radius: 2.5px;
            line-height: 20px;
            height: 20px;
            width: 14px;
            text-align: center;
            font-size: 15px;
            font-weight: bold;
            color: #db3c3e;
        }
    }
}
</style>

