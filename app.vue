<template>
  <div>
    这个是一个app
    <input type="button" value="弹框" @click="handleClickShow">
  </div>
</template>

<script>
import {Message} from "./components/message.js";

export default {
  name:'app',
  methods:{
    handleClickShow(){
      console.log("这个")
      Message.success({message:"这个是一个弹层"})
    }
  }
}
</script>

<style scoped>

</style>
