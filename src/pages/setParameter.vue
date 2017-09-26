<template>
    <div>
        <m-header :title="title">
        </m-header>
        <div class="maincontainer">
            <div class="top">
                <div class="cell">
                    <span class="txt">定码个数：</span>
                    <el-button type="text" @click="jian1" class="btn">-</el-button>
                    <el-input v-model="input1" class="input" type="number" size="mini" @change="change1"> </el-input>
                    <el-button type="text" @click="jia1" class="btn">+</el-button>
                </div>

                <div class="cell">
                    <span class="txt">计划周期：</span>
                    <el-button type="text" @click="jian2" class="btn">-</el-button>
                    <el-input v-model="input2" class="input" type="number" size="mini" @change="change2"></el-input>
                    <el-button type="text" @click="jia2" class="btn">+</el-button>
                </div>

                <div class="cell">
                    <span class="txt">准确率：</span>
                    <el-button type="text" @click="jian31" class="btn">-</el-button>
                    <el-input v-model="input31" class="input" type="text" size="mini" @change="change31" @focus="focus31" @blur="blur31"></el-input>
                    <el-button type="text" @click="jia31" class="btn">+</el-button>
                    <span class="txt">至</span>
                    <el-button type="text" @click="jian32" class="btn">-</el-button>
                    <el-input v-model="input32" class="input" type="text" size="mini" @change="change32" @focus="focus32" @blur="blur32"></el-input>
                    <el-button type="text" @click="jia32" class="btn">+</el-button>
                </div>

                <div class="cell">
                    <span class="txt">最大连对</span>
                    <el-button type="text" @click="jian41" class="btn">-</el-button>
                    <el-input v-model="input41" class="input" type="number" size="mini" @change="change41"></el-input>
                    <el-button type="text" @click="jia41" class="btn">+</el-button>
                    <span class="txt">至</span>
                    <el-button type="text" @click="jian42" class="btn">-</el-button>
                    <el-input v-model="input42" class="input" type="number" size="mini" @change="change42"></el-input>
                    <el-button type="text" @click="jia42" class="btn">+</el-button>
                </div>

                <div class="cell">
                    <span class="txt">最大连错：</span>
                    <el-button type="text" @click="jian51" class="btn">-</el-button>
                    <el-input v-model="input51" class="input" type="number" size="mini" @change="change51"></el-input>
                    <el-button type="text" @click="jia51" class="btn">+</el-button>
                    <span class="txt">至</span>
                    <el-button type="text" @click="jian52" class="btn">-</el-button>
                    <el-input v-model="input52" class="input" type="number" size="mini" @change="change52"></el-input>
                    <el-button type="text" @click="jia52" class="btn">+</el-button>
                </div>

                <div class="cell">
                    <span class="txt">当前连对/错：</span>
                    <el-button type="text" @click="jian61" class="btn">-</el-button>
                    <el-input v-model="input61" class="input" type="number" size="mini" @change="change61"></el-input>
                    <el-button type="text" @click="jia61" class="btn">+</el-button>
                    <span class="txt">至</span>
                    <el-button type="text" @click="jian62" class="btn">-</el-button>
                    <el-input v-model="input62" class="input" type="number" size="mini" @change="change62"></el-input>
                    <el-button type="text" @click="jia62" class="btn">+</el-button>
                </div>
            </div>

            <label style="font-size:15px; margin:10px;font-weight:900;margin:10px;text-align: left;width=100%">已选计划</label>
            <img style="height:4px;width:100%;" src="../../static/images/Search-07.png" mode="scaleToFill"></img>

            <div class="bottom">
                <!-- <el-button v-show="isSelect(item)" @click="addBtn(item)" type="text" v-for="item in dataDuringValue" :key="item" class="bottom-btn-select">
                    {{item}}
                </el-button>
                <el-button v-show="!isSelect(item)" @click="addBtn(item)" type="text" v-for="item in dataDuringValue" :key="item" class="bottom-btn">
                    {{item}}
                </el-button> -->
                <el-button :class="{'bottom-btn-select':selectNameArr.indexOf(item) >  -1}" @click="addBtn(item)" type="text" v-for="item in dataDuringValue" :key="item" class="bottom-btn">
                    {{item}}
                </el-button>
            </div>

        </div>

        <div class="bottom-btnView1">

            <button class="bottom-btn1" style="background-color: rgb(229, 87, 77);border-color:rgba(0,0,0,0);color:#fff;" @click="ok">确定</button>
            <button class="bottom-btn1" style="background-color: rgb(232, 159, 109);border-color:rgba(0,0,0,0);color:#fff;" @click="cancel">取消</button>

        </div>
    </div>
</template>

<style lang="less" scoped>
.maincontainer {
    display: flex;
    flex-direction: column;
}

.top {
    display: flex;
    flex-direction: column;
}

.cell {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    border-bottom: 1.5px solid #f6f6f6;
}

.txt {
    margin: 20px 0px;
    height: 18px;
    line-height: 18px;
    font-size: 12px;
    align-content: left;
    width: 18%;
}

.btn {
    width: 25px;
    height: 25px;
    font-size: 20px;
    line-height: 25px;
    margin: 15px 0px;
    border-radius: 13px;
    padding: 0px;
    color: black;
    border: 1px solid #f3f4f5;
    background-color: #f3f4f5;
}

.input {
    margin: 17px 8px;
    background: #F4F4F4;
    width: 14%; // height: 25px;
    font-size: 10px;
    outline: none;
    
}


.bottom {
    display: flex;
    flex-direction: row;
    margin-left: 10px;
    flex-wrap: wrap;
}

.bottom-btn {
    width: 30px;
    height: 30px;
    font-size: 13px;
    line-height: 25px;
    margin: 10px 5px;
    border-radius: 13px;
    padding: 0px;
    color: black;
    background-size: 100% 100%;
    background-image: url('../../static/images/OJSetParameter/Search-08.png');
    
}
.bottom-btn-select{
    width: 30px;
    height: 30px;
    font-size: 13px;
    line-height: 25px;
    margin: 10px 5px;
    border-radius: 13px;
    padding: 0px;
    color:white;
    background-size: 100% 100%;
    background-image: url('../../static/images/OJSetParameter/Search-08-9.png');
}

.bottom-btnView1 {
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 40px;
    display: flex;
    justify-content: space-between;
}

.bottom-btn1 {
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
                text: '搜索公式',
                showBack: true,
            },
            input1: '',
            input2: '',
            input31: '0%',
            input32: '100%',
            input41: '0',
            input42: '10',
            input51: '0',
            input52: '10',
            input61: '-10',
            input62: '10',
            dataDuringValue: [],
            dataDuringIndex: [],
            planName: '',
            selectNameArr: [],
        };
    },
    created() {
        this.planName = localStorage.selectNameArr.split(',')[localStorage.detailID];
    },
    mounted() {
        this.getData();
    },
    components: {
        mHeader,
    },
    methods: {
        getData() {
            console.log(this.planName);
            // 请求数据
            let tokenCode = localStorage.tokenCode;
            let signStr = 'Action=GetPlanInfo' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + '&PlanName=' + this.planName + tokenCode;
            let data = new FormData();
            data.append('Action', 'GetPlanInfo');
            data.append('SID', localStorage.sid);
            data.append('Token', localStorage.Token);
            data.append('PlanName', this.planName);
            data.append('Sign', sha256.sha256(signStr).toUpperCase());
            this.$http.post(localStorage.SiteUrl, data).then(res => {
                this.PlanData = res.data.Data;
                this.input1 = this.PlanData.DefaultDSCount;
                this.input2 = this.PlanData.DefaultCycle;
                var dataDuringArr = [];
                dataDuringArr = this.PlanData.DataDuring.split(',');
                console.log(dataDuringArr)
                this.dataDuringIndex = [];
                this.dataDuringValue = [];
                for (var i = 0; i < dataDuringArr.length; i++) {
                    this.dataDuringIndex.push(dataDuringArr[i].split(':')[0]);
                    this.dataDuringValue.push(dataDuringArr[i].split(':')[1]);
                }
                console.log(this.dataDuringIndex);
                console.log(this.dataDuringValue);
                this.selectNameArr = this.dataDuringValue;
                // this.dataDuringValue = dataDuringValue;
                // this.dataDuringIndex = dataDuringIndex;
            }).catch(error => {
                console.log(error);
            })
        },
        isSelect(item){
            if(this.selectNameArr.indexOf(item)>=0){
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
        addBtn(item){
            // console.log(item);
            console.log(this.selectNameArr.indexOf(item));
            if(this.selectNameArr.indexOf(item)>=0){
                this.selectNameArr = this.remove(this.selectNameArr,item);
            }else{
                this.selectNameArr.push(item)
            }
            console.log(this.selectNameArr.indexOf(item));
        },

        ok() {
            console.log(this.input1);
            console.log(this.input2);
            console.log(this.input31);
            console.log(this.input32);
            console.log(this.input41);
            console.log(this.input42);
            console.log(this.input51);
            console.log(this.input52);
            console.log(this.input61);
            console.log(this.input62);
            console.log(this.selectNameArr);

            let tokenCode = localStorage.tokenCode;
            let signStr = 'Action=OptimizePlan' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + '&PlanName=' + this.planName + '&PlanCycle=' + this.input2 + '&DMSMCount='+
            this.input1 + '&Accuracy=' + parseFloat(this.input31) + ':' + parseFloat(this.input32) + '&CurrentLianDui=' + parseInt(this.input61) + ':' + parseInt(this.input62) + '&MaxLianDui=' + 
            parseInt(this.input41) + ':' + parseInt(this.input42) + '&MaxLianCuo=' + parseInt(this.input51) + ':' + parseInt(this.input52) + '&DataDuring=' + this.selectNameArr.toString() + tokenCode;
            let data = new FormData();
            data.append('Action', 'OptimizePlan');
            data.append('SID', localStorage.sid);
            data.append('Token', localStorage.Token);
            data.append('PlanName', this.planName);
            data.append('PlanCycle', this.input2);
            data.append('DMSMCount', this.input1);
            data.append('Accuracy', parseFloat(this.input31) + ':' + parseFloat(this.input32));
            data.append('CurrentLianDui', parseInt(this.input61) + ':' + parseInt(this.input62));
            data.append('MaxLianDui', parseInt(this.input41) + ':' + parseInt(this.input42));
            data.append('MaxLianCuo', parseInt(this.input51) + ':' + parseInt(this.input52));
            data.append('DataDuring', this.selectNameArr.toString());
            data.append('Sign', sha256.sha256(signStr).toUpperCase());
            this.$http.post(localStorage.SiteUrl, data).then(res => {
                // this.planNameData = res.data.Data;
                this.$router.go(-1);

            }).catch(error => {
                console.log(error);
            })
        },

        cancel() {
            this.$router.go(-1);
        },

        jian1() {
            this.input1 = this.input1 - 1 < 1 ? 1 : this.input1 - 1;
        },
        jia1() {
            if(this.dataDuringValue.length>0){
                this.input1 = this.input1 + 1 > this.dataDuringValue.length - 1 ? this.dataDuringValue.length - 1 : this.input1 + 1;
            }else{
                this.input1 = this.input1 + 1 > 9 ? 9 : this.input1 + 1;
            }
        },
        change1(value) {
            if (value < 0 || value === null || value === "") {
                this.input1 = 1
            } else if (value > this.dataDuringValue.length - 1) {
                this.input1 = this.dataDuringValue.length - 1
            } else {
                this.input1 = value
            }
        },
        jian2() {
            this.input2 = this.input2 - 1 < 1 ? 1 : this.input2 - 1;
        },
        jia2() {
            this.input2 = this.input2 + 1 > 9 ? 9 : this.input2 + 1;
        },
        change2(value) {
            if (value < 0 || value == null || value == "") {
                this.input2 = 1
            } else if (value > 9) {
                this.input2 = 9
            } else {
                this.input2 = value
            }
        },
        jian31() {
            var ZQL = this.input31;
            var ZQLMin = "0%";
            ZQLMin = parseInt(ZQLMin.replace("%", ""))
            ZQL = parseInt(ZQL.replace("%", ""));
            ZQL = (ZQL - 10) < ZQLMin ? ZQLMin : ZQL - 10;
            ZQL = ZQL + "%";
            this.input31 = ZQL;
        },
        jia31() {
            var ZQL = this.input31;
            var ZQLMax = this.input32;
            ZQLMax = parseInt(ZQLMax.replace("%", ""))

            ZQL = parseInt(ZQL.replace("%", ""));
            ZQL = (ZQL + 10) > ZQLMax ? ZQLMax : ZQL + 10;
            ZQL = ZQL + "%";
            this.input31 = ZQL;
        },
        focus31(Event) {
            var ZQL = this.input31
            ZQL = parseInt(ZQL.replace("%", ""));
            this.input31 = parseInt(this.input31.replace("%", ""));
            this.input31 = ZQL;
        },
        blur31(Event) {
            if (this.input31 == null || this.input31 == "") {
                this.input31 = 0;
            }
            this.input31 = this.input31 + "%";
        },
        change31(value) {
            if (value < 0) {
                this.input31 = 0;
            } else if (value > this.input32) {
                this.input31 = this.input32
            } else {
                this.input31 = value;
            }
        },
        jian32() {
            var ZQLL = this.input32;
            var ZQLMin = this.input31;
            ZQLMin = parseInt(ZQLMin.replace("%", ""))
            ZQLL = parseInt(ZQLL.replace("%", ""));
            ZQLL = (ZQLL - 10) < ZQLMin ? ZQLMin : ZQLL - 10;
            ZQLL = ZQLL + "%";
            this.input32 = ZQLL;
        },
        jia32() {
            var ZQLL = this.input32;
            var ZQLMax = "100%";
            ZQLMax = parseInt(ZQLMax.replace("%", ""))

            ZQLL = parseInt(ZQLL.replace("%", ""));
            ZQLL = (ZQLL + 10) > ZQLMax ? ZQLMax : ZQLL + 10;
            ZQLL = ZQLL + "%";
            this.input32 = ZQLL;
        },
        focus32(Event) {
            var ZQL = this.input32
            ZQL = parseInt(ZQL.replace("%", ""));
            this.input32 = parseInt(this.input32.replace("%", ""));
            this.input32 = ZQL;
        },
        blur32(Event) {
            if (this.input32 == null || this.input32 == "") {
                this.input32 = 0;
            }
            this.input32 = this.input32 + "%";
        },
        change32(value) {
            if (value < 0) {
                this.input32 = 0;
            } else if (value < this.input31) {
                this.input32 = this.input31;
            } else if (value > 100) {
                this.input32 = 100;
            } else {
                this.input32 = value;
            }
        },
        jian41() {
            var num = parseInt(this.input41);
            if (num - 1 < 0) {
                this.input41 = 0;
            } else {
                this.input41 = num - 1;
            }
        },
        jia41() {
            var num = parseInt(this.input41);
            var max = parseInt(this.input42);
            if (num + 1 >= max) {
                this.input41 = max;
            } else {
                this.input41 = num + 1
            }
        },
        change41(value) {
            if (value <= 0) {
                this.input41 = 0;
            } else if (value > parseInt(this.input42)) {
                this.input41 = this.input42;
            } else {
                this.input41 = value;
            }
        },
        jian42() {
            var num = parseInt(this.input42);
            var min = parseInt(this.input41);
            if (num - 1 < min) {
                this.input42 = min;
            } else {
                this.input42 = num - 1;
            }
        },
        jia42() {
            var num = parseInt(this.input42);
            var max = 10;
            if (num + 1 >= max) {
                this.input42 = max;
            } else {
                this.input42 = num + 1;
            }
        },
        change42(value) {
            if (value <= parseInt(this.input41)) {
                this.input42 = this.input41;
            } else if (value > 10) {
                this.input42 = 10;
            } else {
                this.input42 = value;
            }
        },
        jian51() {
            var num = parseInt(this.input51);
            if (num - 1 < 0) {
                this.input51 = 0;
            } else {
                this.input51 = num - 1;
            }
        },
        jia51() {
            var num = parseInt(this.input51);
            var max = parseInt(this.input52);
            if (num + 1 >= max) {
                this.input51 = max;
            } else {
                this.input51 = num + 1;
            }
        },
        change51(value) {
            if (value <= 0) {
                this.input51 = 0;
            } else if (value > parseInt(this.input52)) {
                this.input51 = this.input52
            } else {
                this.input51 = value;
            }
        },
        jian52() {
            var num = parseInt(this.input52);
            var min = parseInt(this.input51);
            if (num - 1 < min) {
                this.input52 = min;
            } else {
                this.input52 = num - 1;
            }
        },
        jia52() {
            var num = parseInt(this.input52);
            var max = 10;
            if (num + 1 >= max) {
                this.input52 = max;
            } else {
                this.input52 = num + 1;
            }
        },
        change52(value) {
            if (value <= parseInt(this.input51)) {
                this.input52 = this.input51;
            } else if (value > 10) {
                this.input52 = 10;
            } else {
                this.input52 = value;
            }
        },
        jian61() {
            var num = parseInt(this.input61);
            if (num - 1 < -10) {
                this.input61 = -10;
            } else {
                this.input61 = num - 1;
            }
        },
        jia61() {
            var num = parseInt(this.input61);
            var max = parseInt(this.input62);
            if (num + 1 >= max) {
                this.input61 = max;
            } else {
                this.input61 = num + 1;
            }
        },
        change61(value) {
            if (value <= -10) {
                this.input61 = -10;
            } else if (value > parseInt(this.input62)) {
                this.input61 = this.input62
            } else {
                this.input61 = value;
            }
        },
        jian62() {
            var num = parseInt(this.input62);
            var min = parseInt(this.input61);
            if (num - 1 < min) {
                this.input62 = min;
            } else {
                this.input62 = num - 1;
            }
        },
        jia62() {
            var num = parseInt(this.input62);
            var max = 10;
            if (num + 1 >= max) {
                this.input62 = max;
            } else {
                this.input62 = num + 1;
            }
        },
        change62(value) {
            if (value <= parseInt(this.input61)) {
                this.input62 = this.input61;
            } else if (value > 10) {
                this.input62 = 10;
            } else {
                this.input62 = value;
            }
        },
    }
}
</script>

