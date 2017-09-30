<template>

</template>

<script>
export default {
    created() {

        //系统判断
        if (!this.IsPC()) {
            if (localStorage.sid && localStorage.Token && localStorage.tokenCode) {

                this.$router.push('/planVC')
            } else {
                this.$router.push('/login')
            }
        } else {
            this.$router.push('/error')
        }



    },
    methods: {
        IsPC() {
            var userAgentInfo = navigator.userAgent;
            var Agents = ["iPhone",
                "iPad", "iPod"];
            var flag = true;
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            return flag;
        }
    }
}
</script>
