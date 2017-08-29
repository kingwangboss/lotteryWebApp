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
                        <div class="detail-top-content" v-for="(item1,index1) in item.RightTimes.split(',')" :key="item1">
                            <div class="psview">第{{index+1}}期中:</div>
                            <div class="psvalue">{{item1}}</div>
                            <div class="psview">次</div>
                        </div>
                    </div>
                </el-tab-pane>

        </el-tabs>
        plandetail
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
            },
            activeName: "0",
            listData: '',
            zjnum:[]
        };
    },
    created() {
        let tokenCode = localStorage.tokenCode;
        let signStr = 'Action=GetPlanDetails' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + tokenCode;
        let data = new FormData();
        data.append('Action', 'GetPlanDetails');
        data.append('SID', localStorage.sid);
        data.append('Token', localStorage.Token);
        data.append('Sign', sha256.sha256(signStr).toUpperCase());

        this.$http.post(localStorage.SiteUrl, data).then(res => {
            this.listData = res.data.Data
        }).catch(error => {
            console.log(error);
        })
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    },
    computed:{
        
    },
    components: {
        mHeader,
        kjview,
    }
}
</script>
