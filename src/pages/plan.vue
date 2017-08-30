<template>
    <div>
        <m-header :title="title"></m-header>
        <div class="maincontainer">

            <div class="middleLine">
            </div>

            <div class="middlecontainer">
                <span class="textbtn first" style="border-left-width: 1px;" @click="xzCaizhongClick">选择彩种</span>
                <span class="textbtn">更改计划</span>
                <span class="textbtn">计划分享</span>
                <span class="textbtn">切换公式</span>
                <span class="textbtn last">近{{PlanData.CycleCount}}期计划</span>
            </div>

            <plancell :data="PlanData"></plancell>

            <div class="bottom-title">善意提醒：小心参考，理性投资</div>

        </div>
    </div>
</template>

<style lang="less" scoped>
.maincontainer {
    // padding-bottom: 20px;
    height: auto;
    display: flex;
    flex-direction: column;
    background: #fbf9fe;
    .middleLine {
        height: 10px;
        background: #ededed;
    }
    .middlecontainer {
        display: flex;
        flex-direction: row;
        justify-content: center;

        .textbtn {

            font-size: 12px;
            width: 17%;
            margin-top: 10px;
            margin-bottom: 10px;
            line-height: 30px;
            height: 30px;
            background: #f6f6f6;
            border: 1px solid #d8d8d8;
            border-left-width: 0px;
            text-align: center;
            color: #767676;
            /* border-top-left-radius: 15rpx;
   border-bottom-left-radius: 15rpx; */
            &.first {
                border-top-left-radius: 7.5px;
                border-bottom-left-radius: 7.5px;
            }
            &.last {
                border-top-right-radius: 7.5px;
                border-bottom-right-radius: 7.5px;
                width: 26%;
            }
        }
    }
    p {
        height: 70px;
        line-height: 70px;
    }
    .sss {
        background: blue;
    }
    .last {
        background: rebeccapurple;
    }
    .bottom-title {
        text-align: center;
        font-size: 12.5px;
        color: gray;
        margin-bottom: 10px;
    }
}
</style>

<script>
import mHeader from '../components/hearder/Hearder';
import plancell from '../components/plancell/plancell'
let AllData = require('../../static/data/GetPlanData2')
import sha256 from '../util/sha256'
export default {
    data() {
        return {
            PlanData: "",
            title: {
                text: localStorage.czname,
                showBack: false,
            },
        }
    },
    components: {
        plancell,
        mHeader,
    },
    created() {
        this.PlanData = AllData.Data

    },
    methods: {
        getData() {
            // 请求数据
            let tokenCode = localStorage.tokenCode;
            let signStr = 'Action=GetPlanDatas2&AutoOpt=0' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + tokenCode;
            let data = new FormData();
            data.append('Action', 'GetPlanDatas2');
            data.append('AutoOpt', '0');
            data.append('SID', localStorage.sid);
            data.append('Token', localStorage.Token);
            data.append('Sign', sha256.sha256(signStr).toUpperCase());
            this.$http.post(localStorage.SiteUrl, data).then(res => {
                this.PlanData = res.data.Data;
            }).catch(error => {
                console.log(error);
            })
        },
        xzCaizhongClick() {
            this.$router.push({
                path: '/XZcaizhong'
            })
        },
    },
    mounted() {
        // 调用请求数据的方法
        this.getData()
    }

}
</script>
