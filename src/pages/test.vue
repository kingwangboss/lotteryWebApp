<template>
    <div>
        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <li v-for="item in list">{{item}}</li>
        </ul>
    </div>
</template>


<script>
export default {
    data() {
        return {
            loading: false,
            list: [1],
        }
    },
    methods: {
        loadMore() {
            this.loading = true;
            
            setTimeout(() => {
                console.log("加载更多");
                let last = this.list[this.list.length - 1];
                for (let i = 1; i <= 10; i++) {
                    this.list.push(last + i);
                }
                this.loading = false;
            }, 2500);
        }
    }
}
</script>
