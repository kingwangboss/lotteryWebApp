<template>
    <div>

        <div v-for="item in kjnumArr" :key="item.KJArr">
            <div class="top"></div>
            <div class="contentCell">
                <span class="top-left">{{"第"+item.ID+"期"}}</span>
                <span class="top-right">{{item.CreateTime}}</span>
            </div>

            <div class="KJnum">
                <div v-show="isLan(index1)" v-for="(item1,index1) in item.Data.split(',')" :key="item1" :style="{width:ojwidth+'px',height:ojwidth+'px'}">
                    <div class="num">{{item1}}</div>
                </div>
                <div v-show="!isLan(index1)" v-for="(item1,index1) in item.Data.split(',')" :key="item1" :style="{width:ojwidth+'px',height:ojwidth+'px'}">
                    <div class="num1">{{item1}}</div>
                </div>
            </div>

            <!-- <div class="top"></div> -->
        </div>

    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
        }
    },

    data() {
        return {
            kjArr: "",
            height: 35,
            screenWidth: document.body.clientWidth
        }
    },

    methods:{
        isLan(index){
            if(index === 20){
                return false;
            }else {
                return true;
            }
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
                setTimeout(function() {
                    that.timer = false
                }, 400)
            }
        }
    },

    computed: {
        kjnumArr: {
            get: function() {

                return this.data;
            },
            set(){

            }
        },
        ojwidth: {
            // getter
            get: function() {
                var ojwidth;
                var margin;
                var colnum = 10;//列
                colnum = this.kjnumArr.length > colnum ? colnum : this.kjnumArr.length;
                var rownum = this.kjnumArr.length / colnum;//行
                margin = this.kjnumArr.length > 5 ? 1 : 2;//间距
                ojwidth = (this.screenWidth - (2 * (margin) * colnum)) / colnum;//格子的宽
                return ojwidth+1;
            },
            // setter
            set: function(newValue) {

            }
        }
    }

}
</script>

<style lang="less" scoped>
.contentCell {
    margin-top: 0px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
}

.top-left {
    font-size: 12px;
    margin-top: 10px;
    padding: 6px 15px 6px 8px;
    background: #fc5c42;
    color: #fff;
    border-radius: 0 12px 12px 0px;

}

.top-right {
    display: flex;
    align-items: center;
    font-size: 12.5px;
    margin-top: 10px;
    margin-right: 5px;
    color: #999999;
}

.KJnum {
    // margin: 0px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    text-align: center;
    margin-top: 8px;

}

.num {
    margin: 0px 5px;
    line-height: 26px;
    height: 26px;
    width: 26px;
    color: #ff5065;
    font-size: 15px;
    border: 1px solid #fc5c42;
    border-radius: 26px;
}

.num1 {
    margin: 0px 5px;
    line-height: 26px;
    height: 26px;
    width: 26px;
    color: rgb(31, 96, 251);
    font-size: 15px;
    border: 1px solid rgb(31, 96, 251);
    border-radius: 26px;
}

.top {
    height: 10px;
    background:#f3f3f3;
    border-top: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
}
</style>

