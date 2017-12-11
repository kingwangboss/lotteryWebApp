<template>
    <div>
        <m-header :title="title">
        </m-header>
        <div class="maincontainer">

            <label class="lab" style="font-size:15px; margin:10px;font-weight:900">已选计划</label>
            <img style="height:4px;width:100%;" src="../../../static/images/Search-07.png" mode="scaleToFill"></img>


            <div class="planItemCell" v-for="item in listData.Norms" :key="item.toString()">
                <label class="lab" style="font-size:14px; margin-top:10px;margin-left:20px; font-weight:900;">{{item.Group}}</label>
                <div>
                    <!-- <el-button type="text" class="btn" v-for="item1 in item.NormList" :key="item1.toString()" @click="addBtn(item)">{{item1}}</el-button> -->
                    <!-- <el-button v-show="isSelect(item1)" type="text" class="btnSelect" v-for="item1 in item.NormList" :key="item1.toString()" @click="addBtn(item1)">{{item1}}</el-button>
                    <el-button v-show="!isSelect(item1)" type="text" class="btn" v-for="item1 in item.NormList" :key="item1.toString()" @click="addBtn(item1)">{{item1}}</el-button> -->
                    <el-button :class="{'btnSelect':selectKeyNumberName3 == item1}" type="text" class="btn" v-for="item1 in item.NormList" :key="item1.toString()" @click="addBtn(item1)">{{item1}}
                        <img src="../../../static/images/you_image.png" v-if="selectKeyNumberName3 == item1" class="you_image_select" alt="">
                        <!-- <img src="" v-else class="you_image" alt=""> -->
                    </el-button>
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
        float: left;
        margin-left: 10px;
        margin-top: 10px;
        display: flex;
        align-items: center;
        padding: 0px 20px 0px 20px;
        font-size: 13px;
        color: black;
        // background-size: 100% 100%;
        // background-image: url('../../../static/images/Select-05.png')
        border-radius: 0px;
        border: 1px solid rgb(222, 222, 222);
    }
    .btnSelect {
        height: 30px;
        line-height: 30px;
        align-content: center;
        float: left;
        margin-left: 10px;
        margin-top: 10px;
        display: flex;
        align-items: center;
        padding: 0px 0px 0px 20px;
        font-size: 13px;
        color: #f82b56;
        // background-size: 100% 100%;
        // background-image: url('../../../static/images/Select-06.png')
        border-radius: 0px;
        border: 1px solid rgb(228, 69, 90);
    }
    .you_image_select {
        // width: 20px;
        height: 20px;
        position: relative;
        right: 0px;
        bottom: -8px;
    }
    .you_image{
        // width: 20px;
        height: 20px;
        position: relative;
        right: 0px;
        bottom: -8px;
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
            //总计划
            KeyNumbers:[],
            selectKeyNumberName3 : localStorage.selectKeyNumberName3.split(','),
            
        }
    },
    components: {
        mHeader,
    },
    methods: {
        getData() {
            let tokenCode = localStorage.tokenCode;
            let signStr = 'Action=GetAllNormNames' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + "&Ver=" + tokenCode;
            let data = new FormData();
            data.append('Action', 'GetAllNormNames');
            data.append('SID', localStorage.sid);
            data.append('Token', localStorage.Token);
            data.append('Ver', '');
            data.append('Sign', sha256.sha256(signStr).toUpperCase());
            this.$http.post(localStorage.SiteUrl, data).then(res => {
                this.listData = res.data.Data;
                
                if(typeof localStorage.Norm1 == "undefined"){
                    this.selectKeyNumberName3 = this.listData.Norms[0].NormList[1];
                    localStorage.selectKeyNumberName3 = this.selectKeyNumberName3;
                }else{
                }
                // this.KeyNumbers = this.listData.KeyNumbers.split(',')
                // localStorage.allKeyNumName1 = this.listData.KeyNumbers;
                // console.log(this.listData.KeyNumbers);
            }).catch(error => {
                console.log(error);
            })
        },
        isSelect(item1){
            
            if(this.selectKeyNumberName3 == item1){
                return true;
            }else{
                return false;
            }

        },
        
        addBtn(item1){
            
            this.selectKeyNumberName3 = item1;
            localStorage.selectKeyNumberName3 = this.selectKeyNumberName3;
            console.log(localStorage.selectKeyNumberName3)
        },
    },
    created(){
        console.log(localStorage.selectKeyNumberName3);
        console.log(localStorage.selectKeyNumberName3.split(','))
    },
    mounted() {
        this.getData();
    }
}
</script>
