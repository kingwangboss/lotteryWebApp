<template>
    <div>
        <m-header :title="title"></m-header>
        BUY
    </div>
</template>

<style lang="less">

</style>


<script>
import mHeader from '../components/hearder/Hearder';
import sha256 from '../util/sha256'
export default {
    data() {
        return {
            title: {
                text: '购买续费',
                showBack: true,
                right: false,
            },
            listData:'',
        };
    },
    components: {
        mHeader,
    },
    methods: {
        getData() {
            let tokenCode = localStorage.tokenCode;
            let signStr = 'Action=GetServicePrice' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + tokenCode;
            let data = new FormData();
            data.append('Action', 'GetServicePrice');
            data.append('SID', localStorage.sid);
            data.append('Token', localStorage.Token);
            data.append('Sign', sha256.sha256(signStr).toUpperCase());

            this.$http.post('https://ycwidx.cpnet.com', data).then(res => {
                this.listData = res.data.Data
            }).catch(error => {
                console.log(error);
            })
        }
    },
    mounted() {
        // 调用请求数据的方法
        this.getData()
    }
}
</script>
