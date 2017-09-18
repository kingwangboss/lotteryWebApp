<template>
    <div class="main">
        <m-header :title="title"></m-header>
        <div class="top">
            <div class="cell">
                <span>原始密码:</span>
                <input v-model="pwd.oldpwd" placeholder="请输入原始密码" type="text" maxlength="20" @input="inputFuction">
            </div>
            <div class="cell">
                <span>重设密码:</span>
                <input v-model="pwd.newpwd" placeholder="请输入6-20位数字或字母" type="password" maxlength="20" @input="inputFuction">
            </div>
            <div class="cell">
                <span>确认密码:</span>
                <input v-model="pwd.newpwd1" placeholder="请在此输入新密码" type="password" maxlength="20" @input="inputFuction">
            </div>
            <div>
                <el-button v-if="disabled" class="btnDefault" type="text" @click="btnClick">修改密码</el-button>
                <el-button v-else class="btnDefault" type="text" @click="btnClick">修改密码</el-button>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.top {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;

    .cell {
        display: flex;
        flex-direction: row;
        span {
            font-size: 14px;
            font-weight: 900;
            color: black;
            width: 20%;
            margin: 3% 3%;
            text-align: right;
        }
        input {
            width: 70%;
        }
    }
}

.btnDefault {
    margin-top: 30px;
    width: 50%;
    background-image: url('../../../static/images/btnBG.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: white;
}

.btnEnable {
    margin-top: 30px;
    width: 50%;
    background-image: url('../../../static/images/btnBG.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: gray;
}
</style>


<script>
import mHeader from '../../components/hearder/Hearder';
import sha256 from '../../util/sha256'
import { Toast, MessageBox } from 'mint-ui'
export default {
    data() {
        return {
            title: {
                text: '修改密码',
                showBack: true,
            },
            pwd: {
                oldpwd: '',
                newpwd: '',
                newpwd1: '',
            },
            disabled: true,
        };
    },
    components: {
        mHeader,
    },
    methods: {
        btnClick() {
            console.log(this.pwd.oldpwd);
            console.log(this.pwd.newpwd);
            console.log(this.pwd.newpwd1);
            if (this.pwd.oldpwd.length ==0 || this.pwd.newpwd == 0 || this.pwd.newpwd1 == 0){
                MessageBox({
                        title: '提示',
                        message: '输入未完全',
                        showCancelButton: false,
                    })
            } else {
                if (this.pwd.newpwd === this.pwd.newpwd1) {
                    let tokenCode = localStorage.tokenCode;
                    let signStr = 'Action=ChangePwd' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + '&OldPwd=' + sha256.sha256(this.pwd.oldpwd).toUpperCase() + '&NewPwd=' + sha256.sha256(this.pwd.newpwd1).toUpperCase() + tokenCode;
                    let data = new FormData();
                    data.append('Action', 'ChangePwd');
                    data.append('SID', localStorage.sid);
                    data.append('Token', localStorage.Token);
                    data.append('OldPwd', sha256.sha256(this.pwd.oldpwd).toUpperCase());
                    data.append('NewPwd', sha256.sha256(this.pwd.newpwd1).toUpperCase());
                    data.append('Sign', sha256.sha256(signStr).toUpperCase());

                    this.$http.post(localStorage.SiteUrl, data).then(res => {

                        this.$router.go(-1);

                    }).catch(error => {
                        console.log(error);
                    })
                } else {
                    MessageBox({
                        title: '提示',
                        message: '两次输入密码不同，请重新输入',
                        showCancelButton: false,
                    })
                }
            }
        },

        inputFuction() {
            if (this.pwd.oldpwd.length > 0 && this.pwd.newpwd.length > 0 && this.pwd.newpwd1.length > 0) {
                this.disabled = false;
            } else {
                this.disabled = true;
            }
        }
    }
}
</script>
