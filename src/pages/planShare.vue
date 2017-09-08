<template>
    <div>
        <m-header :title="title"></m-header>
        <div class="main">
            <div class="line">
            </div>
            <div class="top">
                <div class="cell">
                    <span class="cell-span">计划网址:</span>
                    <div class="cell-label" @click.stop="urlClick">{{(listData.ShareUrl == null || listData.ShareUrl == '' || listData.ShareUrl == 'null') ? '无' : listData.ShareUrl}}</div>
                    <img class="cell-img" src="../../static/images/share/Share-06.png" alt="" @click="copy">
                </div>
                <div class="line">
                </div>
                <div class="cell" @click="changePwd">
                    <span class="cell-span">计划密码:</span>
                    <label class="cell-label1">{{(listData.VCode == null || listData.VCode == "" || listData.VCode == "null") ? '无' : listData.VCode}}</label>
                    <img class="cell-img" src="../../static/images/share/Share-07.png" alt="">
                </div>
                <div class="line">
                </div>
                <div class="cell" @click="changTeam">
                    <span class="cell-span">团队名称:</span>
                    <label class="cell-label1">{{(listData.TeamName == null || listData.TeamName == "" || listData.TeamName == "null") ? '无' : listData.TeamName}}</label>
                    <img class="cell-img" src="../../static/images/share/Share-07.png" alt="">
                </div>
                <div class="line">
                </div>
                <div class="cell" @click="dialogVisible = true">
                    <span class="cell-span">联系方式:</span>
                    <label class="cell-label2">{{(listData.Contact == null || listData.Contact == "" || listData.Contact == "null") ? '无' : listData.Contact}}</label>
                    <img v-if="radio == '1'" class="cell-icon" src="../../static/images/share/Share-08.png" alt="" @click.stop="qhTupian">
                    <img v-else-if="radio == '2'" class="cell-icon" src="../../static/images/share/Share-09.png" alt="" @click.stop="qhTupian">
                    <img class="cell-icon1" src="../../static/images/share/Share-10.png" alt="">
                    <img class="cell-img" src="../../static/images/share/Share-07.png" alt="">
                </div>
                <div class="line">
                </div>
            </div>
            <div class="bottom">
                <button v-if="listData.ShareUrl==null" class="bottom-btn" @click="shareClick">发布计划</button>
                <button v-else class="bottom-btn" @click="shareClick">更新计划</button>
            </div>
        </div>

        <el-dialog :visible.sync="dialogVisible" size="small" :before-close="handleClose">
            <span slot="title" class="dialog-header">更改联系方式</span>
            <div class="dialog-main">
                <div>
                    <el-radio class="radio" v-model="radio" label="1">QQ</el-radio>
                    <el-radio class="radio" v-model="radio" label="2">微信</el-radio>
                </div>
                <div class="dialog-input">
                    <el-input v-model="input" placeholder="请输入联系方式..."></el-input>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="changeContact">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<style lang="less" scoped>
.dialog-input {
    margin-top: 20px;
}

.main {
    display: flex;
    flex-direction: column;
    .line {
        background: #F3F4F5;
        height: 15px;
    }
    .top {
        display: flex;
        flex-direction: column;
        .cell {
            display: flex;
            flex-direction: row;
            height: 60px;
            align-items: center;
            .cell-span {
                width: 25%;
                color: #9A9A9A;
            }
            .cell-label {
                // margin-top: 10px;
                word-wrap: break-word;
                width: 60%;
                text-align: left;
                color: blue;
            }
            .cell-label1 {
                word-wrap: break-word;
                width: 60%;
                text-align: left;
            }
            .cell-label2 {
                word-wrap: break-word;
                width: 47%;
                text-align: left;
            }
            .cell-img {
                // margin-top: 10px;
                height: 40px;
                width: 40px;
            }
            .cell-icon {
                // margin-top: 10px;
                margin-right: -5px;
                height: 40px;
                width: 40px;
            }
            .cell-icon1 {
                margin-top: 20px;
                margin-left: -5px;
                height: 20px;
                width: 20px;
            }
        }
    }
    .bottom {
        width: 100%;
        position: fixed;
        bottom: 10px;
        height: 40px;
        display: flex;
        justify-content: center;
        .bottom-btn {
            margin-bottom: 20px;
            width: 50%;
            height: 40px;
            border-radius: 20px;
            line-height: 35px;
            background-color: rgb(229, 87, 77);
            border-color: rgba(0, 0, 0, 0);
            color: #fff;
        }
    }
}
</style>

<script>
import mHeader from '../components/hearder/Hearder';
import sha256 from '../util/sha256'
import { MessageBox } from 'mint-ui'

export default {
    data() {
        return {
            title: {
                text: '计划分享',
                showBack: true,
                right: false,
            },
            listData: '',
            dialogVisible: false,
            radio: '1',
            input: '',
        };
    },
    components: {
        mHeader,
    },
    methods: {
        shareClick() {
            let tokenCode = localStorage.tokenCode;
            let signStr = 'Action=ShareLotteryPlan' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + tokenCode;
            let data = new FormData();
            data.append('Action', 'ShareLotteryPlan');
            data.append('SID', localStorage.sid);
            data.append('Token', localStorage.Token);
            data.append('Sign', sha256.sha256(signStr).toUpperCase());
            this.$http.post(localStorage.SiteUrl, data).then(res => {
                this.listData = res.data.Data;
                console.log(res.data.Data);
            }).catch(error => {
                console.log(error);
            })
        },
        copy() {
            console.log(window.clipboardData)
            // var clipBoardContent = this.listData.ShareUrl;
            // window.clipboardData.setData("Text", clipBoardContent);
            // alert("复制成功!");

        },
        getData() {
            // 请求数据
            let tokenCode = localStorage.tokenCode;
            let signStr = 'Action=GetPlanShareInfo' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + tokenCode;
            let data = new FormData();
            data.append('Action', 'GetPlanShareInfo');
            data.append('SID', localStorage.sid);
            data.append('Token', localStorage.Token);
            data.append('Sign', sha256.sha256(signStr).toUpperCase());
            this.$http.post(localStorage.SiteUrl, data).then(res => {
                this.listData = res.data.Data;
                console.log(this.listData);
            }).catch(error => {
                console.log(error);
            })
        },
        changePwd() {
            MessageBox.prompt(' ', '设置密码', { inputPlaceholder: '请输入密码...', inputType: 'text' }).then(({ value, action }) => {

                let tokenCode = localStorage.tokenCode;
                let signStr = 'Action=UpdatePlanShareVCode' + '&SID=' + localStorage.sid + '&VCode=' + value + '&Token=' + localStorage.Token + tokenCode;
                let data = new FormData();
                data.append('Action', 'UpdatePlanShareVCode');
                data.append('SID', localStorage.sid);
                data.append('VCode', value);
                data.append('Token', localStorage.Token);
                data.append('Sign', sha256.sha256(signStr).toUpperCase());
                this.$http.post(localStorage.SiteUrl, data).then(res => {
                    this.listData.VCode = value;
                    console.log(this.listData.VCode)
                }).catch(error => {
                    console.log(error);
                })
            })
        },
        changTeam() {
            MessageBox.prompt(' ', '设置团队名称', { inputPlaceholder: '请输入团队名称...', inputType: 'text' }).then(({ value, action }) => {
                let tokenCode = localStorage.tokenCode;
                let signStr = 'Action=UpdatePlanShareTeamName' + '&SID=' + localStorage.sid + '&TeamName=' + value + '&Token=' + localStorage.Token + tokenCode;
                let data = new FormData();
                data.append('Action', 'UpdatePlanShareTeamName');
                data.append('SID', localStorage.sid);
                data.append('TeamName', value);
                data.append('Token', localStorage.Token);
                data.append('Sign', sha256.sha256(signStr).toUpperCase());
                this.$http.post(localStorage.SiteUrl, data).then(res => {
                    this.listData.TeamName = value;
                    console.log(this.listData.TeamName)
                }).catch(error => {
                    console.log(error);
                })
            })
        },
        qhTupian(){

            if(this.radio == '1'){
                this.radio = '2';
            }else if(this.radio == '2'){
                this.radio = '1';
            }
        },
        urlClick(){
            window.location.href = this.listData.ShareUrl;
        },
        changeContact() {
            this.dialogVisible = false;
            let contactType = '';
            let contact = '';
            if(this.radio == '1'){
                contactType = "QQ";
            }else if(this.radio == '2'){
                contactType = "微信";
            }
            contact = this.input;
            console.log(contact);
            console.log(contactType);

            let tokenCode = localStorage.tokenCode;
            let signStr = 'Action=UpdatePlanShareContact' + '&SID=' + localStorage.sid + '&ContactType=' + contactType + '&Contact=' + contact + '&Token=' + localStorage.Token + tokenCode;
            let data = new FormData();
            data.append('Action', 'UpdatePlanShareContact');
            data.append('SID', localStorage.sid);
            data.append('ContactType', contactType);
            data.append('Contact', contact);
            data.append('Token', localStorage.Token);
            data.append('Sign', sha256.sha256(signStr).toUpperCase());
            this.$http.post(localStorage.SiteUrl, data).then(res => {
                this.listData.Contact = res.data.Data;
                localStorage.contactType = this.radio;
            }).catch(error => {
                console.log(error);
            })
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        }
    },
    created(){
        if(localStorage.contactType){
            this.radio = localStorage.contactType;
        }
    },
    mounted() {
        // 调用请求数据的方法
        this.getData()
    },
}
</script>
