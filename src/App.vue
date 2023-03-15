<template>
    <div class="container">
        <div class="sidebar" v-if="$route.name !== 'greeting'">
            <SideBar/>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import SideBar from './components/SideBar.vue';

export default {
    name: "App",
    components: { SideBar }
}       
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .container {
        display: flex;
        background: #FFFFFF;
        box-shadow: 20px 20px 40px 20px rgba(0, 0, 0, 0.0951141);
        border-radius: 15px;
        gap: 80px;
        max-width: 940px;
        max-height: 600px;
        height: 100%;
        width: 100%;
        padding: 16px;
    }

    .sidebar {
        flex: 4;
         overflow: hidden;
         border-radius: 10px;
    }

    .content {
        flex: 8;
        display: flex;
        align-items: center;
    }
</style>
