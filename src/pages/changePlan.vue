<template>
    <div>
        <m-header :title="title">
        </m-header>
        <div class="maincontainer">

            <label class="lab" style="font-size:15px; margin:10px;font-weight:900">已选计划</label>
            <img style="height:4px;width:100%;" src="../../static/images/Search-07.png" mode="scaleToFill"></img>

            <div class="top">
                <el-button class="btn" v-for="item in selectNameArr" :key="item">{{item}}</el-button>
                <!-- <el-button class="btn" style="background-image: url('../../static/images/Select-05.png')">12122</el-button> -->

            </div>

            <div class="middle"></div>

            <div class="planItemCell" v-for="item in planNameData" :key="item.toString()">
                <label class="lab" style="font-size:14px; margin-top:10px;margin-left:20px; font-weight:900;">{{item.Group}}</label>
                <div>
                    <el-button class="btn" v-for="item1 in item.PlanList" :key="item1.toString()">{{item1}}</el-button>
                </div>
            </div>

            <div class="bottom-btnView">
                <!-- <button plain="{{true}}" catchtap="ok" style="background-color: rgb(229, 87, 77);border-color:rgba(0,0,0,0);color:#fff;" class="bottom-btn">确定</button>
                        <button plain="{{true}}" catchtap="cancel" style="background-color: rgb(232, 159, 109);border-color:rgba(0,0,0,0);color:#fff;" class="bottom-btn">重置</button> -->
            </div>

        </div>
    </div>
</template>


<style lang="less" scoped>
.lab {
    text-align: left;
    width: 100%;
}

.maincontainer {
    display: flex;
    flex-direction: column;
}

.top {
    margin-bottom: 10px;
}

.middle {
    height: 20px;
    background: #fbf9fe;
}

.btn {
    height: 30px;
    align-content: center;
    background-size: 100% 100%;
    float: left;
    margin-left: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    padding: 5px 20px;
    font-size: 13px;
    border-radius: 0px;
}


.planItemCell {
    display: flex;
    flex-direction: column;

    .btn {
        height: 30px;
        align-content: center;
        background-size: 100% 100%;
        float: left;
        margin-left: 10px;
        margin-top: 10px;
        display: flex;
        align-items: center;
        padding: 5px 20px;
        font-size: 13px;
    }
}



.bottom-btnView {
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 40px;
    display: flex;
    justify-content: space-between;
}

.bottom-btn {
    width: 50%;
    border-radius: 0px;
}
</style>


<script>
import mHeader from '../components/hearder/Hearder';
import sha256 from '../util/sha256'
export default {
    data() {
        return {
            title: {
                text: '更改计划',
                showBack: true,
            },
            planNameData: "",
            selectNameArr: [],
        };
    },
    created() {
        this.selectNameArr = localStorage.selectNameArr.split(',');
        console.log(this.selectNameArr);
    },
    components: {
        mHeader,
    },
    methods: {
        getData() {
            let tokenCode = localStorage.tokenCode;
            let signStr = 'Action=GetAllPlanNames' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + tokenCode;
            let data = new FormData();
            data.append('Action', 'GetAllPlanNames');
            data.append('SID', localStorage.sid);
            data.append('Token', localStorage.Token);
            data.append('Sign', sha256.sha256(signStr).toUpperCase());
            this.$http.post(localStorage.SiteUrl, data).then(res => {
                this.planNameData = res.data.Data;
            }).catch(error => {
                console.log(error);
            })
        }
    },
    mounted() {
        // 调用请求数据的方法
        this.getData()
    },
}
</script>
