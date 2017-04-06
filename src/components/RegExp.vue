<template>
    <span class='orange'>111</span>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    mounted: function () {
        /** 统一社会信用代码 正则 18位 **/
        let creditCodeReg = /^[1-9A-GY]{1}[1239]{1}[1-5]{1}[0-9]{5}[0-9A-Z]{10}$/
        let creditCode1 = '111112222233333444'
        console.log(creditCodeReg.test(creditCode1))
        // 组织机构代码 正则 9位
        let orgCodeReg = /^[A-Za-z\d]{9}$/
        let orgCode1 = '999999999'
        console.log(orgCodeReg.test(orgCode1))
    }
}
</script>

<style scoped>
</style>
