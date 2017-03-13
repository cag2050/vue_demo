<template>
  <div class="hello">
    输入框内容发生变化，才会触发watch里面的函数
    <h1><input v-model='msg'></h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'watch3'
    }
  },
  watch: {
    msg: function (val, oldVal) {
        console.log('val = '+ val +' , oldVal = ' + oldVal)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
