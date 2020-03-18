<template>
    <el-menu class="el-menu-vertical-demo" default-active="0" v-on:select="selectMenu">
        <el-menu-item v-for="(item, index) in routes" v-bind:key="index" v-bind:index="`${index}`">
            <span slot="title">{{item.name}}</span>
        </el-menu-item>
    </el-menu>
</template>
<script>
import { routes } from '@/router/index'
export default {
    data: function () {
        return {
            routes
        }
    },
    methods: {
        selectMenu: function (index) {
            this.$router.push({
                path: routes[index].path
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
    .el-menu {
        border-right: none;
        .el-menu-item {
            &.is-active {
                background-color: #409EFF;
                color: white;
            }
        }
    }
</style>
