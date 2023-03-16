<template>
    <div class="personal-info">
        <div class="header-block">
            <h4 class="headline">{{ labels.personal_info }}</h4>
            <span class="notification">{{ labels.provide_your_name }}</span>
        </div>
        <div class="content-block">
            <div class="name-input">
                <FormKit 
                    type="text"
                    :label="labels.name"
                    placeholder="e.g. Stephen King"
                    v-model="userValues.userName"
                />
            </div>
            <div class="email-input">
                <FormKit 
                    type="email"
                    :label="labels.email"
                    name="email"
                    validation="required|email"
                    placeholder="e.g. stephenking@lorem.com"
                    v-model="userValues.userEmail"
                />
            </div>
            <div class="phone-input">
                <FormKit 
                    name="phone"
                    :label="labels.phone"
                    validation="required|number"
                    placeholder="e.g. +1 234 567 890"
                    v-model="userValues.userPhone"
                />
            </div>
            <div class="button-input">
                <router-link to="select-plan"> 
                    <button @click="setUserData">
                        <span>{{ labels.next_step }}</span>
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
    name: 'PersonalInfo',
    
    setup() {
        
        const store = useStore()

        const labels = {
            personal_info: 'Personal info',
            provide_your_name: 'Please provide your name, email address, and phone number.',
            name: 'name',
            email: 'Email Address',
            phone: 'Phone Number',
            next_step: 'Next Step'
        }

        const userValues = computed(() => {
            return store.state.userData
        }) 

        function setUserData() {
            store.commit('userDataFiling', userValues)
        }

        return {
            labels,
            userValues,
            setUserData
        }
    },
}
</script>

<style lang="scss">
.personal-info {
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

    .content-block {
        .name-input,
        .email-input,
        .phone-input {
            padding-bottom: 24px;
            label {
                font-family: 'Ubuntu-Regular';
                font-size: 14px;
                line-height: 16px;
                color: #022959;
            }

            input {
                background: #FFFFFF;
                border: 1px solid #D6D9E6;
                border-radius: 8px;
                padding: 15px 0px 15px 16px;
                font-family: 'Ubuntu-Medium';
                font-size: 16px;
                line-height: 18px;
                color: #022959;
                margin-top: 8px;
                width: 100%;
                box-sizing: border-box;
            }
        }

        .email-input,
        .phone-input {
            .formulate-input-errors {
                padding-left: 0px;
                .formulate-input-error {
                    list-style: none;
                    padding-left: 0;
                    font-family: 'Ubuntu-Medium';
                    font-size: 14px;
                    line-height: 16px;
                    color: #EE374A;
                    padding-top: 10px;
                }
            }
        }

        .button-input {
            text-align: right;
            button {
                background: #164A8A;
                border-radius: 8px;
                border: none;
                width: 123px;
                height: 48px;
                span {
                    font-family: 'Ubuntu-Regular';
                    font-size: 16px;
                    line-height: 18px;
                    color: #FFFFFF;
                }
            }
        }
    }
}
@media (max-width: 992px) {
    .personal-info {
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

        .content-block {
            .phone-input {
                padding-bottom: 0px;
            }

            .button-input {
                margin-top: 60px;
                padding-bottom: 40px;
            }
        }
    }
}
</style>