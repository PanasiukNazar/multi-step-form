<template>
    <div class="greeting">
        <router-link to="personal-info">
            <button class="greeting-button">{{ buttonLabel }}</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Greeting',
    data () {
        return {
            buttonLabel: 'Get Started'
        }
    }
}
</script>

<style lang="scss">
    .greeting-button {
        font-family: 'Ubuntu-Medium';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        background-color: #6259FF;
        border: none;
        border-radius: 8px;
        padding: 15px 25px;
        color: white;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;

        &:hover {
            -webkit-box-shadow: 0px 0px 15px 0px rgba(145,144,141,1);
            -moz-box-shadow: 0px 0px 15px 0px rgba(145,144,141,1);
            box-shadow: 0px 0px 15px 0px rgba(145,144,141,1);
        }
    }
</style>