<template>
    <div class="add-ons">
        <div class="add-ons-header">
            <h4 class="headline">{{ labels.pick_add_ons }}</h4>
            <span class="notification">{{ labels.add_ons_help }}</span>
        </div>

        <div class="add-ons-content">
            <div class="content-item" :class="item.isSelected ? 'selected' : ''" v-for="(item, idx) in addOnsData" :key="idx">
                <div class="left-side-content">
                    <div class="checkbox-item">
                        <input type="checkbox" :checked="item.isSelected" @click="toggleAdditionalItmes(idx)">
                    </div>
                    <div class="description">
                        <p class="title">{{ item.title }}</p>
                        <p class="notification">{{ item.text }}</p>
                    </div>
                </div>
                <div class="right-side-content">
                    <div class="payment">
                        <p>+{{ labels.usd }}{{ item.price }}/{{ planTime }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="add-ons-buttons">
            <div class="previous">
                <router-link to="select-plan"> 
                    <button>
                        <span>
                            {{ labels.go_back }}    
                        </span>
                    </button>
                </router-link>
            </div>

            <div class="next">
                <router-link to="summary">
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
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    name: 'Addons',
    setup() {
        const store = useStore()

        const labels = {
            pick_add_ons: 'Pick add-ons',
            add_ons_help: 'Add-ons help enhance your gaming experience.',
            go_back: 'Go Back',
            next_step: 'Next Step',
            mo: 'mo',
            yr: 'yr',
            usd: '$'
        }

        function toggleAdditionalItmes(idx) {
            store.commit('toggleAdditionalItmes', idx)
        }

        const monthlySubscription = computed(() => store.state.monthlySubscription)

        const planTime = computed(() => {
            return monthlySubscription.value ? labels.mo : labels.yr 
        })

        return {
            labels,
            addOnsData: computed(() => store.state.addOnsData),
            monthlySubscription: computed(() => store.state.monthlySubscription),
            toggleAdditionalItmes,
            planTime
        }
    }
}
</script>

<style lang="scss">
.add-ons {
    width: 100%;

    .add-ons-header {
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

    .add-ons-content {
        .content-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #FFFFFF;
            border: 1px solid #D6D9E6;
            border-radius: 8px;
            cursor: pointer;

            &:hover {
                border: 1px solid #483EFF;
            }

            .left-side-content {
                display: flex;
                align-items: center;

                .checkbox-item {
                    padding: 24px 30px;
                    input {
                        width: 20px;
                        height: 20px;
                        border-radius: 4px;
    
                        &:checked {
                            accent-color: #483EFF
                        }
                    }
                }
    
                .description {
                    text-align: left;

                    .title,
                    .notification {
                        margin-bottom: 0px;
                        margin-top: 0px;
                    }

                    .title {
                        font-family: 'Ubuntu-Medium';
                        font-size: 16px;
                        line-height: 18px;
                        color: #022959;
                        padding-top: 18px;
                        margin-bottom: 7px;
                    }

                    .notification {
                        font-family: 'Ubuntu-Regular';
                        font-size: 14px;
                        line-height: 20px;
                        color: #9699AA;
                        padding-bottom: 18px;
                    }
                }
            }

            .right-side-content {
                .payment {
                    padding-right: 24px;
                    
                    p {
                        margin-top: 0px;
                        margin-bottom: 0px;
                        font-family: 'Ubuntu-Regular';
                        font-size: 14px;
                        line-height: 20px;
                        color: #483EFF;
                    }
                }
            }
        }
        .content-item:not(:last-child) {
            margin-bottom: 16px;
        }
    }

    .add-ons-buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 71px;
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

    .selected {
        border: 1px solid #483EFF !important;
    }
}
@media (max-width: 992px) {
    .add-ons {
        padding: 0px 24px;

        .add-ons-header {
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

        .add-ons-content {
            .content-item {
                .left-side-content {
                    .checkbox-item {
                        padding: 21px 16px;
                        input {
                            width: 20px;
                            height: 20px;
                            border-radius: 4px;
        
                            &:checked {
                                accent-color: #483EFF
                            }
                        }
                    }
                }
            }
        }

        .add-ons-buttons {
            margin-top: 60px;
            padding-bottom: 40px;
        }
    }
}
</style>