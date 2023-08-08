<template>
    <div id="trash-detail">
        <h1>{{ msg }}: {{ $route.params.noteId }}</h1>
        <ul>
            <li><router-link to="/note/1">回收站笔记本1</router-link></li>
            <li><router-link to="/note/2">回收站笔记本2</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            msg: '回收站笔记本详情页'
        }
    },
}
</script>

<style scoped>
h1{
    color: red;
}
</style>