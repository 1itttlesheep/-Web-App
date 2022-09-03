<template>
  <div class="header">
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header{
  width: 100%;
  height: 0;
  padding-top: 33.5%;
  position: relative;
  color: #fff;
  font-size: 0.28rem;
  text-align: center;
  
  background: url('../assets/1.jpg') no-repeat;
  background-size: cover;
}
</style>
