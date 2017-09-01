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
export default {
    data() {
        return {
            title: {
                text: '购买续费',
                showBack: true,
                right: false,
            },

        };
    },
    components: {
        mHeader,
    }
}
</script>
