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
            <span v-show="shijianArr[0] > 0 && shijianArr[1] > 0" class="sj">{{shijianArr[0]}}</span>
            <span v-show="shijianArr[0] > 0 && shijianArr[1] > 0" class="sj">{{shijianArr[1]}}</span>
            <span v-show="shijianArr[0] > 0 && shijianArr[1] > 0" style="color:#FFFDE4">:</span>
            <span class="sj">{{shijianArr[2]}}</span>
            <span class="sj">{{shijianArr[3]}}</span>
            <span style="color:#FFFDE4">:</span>
            <span class="sj">{{shijianArr[4]}}</span>
            <span class="sj">{{shijianArr[5]}}</span>
        </div>
    </div>
</template>

<script>
import kjnum from './kjnum'
// var data = require('../../../static/data/clock')
import axios from 'axios';
import http from '../../util/http'
import sha256 from '../../util/sha256'

var time;
var tiemInterval;
var run;
export default {
    components: {
        kjnum,
    },
    // beforeMount() {
    //      //设置定时器，每3秒刷新一次
    //      var self = this;
    //      setInterval(getTotelNumber,1000)
    //      function getTotelNumber() {
    //          time --;
    //          console.log(time);
    //      }
    //      getTotelNumber();      
    // },
    created() {
        // console.log(data);

        // if(parseInt(this.KJData.NewLottery.NextPeriodTime)){
        //     console.log("---------------")
        //     console.log(parseInt(this.KJData.NewLottery.NextPeriodTime))
        // }else{
        //     console.log("time is 0");
        // }
    },
    data() {
        return {
            KJData: "",
            nextTime: "",
        }
    },

    methods: {
        getData1() {
            let tokenCode = localStorage.tokenCode;
            let signStr = 'Action=Clock' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + '&CurrentLottery=0' + tokenCode;
            let data = new FormData();
            data.append('Action', 'Clock');
            data.append('SID', localStorage.sid);
            data.append('Token', localStorage.Token);
            data.append('CurrentLottery', '0');
            data.append('Sign', sha256.sha256(signStr).toUpperCase());
            this.$http.post(localStorage.SiteUrl, data).then(res => {
                if (res.data.Data.NewLottery.NextPeriodTime > 0) {
                    clearInterval(run);
                    this.$router.push({
                        path: '/routerPush'
                    });
                } else {

                }
            }).catch(error => {
                console.log(error);
            })
        },
        getData() {
            clearInterval(run);
            let tokenCode = localStorage.tokenCode;
            let signStr = 'Action=Clock' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + '&CurrentLottery=0' + tokenCode;
            let data = new FormData();
            data.append('Action', 'Clock');
            data.append('SID', localStorage.sid);
            data.append('Token', localStorage.Token);
            data.append('CurrentLottery', '0');
            data.append('Sign', sha256.sha256(signStr).toUpperCase());

            //getClock握手
            this.$http.post(localStorage.SiteUrl, data).then(res => {
                this.KJData = res.data.Data
                this.nextTime = res.data.Data.NewLottery.NextPeriodTime;
                // this.nextTime = 5;
                // console.log("mounted" + this.time);

                //设置定时器，每1秒刷新一次
                var self = this;
                tiemInterval = setInterval(getTotelNumber, 1000)
                function getTotelNumber() {

                    if (self.nextTime > 0) {
                        self.nextTime--;

                    } else {
                        clearInterval(tiemInterval)
                        var i = 0;
                        run = setInterval(function() {
                            // self.$router.push({
                            //     path: '/routerPush'
                            // });
                            if(localStorage.isLogin == 'true') {
                                self.getData1();
                            }else {
                                clearInterval(tiemInterval)
                            }
                        }, 5000);
                    }
                    // console.log(self.nextTime);
                }

            }).catch(error => {
                console.log(error);
            })
        }
    },
    beforeDestroy() {
        clearInterval(tiemInterval)
    },
    mounted() {
        this.getData();

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
                time = parseInt(this.nextTime);
                // console.log('time')
                // console.log(time);
                var hour = parseInt(time / 3600);
                var minu = parseInt((time - hour * 3600) / 60);
                var second = time % 60;
                
                var num00 = parseInt(hour / 10) > 0 ? parseInt(hour / 10) : 0;
                var num01 = hour % 10;
                var num1 = parseInt(minu / 10) > 0 ? parseInt(minu / 10) : 0;
                var num2 = minu % 10;
                var num3 = parseInt(second / 10) > 0 ? parseInt(second / 10) : 0;
                var num4 = second % 10;

                var arr = [];
                arr.push(num00);
                arr.push(num01);
                arr.push(num1);
                arr.push(num2);
                arr.push(num3);
                arr.push(num4);
                return arr;

            },

        },
        time: {
            get() {
                return parseInt(this.nextTime);
            },

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
            width: 135px;
            font-size: 12px;
            padding: 6px 10px 6px 5px;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            color: #fff;
            background-image: url('../../../static/images/qishubg.png');
        }
        .qishu2 {
            // margin-left: 30px;
            font-size: 12px;
            width: 60px;
            align-content: right;
            color: #fff;

        }
        .xian {
            margin-left: -2px;
            margin-top: -1px;
            background-color: rgb(250, 143, 104);
            width: 58%;
            height: 1px;
        }
    }

    .top-middle {
        margin: 10px 5px;
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
            font-size: 12px;
            line-height: 20px;
            height: 20px;
        }
        .img {
            width: 10px;
            height: 10px;
            margin-top: 3px;
            margin-right: 5px;
            padding-top: 2.5px;
            background: url(../../../static/images/shouyeicon.png);
            -moz-background-size: 70% 70%;
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
        .sj {
            margin: 0px 2.5px;
            background-color: #fffde4;
            border-radius: 2.5px;
            line-height: 22px;
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

