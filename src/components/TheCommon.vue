<template> 
</template>

<script>
     // 定义一些公共的属性和方法
    const httpUrl = 'http://app.dev.huaxiweiying.com/HXXCServiceAdmin/';
    function commonFun() {
        console.log("公共方法")
    }
    // 暴露出这些属性和方法
    export default {
        httpUrl,
        commonFun
    }
</script>

<style>
 
</style>