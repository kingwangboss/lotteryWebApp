<template>
    <div>

        <div v-for="item in kjArr.num_key" :key="item.KJArr">
            <div class="contentCell">
                <span class="top-left">{{"第"+item.ID+"期"}}</span>
                <span class="top-right">{{item.CreateTime}}</span>
            </div>

            <div class="KJnum">
                <div v-for="item1 in item.Data.split(',')" :key="item1">
                    <div class="num">{{item1}}</div>
                </div>
            </div>

            <div class="top"></div>
        </div>

    </div>
</template>

<script>
export default {
    props:{
        data:{
            type :Object,
        }
    },
    created() {
        this.kjArr = this.data;
    },
    data() {
        return {
            kjArr: "",
        }
    },

}
</script>

<style lang="less" scoped>
.contentCell {
    margin-top: 15px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
}

.top-left {
    background-image: url('../../../static/images/history/Records-02.png');
    font-size: 12.5px;
    padding: 2.5px 15px 2.5px 5px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: #fff;
}

.top-right {
    display: flex;
    align-items: center;
    font-size: 12.5px;
}

.KJnum {
    margin: 0px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    text-align: center;
}

.num {
    margin: 0px 5px;
    padding-top: 5px;
    height: 35px;
    width: 35px;
    background-repeat: no-repeat;

    background-size: 35px;
    color: #f82b56;
    font-size: 23px;
    background-image: url('../../../static/images/history/Records-04.png');
}

.top {
    height: 10px;
    background: #FBF9FE;
}
</style>

