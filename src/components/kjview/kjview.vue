<template>
    <div class="kjview">
        <div class="top-top">
            <span class="qishu1">第1242134214期开奖</span>
            <div class="xian"></div>
            <span class="qishu2">09:32:00</span>
        </div>

        <kjnum class="top-middle"></kjnum>

        <div wx:else class="top-bottom">
            <span class="label1">第21124214期开奖倒计时</span>
            <div class="img"> </div>
            <span class="sj">0</span>
            <span class="sj">5</span>
            <span style="color:#FFFDE4">:</span>
            <span class="sj">3</span>
            <span class="sj">4</span>
        </div>
    </div>
</template>

<script>
import kjnum from './kjnum'
export default {
    components: {
        kjnum,
    },

}
</script>


<style lang="less" scoped>
.kjview {
    height: auto;
    width: 100%;
    background-color: red;
    background: url(../../../static/images/shouyebg.png);
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

