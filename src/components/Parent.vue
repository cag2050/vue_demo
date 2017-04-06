<template>
<div>
    父组件：父组件嵌套子组件（通过在路由中配置children），并向子组件传递数据（通过props）
    <router-view message='parent的数据'></router-view>
</div>
</template>

<script>
export default {
    name: 'hello',
    data () {
        return {

        }
    },
    watch: {

    }
}
</script>

<style scoped>
</style>
