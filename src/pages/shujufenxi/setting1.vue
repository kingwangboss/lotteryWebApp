<template>
    <div>
        <m-header :title="title">
        </m-header>
        <div class="maincontainer">

            <label class="lab" style="font-size:15px; margin:10px;font-weight:900">已选计划</label>
            <img style="height:4px;width:100%;" src="../../../static/images/Search-07.png" mode="scaleToFill"></img>
            <label class="lab" style="font-size:14px; margin-top:10px;margin-left:20px; font-weight:900;">数据遗漏</label>
            <div class="planItemCell" >
                <div>
                    <el-button v-show="!isSelect(item)" type="text" class="btnSelect" v-for="item in KeyNumbers" :key="item.toString()" @click="addBtn(item)">{{item}}</el-button>
                    <el-button v-show="isSelect(item)" type="text" class="btn" v-for="item in KeyNumbers" :key="item.toString()" @click="addBtn(item)">{{item}}</el-button>
                    <!-- <el-button v-show="isSelect(item1)" type="text" class="btnSelect" v-for="item1 in item.PlanList" :key="item1.toString()" @click="addBtn(item1)">{{item1}}</el-button>
                    <el-button v-show="!isSelect(item1)" type="text" class="btn" v-for="item1 in item.PlanList" :key="item1.toString()" @click="addBtn(item1)">{{item1}}</el-button> -->
                </div>
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
    margin-bottom: 45px;
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
        color: black;
        background-image: url('../../../static/images/Select-05.png')
    }
    .btnSelect {
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
        color: #f82b56;
        background-image: url('../../../static/images/Select-06.png')
    }
}
</style>

<script>
import mHeader from '../../components/hearder/Hearder';
import sha256 from '../../util/sha256'
export default {
    data() {
        return {
            listData: '',
            title: {
                text: '遗漏分析设置',
                showBack: true,
                ok: true,
            },
            KeyNumbers:[],
        }
    },
    components: {
        mHeader,
    },
    methods: {
        getData() {
            let tokenCode = localStorage.tokenCode;
            let signStr = 'Action=GetKeyNumbers' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + tokenCode;
            let data = new FormData();
            data.append('Action', 'GetKeyNumbers');
            data.append('SID', localStorage.sid);
            data.append('Token', localStorage.Token);
            data.append('Sign', sha256.sha256(signStr).toUpperCase());
            this.$http.post(localStorage.SiteUrl, data).then(res => {
                this.listData = res.data.Data;
                this.KeyNumbers = this.listData.KeyNumbers.split(',')
            }).catch(error => {
                console.log(error);
            })
        },
        isSelect(item1){
            console.log(localStorage.selectKeyNumberName1)
            console.log(item1)
            console.log(this.KeyNumbers);
            if(this.KeyNumbers.indexOf(item1)>0){
                return true;
            }else{
                return false;
            }

        },
        
    },
    mounted() {
        this.getData();
    }
}
</script>
