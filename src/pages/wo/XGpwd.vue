<template>
    <div class="main">
        <m-header :title="title"></m-header>
        
    </div>
</template>

<style lang="less">

</style>

<script>
import mHeader from '../../components/hearder/Hearder';
import sha256 from '../../util/sha256'
export default {
    data() {
        return {
            title: {
                text: '修改密码',
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
