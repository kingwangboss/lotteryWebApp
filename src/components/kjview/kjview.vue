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
                            self.$router.push({
                                path: '/routerPush'
                            });
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
            width: 150px;
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
            width: 40%;
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

