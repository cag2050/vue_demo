<template>
<div>
    子组件：父组件嵌套子组件（通过在路由中配置children），并向子组件传递数据（通过props）<br/>
    父组件传给子组件的数据：{{ message }} {{ logMessage }}
</div>
</template>

<script>
export default {
  name: 'hello',
  props: {
    message: String
  },
  data () {
    return {

    }
  },
  computed: {
    logMessage () {
        console.log(this.message)
        return this.message.split('').reverse().join('')
    }
  }
}
</script>

<style scoped>
</style>
