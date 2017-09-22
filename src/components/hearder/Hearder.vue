<template>
    <div class="header-wrapper">
        <div class="header">
            <div class="title-wrapper">
                <span v-if="title.showBack" class="back" @click="back">
                    <img src="../../../static/images/back.png" alt="返回" />
                </span>

                <span v-if="title.showQH" class="back" @click="qhCaizhong">
                    <img src="../../../static/images/left-qh.png" alt="" />
                </span>
                <!-- <span class="title">{{title.text}}</span> -->
                <span class="title">{{title.text}}</span>

                <span v-if="title.right" class="right" @click="right">
                    <img src="../../../static/images/sousuobtn.png" alt="搜索" />
                </span>

                <span v-if="title.setting" class="right" @click="setting">
                    <img src="../../../static/images/settings.png" alt="设置" />
                </span>

                <span v-if="title.ok" class="right" @click="okClick">
                    <span>确定</span>
                </span>

                <span v-if="title.changeOK" class="right" @click="changeOkClick">
                    <span>确定</span>
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.header-wrapper {
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 1;
    .header {
        height: 44px;
        background-color: rgb(230, 103, 70);
        line-height: 44px;
        text-align: center;
        // background-image: url('../../../static/images/topbg.png');
        // background-repeat: no-repeat;
        // background-size: 100% 100%;

        .title-wrapper {
            font-size: 15px;
            color: #FCFCFC;
            span {
                display: inline-block;
            }
            .title {
                width: 74%;
                font-weight: 500;
            }
            .back {
                width: 12%;
                margin-left: -40px;
                img {
                    width: 20px;
                    height: 20px;
                    line-height: 20px;
                    vertical-align: middle;
                    padding: 3px;
                }
            }
            .right {
                width: 12%;
                margin-right: -40px;
                img {
                    width: 20px;
                    height: 20px;
                    line-height: 20px;
                    vertical-align: middle;
                    padding: 3px;
                }
            }
        }
    }
}
</style>


<script>
import sha256 from '../../util/sha256'
export default {
    props: {
        title: {
            type: Object
        }
    },
    data() {
        return {

        }
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        right() {
            this.$router.push('/planVC/planDetail/setParameter')
        },
        qhCaizhong() {
            this.$router.push('/XZcaizhong')
        },
        setting() {
            console.log(localStorage.shujufenxi)
            if (localStorage.shujufenxi == '1') {
                this.$router.push('/shujufenxi/setting1')
            } else if (localStorage.shujufenxi == '2') {
                this.$router.push('/shujufenxi/setting2')
            }
            else if (localStorage.shujufenxi == '3') {
                this.$router.push('/shujufenxi/setting3')
            }
            else if (localStorage.shujufenxi == '4') {
                this.$router.push('/shujufenxi/setting4')
            } else {

            }
        },
        okClick() {
            console.log("确定");
            if (localStorage.shujufenxi == '1') {
                console.log(localStorage.selectKeyNumberName1.split(','))
                console.log(localStorage.allKeyNumName1)
                var selectNum = [];
                for (var j = 0; j < localStorage.selectKeyNumberName1.split(',').length; j++) {
                    for (var i = 0; i < localStorage.allKeyNumName1.split(',').length; i++) {
                        if (localStorage.selectKeyNumberName1.split(',')[j] == localStorage.allKeyNumName1.split(',')[i]) {
                            selectNum.push(i)
                        } else {

                        }
                    }
                }
                localStorage.keyNum1 = selectNum;
                this.$router.go(-1);
                console.log(selectNum);

            } else if (localStorage.shujufenxi == '2') {
                console.log(localStorage.selectKeyNumberName2.split(','))
                console.log(localStorage.allKeyNumName2)
                var selectNum = [];
                for (var j = 0; j < localStorage.selectKeyNumberName2.split(',').length; j++) {
                    for (var i = 0; i < localStorage.selectKeyNumberName2.split(',').length; i++) {
                        if (localStorage.selectKeyNumberName2.split(',')[j] == localStorage.allKeyNumName2.split(',')[i]) {
                            selectNum.push(i)
                        } else {

                        }
                    }
                }
                localStorage.keyNum2 = selectNum;
                this.$router.go(-1);
                console.log(selectNum);
            }
            else if (localStorage.shujufenxi == '3') {
                localStorage.Norm1 = localStorage.selectKeyNumberName3;
                this.$router.go(-1);
            }
            else if (localStorage.shujufenxi == '4') {
                localStorage.Norm2 = localStorage.selectKeyNumberName4;
                this.$router.go(-1);
            } else {

            }
        },

        changeOkClick() {
            if (localStorage.isLogin) {
                let signStr = localStorage.sid + localStorage.Username + '4YCW1.0' + localStorage.pwd;
                let data = new FormData();
                data.append('Action', 'Login');
                data.append('SID', localStorage.sid);
                data.append('Account', localStorage.Username);
                data.append('AppType', '4');
                data.append('AppCode', 'YCW');
                data.append('AppVersion', '1.0');
                data.append('Sign', sha256.sha256(signStr).toUpperCase());

                this.$http.post('https://ycwidx.cpnet.com', data).then(res => {
                    if (res) {

                        localStorage.uid = res.data.Data.UID;
                        localStorage.AuthTypeName = res.data.Data.AuthTypeName;
                        localStorage.SiteUrl = res.data.Data.SiteUrl;
                        localStorage.AuthType = res.data.Data.AuthType;
                        localStorage.Username = res.data.Data.NickName;
                        localStorage.Token = res.data.Data.Token;
                        localStorage.PayType = res.data.Data.PayType;
                        localStorage.tokenCode = sha256.sha256(res.data.Data.Token + localStorage.pwd).toUpperCase()
                        this.$router.push({
                            path: "/planVC"
                        })
                    }

                }).catch(error => {
                    console.log(error);
                })

            } else {
                this.$router.push({
                    path: "/"
                })
            }
        }
    },
}
</script>