<template>
    <div>
        <m-header :title="title">
        </m-header>
        <div class="maincontainer">
            <div class="cell" v-for="item in dataList" :key="item.toString()">
                <div class="cell-btnview">
                    <el-button class="btn" type="primary" v-for="item1 in item.CPNames" :key="item1.toString()"  @click="btnClick($event,item1.SID)">{{item1.CPName}}</el-button>
                </div>
                <div class="line">
                </div>
            </div>

        </div>
    </div>
</template>


<style lang="less" scoped>
.maincontainer {
    display: flex;
    flex-direction: column;
}

.cell {
    display: flex;
    flex-direction: column;
}

.cell-btnview {
    margin-bottom: 10px;
}

.btn {
    height: 30px;
    align-content: center; // background-size: 100% 100%;
    background: white;
    float: left;
    margin-left: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    color: #E5574D;
    padding: 5px 20px;
    // font-size: 13px;
    // border: 1px solid black;
}

.line {
    height: 1px;
    background: #D8D8D8;
}
</style>


<script>
import mHeader from '../components/hearder/Hearder';
import sha256 from '../util/sha256'
export default {
    data() {
        return {
            title: {
                text: '选择彩种',
                showBack: true,
            },
            dataList: [],
        };
    },
    components: {
        mHeader,
    },
    methods: {
        getData() {
            let data = new FormData();
            data.append('Action', 'GetServiceList');
            this.$http.post('https://ycwidx.cpnet.com', data).then(res => {
                console.log('getservicelist');
                this.dataList = res.data.Data;
            }).catch(error => {

            });
        },
        btnClick(btn,sid) {
            console.log(this.$route.params)
            localStorage.sid = sid
            localStorage.czname = btn.target.innerText


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
    mounted() {
        this.getData();

    }
}
</script>
