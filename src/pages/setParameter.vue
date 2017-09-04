<template>
    <div>
        <m-header :title="title">
        </m-header>
        <div class="maincontainer">
            <div class="top">
                <div class="cell">
                    <span class="txt">定码个数：</span>
                    <el-button type="text" @click="jian1" class="btn">-</el-button>
                    <el-input v-model="input1" class="input" type="number"></el-input>
                    <el-button type="text" @click="jia1" class="btn">+</el-button>
                </div>

                <div class="cell">
                    <span class="txt">计划周期：</span>
                    <el-button type="text" @click="jian2" class="btn">-</el-button>
                    <el-input v-model="input2" class="input" type="number"></el-input>
                    <el-button type="text" @click="jia2" class="btn">+</el-button>
                </div>

                <div class="cell">
                    <span class="txt">准确率：</span>
                    <el-button type="text" @click="jian31" class="btn">-</el-button>
                    <el-input v-model="input31" class="input" type="number"></el-input>
                    <el-button type="text" @click="jia31" class="btn">+</el-button>
                    <span class="txt">至</span>
                    <el-button type="text" @click="jian32" class="btn">-</el-button>
                    <el-input v-model="input32" class="input" type="number"></el-input>
                    <el-button type="text" @click="jia32" class="btn">+</el-button>
                </div>

                <div class="cell">
                    <span class="txt">最大连对</span>
                    <el-button type="text" @click="jian41" class="btn">-</el-button>
                    <el-input v-model="input41" class="input" type="number"></el-input>
                    <el-button type="text" @click="jia41" class="btn">+</el-button>
                    <span class="txt">至</span>
                    <el-button type="text" @click="jian42" class="btn">-</el-button>
                    <el-input v-model="input42" class="input" type="number"></el-input>
                    <el-button type="text" @click="jia42" class="btn">+</el-button>
                </div>

                <div class="cell">
                    <span class="txt">最大连错：</span>
                    <el-button type="text" @click="jian51" class="btn">-</el-button>
                    <el-input v-model="input51" class="input" type="number"></el-input>
                    <el-button type="text" @click="jia51" class="btn">+</el-button>
                    <span class="txt">至</span>
                    <el-button type="text" @click="jian52" class="btn">-</el-button>
                    <el-input v-model="input52" class="input" type="number"></el-input>
                    <el-button type="text" @click="jia52" class="btn">+</el-button>
                </div>

                <div class="cell">
                    <span class="txt">当前连对/错：</span>
                    <el-button type="text" @click="jian61" class="btn">-</el-button>
                    <el-input v-model="input61" class="input" type="number"></el-input>
                    <el-button type="text" @click="jia61" class="btn">+</el-button>
                    <span class="txt">至</span>
                    <el-button type="text" @click="jian62" class="btn">-</el-button>
                    <el-input v-model="input62" class="input" type="number"></el-input>
                    <el-button type="text" @click="jia62" class="btn">+</el-button>
                </div>
            </div>

            <label style="font-size:15px; margin:10px;font-weight:900;margin:10px;text-align: left;width=100%">已选计划</label>
            <img style="height:4px;width:100%;" src="../../static/images/Search-07.png" mode="scaleToFill"></img>

            <div class="bottom">
                    <el-button v-for="item in dataDuringValue" :key="item" class="bottom-btn">
                        {{item}}
                    </el-button>
                </block>
            </div>

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
    margin: 10px 8px;
    background: #f3f4f5;
    width: 35px;
    height: 25px;
    align-content: center;
    font-size: 13px;
    text-align: center;
}

.bottom {
    display: flex;
    flex-direction: row;
    margin-left: 10px;
    flex-wrap: wrap;
}

.bottom-btn {
    width: 25px;
    height: 25px;
    font-size: 13px;
    line-height: 25px;
    margin: 10px 5px;
    border-radius: 13px;
    padding: 0px;
    color: black;
    border: 1px solid block;
    background-color: #f3f4f5;
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
            input31: '',
            input32: '',
            input41: '',
            input42: '',
            input51: '',
            input52: '',
            input61: '',
            input62: '',
            dataDuringValue:['1','2','3','1','2','3','1','2','3','1']
        };
    },

    components: {
        mHeader,
    },
    methods:{
        jian1(){

        },
        jia1(){

        },
        jian2(){

        },
        jia2(){

        },
        jian31(){

        },
        jia31(){

        },
        jian32(){

        },
        jia32(){

        },
        jian41(){

        },
        jia41(){

        },
        jian42(){

        },
        jia42(){

        },
        jian51(){

        },
        jia51(){

        },
        jian52(){

        },
        jia52(){

        },
        jian61(){

        },
        jia61(){

        },
        jian62(){

        },
        jia62(){

        },
    }
}
</script>

