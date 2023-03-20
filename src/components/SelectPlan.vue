<template>
    <div class="select-plan">
        <div class="header-block">
            <h4 class="headline">{{ labels.select_your_plan }}</h4>
            <span class="notification">{{ labels.monthly_or_yearly_billing }}</span>
        </div>

        <div class="plan-block">
            <div class="plan-type" v-for="(item, idx) in planType" :class="item.isSelected ? 'selectedPlan' : ''" @click="toggleSelectedPlan(idx)" :key="idx">
                <div class="plan-icon">
                    <img :src="require('@/assets/images/icon-' + item.type + '.svg')" :alt="item.type">
                </div>

                <div class="plan-content">
                    <p class="title">{{ item.title }}</p>
                    <p class="price">{{ labels.usd }}{{ item.price }}/{{ planTime }}</p>
                    <span class="discount" v-if="!monthlySubscription">{{ labels.two_month_free }}</span>
                </div>
            </div>
        </div>

        <div class="subscription-time">
            <span class="month-subscription" :class="monthlySubscription ? 'active' : ''">{{ labels.monthly }}</span>
            <div class="month-year-switcher">
                <p class="month" :class="monthlySubscription ? 'selected' : ''" @click="toggleSubscriptionTime"></p>
                <p class="year" :class="!monthlySubscription ? 'selected' : ''" @click="toggleSubscriptionTime"></p>
            </div>
            <span class="year-subscription" :class="!monthlySubscription ? 'active' : ''">{{ labels.yearly }}</span>
        </div>

        <div class="button-block">
            <div class="previous">
                <router-link to="personal-info"> 
                    <button>
                        <span>
                            {{ labels.go_back }}    
                        </span>
                    </button>
                </router-link>
            </div>

            <div class="next">
                <router-link to="pick-add-ons">
                    <button>
                        <span>
                            {{ labels.next_step }} 
                        </span>
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'SelectPlan',

  setup() {

    const store = useStore()

    const labels = {
        select_your_plan: 'Select your plan',
        monthly_or_yearly_billing: 'You have the option of monthly or yearly billing.',
        monthly: 'Monthly',
        yearly: 'Yearly',
        go_back: 'Go Back',
        next_step: 'Next Step',
        mo: 'mo',
        yr: 'yr',
        two_month_free: '2 month free',
        usd: '$'
    }

    function toggleSubscriptionTime() {
        store.commit('toggleSubscriptionTime')
    }

    function toggleSelectedPlan(idx) {
        store.commit('toggleSelectedPlan', idx)
    }

    const monthlySubscription = computed(() => store.state.monthlySubscription)

    const planType = computed(() => store.state.planType)
    
    const planTime = computed(() => {
        return monthlySubscription.value ? labels.mo : labels.yr 
    })

    return {
        labels,
        planType,
        monthlySubscription,
        toggleSubscriptionTime,
        toggleSelectedPlan,
        planTime,
    }
  }
}
</script>

<style lang="scss">
.select-plan {
    width: 100%;
    .header-block {
        padding-bottom: 35px;
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

    .plan-block {
        display: flex;
        justify-content: space-between;

        .plan-type {
            background: #FFFFFF;
            border: 1px solid #D6D9E6;
            border-radius: 8px;
            cursor: pointer;

            .plan-icon {
                padding: 20px 92px 39px 16px;
            }

            .plan-content {
                padding: 0px 55px 16px 16px;

                .title {
                    font-family: 'Ubuntu-Medium';
                    font-size: 16px;
                    line-height: 18px;
                    color: #022959;
                    margin-bottom: 7px;
                }

                .price {
                    font-family: 'Ubuntu-Regular';
                    font-size: 14px;
                    line-height: 20px;
                    color: #9699AA;
                    margin-bottom: 6px;
                    margin-top: 0px;
                }

                .discount {
                    font-family: 'Ubuntu-Regular';
                    font-size: 12px;
                    line-height: 14px;
                    color: #022959;
                }
            }
        } 

        .plan-type:hover {
            border: 1px solid #483EFF;
        }
        
        .selectedPlan {
            border: 1px solid #483EFF;
        }
    }

    .subscription-time {
        display: flex;
        justify-content: center;
        margin-top: 45px;
        padding: 13px 0px;

        .month-subscription {
            padding-right: 24px;
        }
        .year-subscription {
            padding-left: 24px;
        }

        .month-subscription,
        .year-subscription {
            font-family: 'Ubuntu-Medium';
            font-size: 14px;
            line-height: 16px;
            text-align: right;
            color: #9699AA;
        }

        .month-year-switcher {
            display: flex;
            justify-content: space-around;
            align-items: center;
            background: #022959;
            border-radius: 10px;
            width: 38px;
            height: 20px;
            
            p {
                width: 12px;
                height: 12px;
                margin: 0px;
                border-radius: 50%;
            }

            .year {
                margin-right: 4px;
            }

            .month {
                margin-left: 4px;
            }

            .selected {
                background: #FFFFFF;
            }
        }

        .active {
            color: #022959;
        }
    }

    .button-block {
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

@media (max-width: 992px) {
    .select-plan {
        padding: 0px 24px;

        .header-block {
            padding-bottom: 22px;
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

        .plan-block {
            flex-direction: column;

            .plan-type {
                display: flex;
                justify-content: flex-start;
                margin-bottom: 12px;

                .plan-icon {
                    padding: 20px 16px 20px 14px;
                }

                .plan-content {
                    padding-left: 0px;
                }
            }

            .plan-type:last-child {
                margin-bottom: 24px;
            }
        }

        .subscription-time {
            margin-top: 0px
        }

        .button-block {
            margin-top: 60px;
            padding-bottom: 40px;
        }
    }
}
</style>