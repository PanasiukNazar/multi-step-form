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
        max-width: 940px;
        max-height: 600px;
        height: 100%;
        width: 100%;
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

        @media (max-width: 992px) {
            flex-direction: column;
            box-shadow: none
        }
    }

    .sidebar {
        flex: 4;
        overflow: hidden;
        border-radius: 10px;

        @media (max-width: 992px) {
            overflow: unset;
        }
    }

    .content {
        flex: 8;
        display: flex;
        align-items: center;

        @media (max-width: 992px) {
            position: relative;
            justify-content: center;
            background: #FFFFFF;
            box-shadow: 20px 20px 40px 20px rgba(0, 0, 0, 0.0951141);
            border-radius: 10px;
            bottom: 135px;
            padding-top: 32px;
            margin: 0px 16px;
        }
    }
</style>
