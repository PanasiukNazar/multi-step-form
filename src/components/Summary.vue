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
                            Arcade (Monthly)
                        </p>
                        <div class="subscription-changer">
                            <button class="chage-button">
                                {{ labels.change }}
                            </button>
                        </div>
                    </div>
                    <div class="subscription-payment">
                        <p class="payment-title">$9/mo</p>
                    </div>
                </div>
    
                <div class="additional-items">
                    <div class="item">
                        <p class="item-type">Online Service</p>
                        <p class="item-payment">+$1/mo</p>
                    </div>
                </div>
    
                <div class="total-fee">
                    <p class="total-label">{{ labels.total }} (per month)</p>
                    <p class="total-payment">+$12/mo</p>
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
import { mapState } from 'vuex';
export default {
    name: "Greeting",
    data() {
        return {
            labels: {
                finishing_up: "Finishing up",
                double_check_before_confirming: "Double-check everything looks OK before confirming.",
                go_back: "Go Back",
                confirm: "Confirm",
                total: "Total",
                change: "Change",
                mo: "mo",
                yr: "yr"
            },
        };
    },
    computed: {
        ...mapState("form", ["addOnsData"]),
        dataArray() {
            let data = [];
            return data = this.addOnsData;
        }
    },
}
</script>

<style lang="scss">
.summary-block {
    padding-left: 80px;
    .summary {
        padding-top: 40px;
        text-align: left;
    
        .summary-header {
            margin-bottom: 35px;
            .headline {
                font-family: 'Ubuntu-Bold';
                font-size: 32px;
                line-height: 37px;
                color: #022959;
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
                margin-bottom: 24px;
                .item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
    
                    .item-type {
                        font-family: 'Ubuntu-Regular';
                        font-size: 14px;
                        line-height: 20px;
                        color: #9699AA;
                    }
    
                    .item-payment {
                        font-family: 'Ubuntu-Regular';
                        font-size: 14px;
                        line-height: 20px;
                        color: #022959;
                    }
                }
            }
    
            .total-fee {
                display: flex;
                justify-content: space-between;
                align-items: center;
    
                .total-label {
                    font-family: 'Ubuntu-Regular';
                    font-size: 14px;
                    line-height: 20px;
                    color: #9699AA;
                }
    
                .total-payment {
                    font-family: 'Ubuntu-Bold';
                    font-size: 20px;
                    line-height: 20px;
                    color: #483EFF;
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
</style>