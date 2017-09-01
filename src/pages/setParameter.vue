<template>
    <div>
        <m-header :title="title">
        </m-header>
        parameter
    </div>
</template>

<style lang="less" scoped>

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
            
        };
    },

    components: {
        mHeader,
    },
}
</script>

