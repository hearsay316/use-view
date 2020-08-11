<template>
  <div v-if="visible">
    hello {{message}}{{type}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'value',
      type:'',
      visible:false,
      duration:3000
    }
  },mounted(){
    this.duration
  }
}
</script>

<style scoped>

</style>
