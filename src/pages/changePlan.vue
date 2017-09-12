<template>
    <div>
        <m-header :title="title">
        </m-header>
        <div class="maincontainer">

            <label class="lab" style="font-size:15px; margin:10px;font-weight:900">已选计划</label>
            <img style="height:4px;width:100%;" src="../../static/images/Search-07.png" mode="scaleToFill"></img>

            <div class="top">
                <el-button type="text" class="btn" v-for="(item,index) in selectNameArr" :key="item" @click="removeBtn(item)">{{item}}
                </el-button>
                <!-- <el-button class="btn" style="background-image: url('../../static/images/Select-05.png')">12122</el-button> -->

            </div>

            <div class="middle"></div>

            <div class="planItemCell" v-for="item in planNameData" :key="item.toString()">
                <label class="lab" style="font-size:14px; margin-top:10px;margin-left:20px; font-weight:900;">{{item.Group}}</label>
                <div>
                    <el-button v-show="isSelect(item1)" type="text" class="btnSelect" v-for="item1 in item.PlanList" :key="item1.toString()" @click="addBtn(item1)">{{item1}}</el-button>
                    <el-button v-show="!isSelect(item1)" type="text" class="btn" v-for="item1 in item.PlanList" :key="item1.toString()" @click="addBtn(item1)">{{item1}}</el-button>
                </div>
            </div>

            <div class="bottom-btnView">

                <el-button class="bottom-btn" style="background-color: rgb(229, 87, 77);border-color:rgba(0,0,0,0);color:#fff;" @click="ok">确定</el-button>
                <el-button class="bottom-btn" style="background-color: rgb(232, 159, 109);border-color:rgba(0,0,0,0);color:#fff;" @click="cancel">重置</el-button>
                
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

.top {
    margin-bottom: 10px;
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
    color: black;
    background-image: url('../../static/images/Select-05.png')
}
}

.middle {
    height: 20px;
    background: #fbf9fe;
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
        background-image: url('../../static/images/Select-05.png')
    }
    .btnSelect{
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
        color:#f82b56;
        background-image: url('../../static/images/Select-06.png')
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
    comments:{
        
    },
    created() {
        this.selectNameArr = localStorage.selectNameArr.split(',');
        console.log(this.selectNameArr);
    },
    components: {
        mHeader,
    },
    methods: {
        isSelect(item1){
            console.log(this.selectNameArr);
            console.log(item1);
            if(this.selectNameArr.indexOf(item1)>=0){
                return true;
            }else{
                return false;
            }

        },
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
        },
        remove(arr, item) {
            var result = [];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] != item) {
                    result.push(arr[i]);
                }
            }
            return result;
        },
        removeBtn(item) {
            console.log(this.selectNameArr);
            console.log(item);
            this.selectNameArr = this.remove(this.selectNameArr,item)
            console.log(this.selectNameArr);
        },
        addBtn(item1){
            console.log(item1);
            console.log(this.selectNameArr.indexOf(item1));
            if(this.selectNameArr.indexOf(item1)>=0){
                this.selectNameArr = this.remove(this.selectNameArr,item1);
            }else{
                this.selectNameArr.push(item1)
            }
        },
        ok(){
            console.log(this.selectNameArr.join(','));
            let tokenCode = localStorage.tokenCode;
            let signStr = 'Action=UpdatePlanList' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + '&PlanList=' + this.selectNameArr.join(',') + tokenCode;
            let data = new FormData();
            data.append('Action', 'UpdatePlanList');
            data.append('SID', localStorage.sid);
            data.append('Token', localStorage.Token);
            data.append('PlanList', this.selectNameArr.join(','));
            data.append('Sign', sha256.sha256(signStr).toUpperCase());
            this.$http.post(localStorage.SiteUrl, data).then(res => {
                // this.planNameData = res.data.Data;
                this.$router.go(-1);

            }).catch(error => {
                console.log(error);
            })
        },
        cancel(){
            // this.$router.go(-1);
            this.selectNameArr = [];
        }
    },
    mounted() {
        // 调用请求数据的方法
        this.getData()
    },
}
</script>
