<template>
    <div>

        <div v-for="item in kjArr" :key="item.KJArr">
            <div class="contentCell">
                <span class="top-left">{{"第"+item.ID+"期"}}</span>
                <span class="top-right">{{item.CreateTime}}</span>
            </div>

            <div class="KJnum" >
                <div v-for="item1 in item.Data.split(',')" :key="item1" :style="{width:ojwidth+'px',height:ojwidth+'px'}">
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
            type :Array,
        }
    },
    created() {
        console.log(this.data);
        this.kjArr = this.data;
    },
    data() {
        return {
            kjArr: "",
            height: 35,
            screenWidth: document.body.clientWidth
        }
    },
    mounted() {
        const that = this
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth
                that.screenWidth = window.screenWidth
            })()
        }

    },
    watch: {
        screenWidth(val) {
            if (!this.timer) {
                this.screenWidth = val
                this.timer = true
                let that = this
                setTimeout(function () {
                    that.timer = false
                }, 400)
            }
        }
    },

    computed: {
        ojwidth: {
            // getter
            get: function () {
                var ojwidth;
                var margin;
                var colnum = 10;//列
                colnum = this.kjArr.length > colnum ? colnum : this.kjArr.length;
                var rownum = this.kjArr.length / colnum;//行
                margin = this.kjArr.length > 5 ? 1 : 2;//间距
                ojwidth = (this.screenWidth - (2 * (margin) * colnum)) / colnum;//格子的宽
                return ojwidth;
            },
            // setter
            set: function (newValue) {
               
            }
        }
    }

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

