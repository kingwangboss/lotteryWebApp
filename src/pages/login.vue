<template>
    <div>
        <m-header :title="title"></m-header>

        <div class="maincontainer">
            <div class="content">
                <img class="topImg" src="../../static/images/login/topLog.png" alt="icon">

                <form @submit.prevent="submit">
                    <div>
                        <input class="input" v-model="user.name" type="text" maxlength="20" placeholder="请输入手机号/昵称" @input="inputFuction">
                        <input class="input" v-model="user.pwd" type="password" maxlength="20" placeholder="请输入密码" @input="inputFuction">
                        <div class="xuCZ" @click="XZcaizhongClick">
                            <img class="leftImg" src="../../static/images/login/Login-09.png" alt="">
                            <span>{{czname}}</span>
                            <div>
                                <img class="rightImg" src="../../static/images/login/Login-10.png" alt="">
                            </div>
                        </div>
                    </div>
                    <el-button v-if="disabled" :disabled="disabled" class="btnEnable" type="primary" native-type="submit">登陆</el-button>
                    <el-button v-else :disabled="disabled" class="btnDefault" type="primary" native-type="submit">登陆</el-button>
                </form>

                <div class="bottom">
                    <router-link class="bottom-left" to="/lossPwd">忘记密码？</router-link>
                    <router-link class="bottom-right" to="/regist">立即注册>></router-link>
                </div>

            </div>
        </div>
    </div>
</template>


<style lang="less" scoped>
#bundle {
    .juzhong {
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }
}

::-webkit-input-placeholder {
    /* WebKit browsers */
    color: RGB(229, 164, 153);
    font-size: 13px;
}

.maincontainer {
    background-image: url('../../static/images/login/Loginbg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    position: absolute;
    .content {
        #bundle>.juzhong;
        flex-direction: column;
        .topImg {
            width: 120px;
            height: 80px;
            margin-top: 10%;
        }
        .input {
            margin-top: 10%;
            background-color: transparent;
            background-image: url('../../static/images/login/a2.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            height: 44px;
            line-height: 44px;
            width: 100%;
            padding-left: 10px;
            font-size: 12px;
        }
        .xuCZ {
            margin-top: 10%;
            background-color: transparent;
            background-image: url('../../static/images/login/a2.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            height: 44px;
            line-height: 44px;
            width: 100%;
            padding-left: 10px;
            display: flex;
            flex-direction: row;
            .leftImg {
                width: 30px;
                height: 30px;
                padding-top: 7px;
                padding-right: 7px;
            }
            span {
                color: RGB(229, 164, 153);
                font-size: 12px;
            }
            div {
                width: 55%;
                height: 100%;
                .rightImg {
                    padding-top: 7px;
                    padding-right: 7px;
                    float: right;
                    height: 30px;
                    width: 30px;
                }
            }
        }
        .btnDefault {
            margin-top: 30px;
            height: 40px;
            width: 100%;
            border-radius: 40px;
            background-color: RGB(251, 230, 231);
            border: 0;
            color: red;
            font-size: 18px;
        }
        .btnEnable {
            margin-top: 30px;
            height: 40px;
            width: 100%;
            border-radius: 40px;
            background-color: RGB(240, 144, 156);
            border: 0;
            color: #fff;
            font-size: 18px;
        }
    }
    .bottom {
        margin-top: 20px;
        width: 280px;
        .bottom-left {
            color: #fff;
            float: left;
        }
        .bottom-right {
            color: #fff;
            float: right;
        }
    }
}
</style>

<script>
import mHeader from '../components/hearder/Hearder';
import http from '../util/http'
import sha256 from '../util/sha256'

export default {
    name: 'loginVC',
    data() {
        return {
            title: {
                text: '登陆',
                tabName: 'loginVC',
                tabClass: 'loginVC',
            },
            user: {
                name: '',
                pwd: '',
                sid: '',
            },
            disabled: true,
            czname:localStorage.czname ? localStorage.czname : '幸运农场'
        };
    },
    components: {
        mHeader,
    },
    activated() {
        document.body.className = 'main-body';
    },
    methods: {
        XZcaizhongClick(){
            this.$router.push({
                path:"/XZcaizhong",
            })
        },
        btnclick() {
            console.log("push")
            this.$router.push({
                path: '/regist'
            })
        },
        inputFuction() {
            if (this.user.name.length > 0 && this.user.pwd.length > 0) {
                this.disabled = false;
            } else {
                this.disabled = true;
            }
        },
        submit: function(event) {

            if(this.user.sid){
                
            }else{
                this.user.sid = "4"
                localStorage.czname = '幸运农场'
            }


            let signStr = this.user.sid + this.user.name + '4YCW1.0' + sha256.sha256(this.user.pwd).toUpperCase();
            console.log(signStr);
            let data = new FormData();
            data.append('Action', 'Login');
            data.append('SID', this.user.sid);
            data.append('Account', this.user.name);
            data.append('AppType', '4');
            data.append('AppCode', 'YCW');
            data.append('AppVersion', '1.0');
            data.append('Sign', sha256.sha256(signStr).toUpperCase());
            
            localStorage.pwd = sha256.sha256(this.user.pwd).toUpperCase();
            this.$http.post('https://ycwidx.cpnet.com', data).then(res => {
                // console.log(res);
                // this.setCookie('UID', res.data.Data.UID, 1000 * 60 * 60 * 24 * 15)
                if (res) {
                    // this.$store.commit('updateUid', res.data.Data.UID)
                    // this.$store.commit('updateAuthtypename', res.data.Data.AuthTypeName)
                    // this.$store.commit('updateUrl', res.data.Data.SiteUrl)
                    // this.$store.commit('updateAuthtype', res.data.Data.AuthType)
                    // this.$store.commit('updateUsername', res.data.Data.NickName)
                    // this.$store.commit('updateToken', res.data.Data.Token)
                    // this.$store.commit('updatePaytype', res.data.Data.PayType)
                    localStorage.isLogin = true;
                    localStorage.sid = this.user.sid
                    localStorage.uid = res.data.Data.UID;
                    localStorage.AuthTypeName = res.data.Data.AuthTypeName;
                    localStorage.SiteUrl = res.data.Data.SiteUrl;
                    localStorage.AuthType = res.data.Data.AuthType;
                    localStorage.Username = res.data.Data.NickName;
                    localStorage.Token = res.data.Data.Token;
                    localStorage.PayType = res.data.Data.PayType;
                    localStorage.QQUrl = res.data.Data.QQUrl;
                    localStorage.tokenCode = sha256.sha256(res.data.Data.Token+localStorage.pwd).toUpperCase()
                    this.$router.push({
                        path: "/planVC"
                    })
                }

            }).catch(error => {
                console.log(error);
            })

            // this.$http.post("",data).then(res=>{
            //     console.log(res);
            //     this.$store.commit('updateVcode',res.data.Data)
            // })



            // console.log(this.$store.getters.getVcode);


        }
    },

    created() {
         this.user.sid = localStorage.sid;

        // let u = navigator.userAgent;
        // alert(u)
        // this.$store.dispatch('fetchOrderList')
        // this.$store.commit('updateParams',{
        //     key:'pid',
        //     val:'1'
        // })
        // console.log(this.$store)
    }

}
</script>

