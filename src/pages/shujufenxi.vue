<template>
  <div>
    <m-header :title="title"></m-header>
    数据分析
  </div>
</template>

<script>
import mHeader from '../components/hearder/Hearder';
export default {
  components:{
    mHeader
  },
  data() {
    return {
      
      title: {
        text: "数据分析",
        showBack: false,
      },
    }
  },
}
</script>
