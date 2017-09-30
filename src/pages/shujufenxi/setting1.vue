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
                    <!-- <el-button v-show="isSelect(item)" type="text" class="btnSelect" v-for="item in KeyNumbers" :key="item.toString()" @click="addBtn(item)">{{item}}</el-button>
                    <el-button v-show="!isSelect(item)" type="text" class="btn" v-for="item in KeyNumbers" :key="item.toString()" @click="addBtn(item)">{{item}}</el-button> -->
                    <el-button :class="{'btnSelect':selectKeyNumberName1.indexOf(item) > -1}" type="text" class="btn" v-for="item in KeyNumbers" :key="item.toString()" @click="addBtn(item)">{{item}}
                        <img src="../../../static/images/you_image.png" v-if="selectKeyNumberName1.indexOf(item) > -1" class="you_image_select" alt="">
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
        outline: none;
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
            selectKeyNumberName1 : localStorage.selectKeyNumberName1.split(','),
            
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
                localStorage.allKeyNumName1 = this.listData.KeyNumbers;
                console.log(this.listData.KeyNumbers);
            }).catch(error => {
                console.log(error);
            })
        },
        isSelect(item1){
            
            if(this.selectKeyNumberName1.indexOf(item1)>=0){
                return true;
            }else{
                return false;
            }

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
            // console.log(localStorage.selectKeyNumberName1);
            // console.log(item);
            this.selectKeyNumberName1 = this.remove(this.selectKeyNumberName1,item)
            
        },
        addBtn(item1){
            if(this.selectKeyNumberName1.indexOf(item1)>=0){
                this.selectKeyNumberName1 = this.remove(this.selectKeyNumberName1,item1);
            }else{
                this.selectKeyNumberName1.push(item1)
            }
            localStorage.selectKeyNumberName1 = this.selectKeyNumberName1;
        },
    },
    created(){
        console.log(localStorage.selectKeyNumberName1);
        console.log(localStorage.selectKeyNumberName1.split(','))
    },
    mounted() {
        this.getData();
    }
}
</script>
