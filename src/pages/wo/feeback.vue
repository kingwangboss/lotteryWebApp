<template>
    <div class="main">
        <m-header :title="title"></m-header>
        <div class="main">

        </div>
    </div>
</template>

<style lang="less" scoped>
.main{
    display: flex;
    flex-direction: column;
}
</style>

<script>
import mHeader from '../../components/hearder/Hearder';
import sha256 from '../../util/sha256'
export default {
    data() {
        return {
            title: {
                text: '意见反馈',
                showBack: true,
            },
        };
    },
    components: {
        mHeader,
    },
    methods: {
       
    }
}
</script>
