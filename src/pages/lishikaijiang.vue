<template>
  <div>
    <cell :data="lishiData"></cell>
  </div>
</template>


<script>
import cell from '../components/lishicell/lishicell'
var data = require('../../static/data/historyData')
export default {
  name: 'lishikaijiang',
  data() {
    return {
      lishiData: data
    }
  },

  components: {
    cell,
  }

}
</script>
