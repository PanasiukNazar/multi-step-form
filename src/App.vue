<template>
    <div id="app">
        <div class="container form-wrapper">
            <div class="row">
                <div class="form-sidebar col-lg-3" v-if="$route.name !== 'greeting'">
                    <SideBar/>
                </div>
                <div class="form-content col-lg-6">
                    <router-view></router-view>
                </div>
            </div>
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

    .form-wrapper {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #FFFFFF;
        box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.0951141);
        border-radius: 15px;
        padding: 30px;
    }

    @font-face {
        font-family: "Ubuntu-Bold";
        src: local("Ubuntu-Bold"),
        url('@/assets/fonts/Ubuntu-Bold.ttf') format("truetype");
    }
    @font-face {
        font-family: "Ubuntu-Medium";
        src: local("Ubuntu-Medium"),
        url('@/assets/fonts/Ubuntu-Medium.ttf') format("truetype");
    }
    @font-face {
        font-family: "Ubuntu-Regular";
        src: local("Ubuntu-Regular"),
        url('@/assets/fonts/Ubuntu-Regular.ttf') format("truetype");
    }
</style>
