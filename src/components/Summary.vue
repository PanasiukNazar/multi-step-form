<template>
    <div class="summary-block">
        <div class="summary"  v-if="$route.name === 'summary'">
            <div class="summary-header">
                <h4 class="headline">{{ labels.finishing_up }}</h4>
                <span class="notification">{{ labels.double_check_before_confirming }}</span>
            </div>
    
            <div class="summary-content">
                    <div class="subscription">
                        <div class="subscription-type">
                            <p class="type-title">
                                {{ capitalize(summaryData.type) }} ({{ monthlySubscription ? labels.monthly : labels.yearly }})
                            </p>
                            <div class="subscription-changer">
                                <button class="chage-button" @click="recountSubscriptionTime">
                                    {{ labels.change }}
                                </button>
                            </div>
                        </div>
                        <div class="subscription-payment">
                            <p class="payment-title">{{ labels.usd }}{{ summaryData.price }}/{{ monthlySubscription ? labels.mo : labels.yr }}</p>
                        </div>
                    </div>
        
                    <div class="additional-items" v-for="(item, idx) in summaryData.additionalItems" :key="idx">
                        <div class="item">
                            <p class="item-type">{{ item.serviceType }}</p>
                            <p class="item-payment">+{{labels.usd}}{{ item.price }}/{{ monthlySubscription ? labels.mo : labels.yr }}</p>
                        </div>
                    </div>
        
                    <div class="total-fee">
                        <p class="total-label">{{ labels.total }} (per month)</p>
                        <p class="total-payment">+{{ labels.usd }}{{ totalPrice }}/{{ monthlySubscription ? labels.mo : labels.yr }}</p>
                    </div>
            </div>
    
            <div class="summary-buttons">
                <div class="previous">
                    <router-link to="pick-add-ons"> 
                        <button>
                            <span>
                                {{ labels.go_back }}        
                            </span>
                        </button>
                    </router-link>
                </div>
    
                <div class="next">
                    <router-link :to="{name: 'gratitude'}">
                        <button>
                            <span>
                                {{ labels.confirm }}
                            </span>
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted  } from 'vue'

export default {
    name: "Greeting",

    setup() {
        const store = useStore()
        const labels = {
            finishing_up: "Finishing up",
            double_check_before_confirming: "Double-check everything looks OK before confirming.",
            go_back: "Go Back",
            confirm: "Confirm",
            total: "Total",
            change: "Change",
            monthly: 'Monthly',
            yearly: 'Yearly',
            mo: "mo",
            yr: "yr",
            usd: '$'
        }

        function setSummaryData() {
            store.commit('setSummaryData')
        }

        function toggleSubscriptionTime() {
            store.commit('toggleSubscriptionTime')
        }

        function calculateTotatPrice() {
            store.commit('calculateTotatPrice')
        }

        function recountSubscriptionTime() {
            toggleSubscriptionTime()
            setSummaryData()
        }

        function capitalize(string) {
            return string && string[0].toUpperCase() + string.slice(1);
        }

        const totalPrice = computed(() => store.state.totalPrice)
        const summaryData = computed(() => store.state.summaryData)
        const monthlySubscription = computed(() => store.state.monthlySubscription)

        onMounted(() => {
            setSummaryData()
            calculateTotatPrice()
        })

        return {
            labels,
            setSummaryData,
            toggleSubscriptionTime,
            calculateTotatPrice,
            recountSubscriptionTime,
            capitalize,
            totalPrice,
            summaryData,
            monthlySubscription
        }
    }
}
</script>

<style lang="scss">
.summary-block {
    width: 100%;
    .summary {    
        .summary-header {
            margin-bottom: 35px;
            .headline {
                font-family: 'Ubuntu-Bold';
                font-size: 32px;
                line-height: 37px;
                color: #022959;
                margin: 0px;
                padding-bottom: 11px;
            }
            .notification {
                font-family: 'Ubuntu-Regular';
                font-size: 16px;
                line-height: 25px;
                color: #9699AA;
            }
        }
    
        .summary-content {
            .subscription {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid rgba(150, 153, 170, 0.3);
                padding-bottom: 24px;
                margin-bottom: 16px;
    
                .subscription-type{
                    .type-title {
                        font-family: 'Ubuntu-Medium';
                        font-size: 16px;
                        line-height: 18px;
                        color: #022959;
                        margin-bottom: 7px;
                    }
    
                    .subscription-changer {
                        .chage-button {
                            font-family: 'Ubuntu-Regular';
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 20px;
                            text-decoration-line: underline;
                            border: none;
                            color: #9699AA;
                            padding: 0px;
                            cursor: pointer;
    
                            &:hover {
                                color: #483EFF;
                            }
                        }
                    }
                }
    
                .subscription-payment {
                    .payment-title {
                        font-family: 'Ubuntu-Bold';
                        font-size: 16px;
                        line-height: 20px;
                        color: #022959;
                    }
                }
            }
    
            .additional-items {
                margin-bottom: 16px;
                .item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
    
                    .item-type {
                        font-family: 'Ubuntu-Regular';
                        font-size: 14px;
                        line-height: 20px;
                        color: #9699AA;
                        margin: 0px;
                    }
    
                    .item-payment {
                        font-family: 'Ubuntu-Regular';
                        font-size: 14px;
                        line-height: 20px;
                        color: #022959;
                        margin: 0px;
                    }
                }
            }
    
            .total-fee {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 30px;
    
                .total-label {
                    font-family: 'Ubuntu-Regular';
                    font-size: 14px;
                    line-height: 20px;
                    color: #9699AA;
                    margin: 0px;
                }
    
                .total-payment {
                    font-family: 'Ubuntu-Bold';
                    font-size: 20px;
                    line-height: 20px;
                    color: #483EFF;
                    margin: 0px;
                }
            }
        }
    
        .summary-buttons {
            display: flex;
            justify-content: space-between;
            margin-top: 93px;
            .previous,
            .next {
                button {
                    border-radius: 8px;
                    width: 123px;
                    height: 48px;
                    padding: 0;
                    border: none;
                    span {
                        font-family: 'Ubuntu-Regular';
                        font-size: 16px;
                        line-height: 18px;
                    }
                }
            }
    
            .previous {
                button {
                    background: none;
                    span {
                        color: #9699AA;
                    }
                }
            }
            .next {
                button {
                    background: #164A8A;
                    span {
                        color: #FFFFFF;
                    }
                }
            }
        }
    }
}

@media (max-width: 992px) {
    .summary-block {
        padding: 0px 24px;
        .summary {
            .summary-header {
                padding-bottom: 22px;
                margin-bottom: 0px;

                .headline {
                    font-family: 'Ubuntu-Medium';
                    font-size: 24px;
                    line-height: 28px;
                    color: #022959;
                    margin: 0px;
                    padding-bottom: 11px;
                }
                .notification {
                    font-family: 'Ubuntu-Regular';
                    font-size: 16px;
                    line-height: 25px;
                    color: #9699AA;
                }
            }
    
            .summary-buttons {
                margin-top: 60px;
                padding-bottom: 40px;
            }
        }
    }
}
</style>