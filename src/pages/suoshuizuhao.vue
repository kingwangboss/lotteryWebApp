<template>
  <div>
      缩水组号{{plandata}}
  </div>
</template>

<style lang="less" scoped>

</style>

<script>
import sha256 from "../util/sha256";
export default {
  props: ["data"],
  data() {
    return {
      plandata: Object
    };
  },
  watch: {
    data: function(now, old) {
      this.plandata = this.data;
      console.log(this.plandata);
    }
  },

  created() {
    // this.plandata = this.data;
    // console.log(this.plandata);
  },
  mounted() {}
};
</script>
