<template>
  
</template>

<script>
export default {
  created(){
      if(localStorage.sid && localStorage.Token && localStorage.tokenCode){
          
          this.$router.push('/planVC')
      }else{
          this.$router.push('/login')
      }
  }
}
</script>
