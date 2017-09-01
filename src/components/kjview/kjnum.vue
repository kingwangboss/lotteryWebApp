<template>
    <div class="content">
        <div v-show="isLan(index)" class="kjnum" :style="{width:ojwidth+'px',height:height+'px'}" :key="item" v-for="(item,index) in numArr">{{item}}</div>
        <div v-show="!isLan(index)" class="kjnum1" :style="{width:ojwidth+'px',height:height+'px'}" :key="item" v-for="(item,index) in numArr">{{item}}</div>
    </div>
</template>

<style lang="less" scoped>
.content {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    flex-wrap: wrap;
    .kjnum {
        border: 1px solid #f5bc8d;
        line-height: 36px;
        border-radius: 5px;
        // width: 29px;
        height: 36px;
        text-align: center;
        margin: 3px;
        color: #fffde4;
        background-color: #db3c3e;
    }
    .kjnum1 {
        border: 1px solid #f5bc8d;
        line-height: 36px;
        border-radius: 5px;
        // width: 29px;
        height: 36px;
        text-align: center;
        margin: 3px;
        color: #fffde4;
        background-color:rgb(63, 123, 244);
    }
}
</style>


<script>

export default {
    props:{
        data:{
            type:Array,      
        }
    },
    data() {
        return {
            numArr: "",
            // width: 100,
            height: 35,
            screenWidth: document.body.clientWidth   // 这里是给到了一个默认值 （这个很重要）
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
    created(){
        this.numArr = this.data;
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
                    // that.screenWidth = that.$store.state.canvasWidth
                    // that.init()
                    that.timer = false
                }, 400)
            }
        }
    },
    // components: {
    //     numArr: num,
    // },
    computed: {
        ojwidth: {
            // getter
            get: function () {
                var ojwidth;
                var margin;
                var colnum = 10;//列
                colnum = this.numArr.length > colnum ? colnum : this.numArr.length;
                var rownum = this.numArr.length / colnum;//行
                margin = this.numArr.length > 5 ? 3 : 4;//间距
                ojwidth = (this.screenWidth - (2 * (margin +1) * colnum)) / colnum;//格子的宽
                return ojwidth;
            },
            // setter
            set: function (newValue) {
               
            }
        }
    }
}
</script>

