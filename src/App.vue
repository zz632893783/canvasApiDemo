<template>
    <el-container id="app">
        <el-aside class="aside" width="120px">
            <side-menu></side-menu>
        </el-aside>
        <el-main class="main">
            <router-view/>
        </el-main>
    </el-container>
</template>
<script>
import sideMenu from '@/components/sideMenu.vue'
export default {
    components: {
        sideMenu
    },
    data: function () {
        return {}
    }
}
</script>
<style lang="stylus">
html, body {
    width: 100%;
    height: 100%;
}
#app {
    width: 100%;
    height: 100%;
}
</style>
<style lang="stylus" scoped>
.aside {
    border-right: 1px solid #e6e6e6;
    font-size: 0;
}
.main {
    padding: 0;
}
</style>
