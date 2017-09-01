<template>
    <div>
        
        <m-header :title="title"></m-header>
        
        <kjview></kjview>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane :label="item.PlanName" :name="index.toString()" :index="index.toString()" v-for="(item,index) in listData" :key="index">
                <!-- id控制 计划切换 -->
                <div class="detail-top">
                    <div class="detail-top-content">
                        <div class="psview">准确率:</div>
                        <div class="psvalue">{{item.RightRate}}</div>
                    </div>
                    <div class="detail-top-content">
                        <div class="psview">最大连对:</div>
                        <div class="psvalue">{{item.MaxAlwaysRight}}</div>
                    </div>
                    <div class="detail-top-content">
                        <div class="psview">最大连错:</div>
                        <div class="psvalue">{{item.MaxAlwaysWrong}}</div>
                    </div>
                    <div class="detail-top-content">
                        <div class="psview">当前连对/错:</div>
                        <div class="psvalue">{{item.CurrentROrW}}</div>
                    </div>

                    <!-- id控制 计划切换 -->
                    <div class="detail-top-content" v-for="(item1,index1) in item.RightTimes ? item.RightTimes.split(',') : 0" :key="item1" v-show="item.RightTimes">
                        <div class="psview">第{{index1+1}}期中:</div>
                        <div class="psvalue">{{item1}}</div>
                        <div class="psview">次</div>
                    </div>
                </div>

                <!-- cell -->
                <div class="detail-bottom">

                    <div class="bottom-cell" style="background:RGB(250, 250, 250);" v-for="(itemCell,indexCell) in item.PlanDetails" :key="itemCell">
                        <span class="cell-item1">{{itemCell.split('|')[0]}}</span>
                        <span class="cell-item2">{{itemCell.split('|')[2] ? itemCell.split('|')[2] : '1'}}</span>
                        <span class="cell-item3">{{itemCell.split('|')[1]}}</span>

                        <span v-if="itemCell.split('|')[5] === '对'" class="cell-item4" style="color:#16B482;">{{itemCell.split('|')[5]}}</span>
                        <span v-else-if="itemCell.split('|')[5] === '错' " class="cell-item4" style="color:#f82b56;">{{itemCell.split('|')[5]}}</span>
                        <span v-else class="cell-item4" style="color:#6E6E6E;">{{itemCell.split('|')[5]}}</span>
                    </div>

                </div>

            </el-tab-pane>
        </el-tabs>

    </div>
</template>

<style lang="less" scoped>
.detail-top {
    background: #f8e6e5;
    padding: 5px 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-start;
    border-bottom: 1px solid #d8d8d8;
}

.detail-top-content {
    height: 15px;
    width: 75px;
    align-content: center;
    margin-left: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    font-size: 12px;
}

.psview {
    color: #8e7b7b;
    font-size: 10px;
}

.psvalue {
    padding-left: 3px;
    color: #f00;
}

.detail-bottom {
    background: #fff;
    height: 1000rpx;
}


.bottom-cell {
    display: flex;
    flex-direction: row;
    /* background: RGB(250, 250, 250); */
    word-wrap: break-word;
}

.cell-item1 {
    padding-left: 5px;
    display: flex;
    width: 20%;
    font-size: 12px;
    color: #6E6E6E;
    align-items: center;
}

.cell-item2 {
    border-right: 5px solid #fff;
    border-left: 5px solid #fff;
    width: 25px;
    font-size: 15px;
    text-align: center;
    display: flex;
    align-items: center;
    padding-left: 13px;
    color: #6E6E6E;
}

.cell-item3 {
    border-right: 5px solid #fff;
    width: 40%;
    font-size: 15px;
    text-align: center;
    line-height: auto;
    padding: 10px 5px;
    white-space: pre-line;
    color: #16B482;
}

.cell-item4 {
    display: flex;
    align-items: center;
    font-size: 15px;
    padding-left: 20px;
}
</style>


<script>
import mHeader from '../components/hearder/Hearder';
import kjview from '../components/kjview/kjview'
import sha256 from '../util/sha256'
import 'element-ui/lib/theme-default/index.css'
export default {
    data() {
        return {
            title: {
                text: '计划详情',
                showBack: true,
                right:true,
            },
            activeName: localStorage.detailID,
            listData: '',
            zjnum: []
        };
    },
    created() {

    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },

        getData() {
            // 请求数据
            let tokenCode = localStorage.tokenCode;
            let signStr = 'Action=GetPlanDetails' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + tokenCode;
            let data = new FormData();
            data.append('Action', 'GetPlanDetails');
            data.append('SID', localStorage.sid);
            data.append('Token', localStorage.Token);
            data.append('Sign', sha256.sha256(signStr).toUpperCase());

            this.$http.post(localStorage.SiteUrl, data).then(res => {

                this.listData = res.data.Data
                for(var i = 0; i  < this.listData.length; i++){
                    this.listData[i].PlanDetails = this.listData[i].PlanDetails.reverse();
                }
            }).catch(error => {
                console.log(error);
            })
        },

    },
    mounted() {
        // 调用请求数据的方法
        this.getData()

    },
    computed: {

    },
    components: {
        mHeader,
        kjview,
    }
}
</script>
