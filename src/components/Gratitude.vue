<template>
    <div class="gratitude-block">
        <div class="garatitude-image">
            <img src="@/assets/images/icon-thank-you.svg" alt="thank-you">
        </div>
        <div class="garatitude-content">
            <p class="garatitude-title">{{ labels.thank_you }}</p>
            <p class="garatitude-text">{{ labels.text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            labels: {
                    thank_you: "Thank you!",
                    text: "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
            }
        }
    }
}
</script>

<style lang="scss">
    .gratitude-block {
        text-align: center;

        .garatitude-image {
            margin-bottom: 32px;
        }

        .garatitude-content {
            .garatitude-title {
                font-family: 'Ubuntu-Bold';
                font-size: 32px;
                line-height: 37px;
                text-align: center;
                color: #022959;
                margin-bottom: 14px;
            }   

            .garatitude-text {
                font-family: 'Ubuntu-Regular';
                font-size: 16px;
                line-height: 25px;
                color: #9699AA;
            }
        }
    }
</style>