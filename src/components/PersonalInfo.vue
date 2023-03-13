<template>
    <div class="personal-info">
        <div class="header-block">
            <h4 class="headline">{{ labels.personal_info }}</h4>
            <span class="notification">{{ labels.provide_your_name }}</span>
        </div>
        <div class="content-block">
            <div class="name-input">
                <FormulateInput
                    type="text"
                    :label="labels.name"
                    placeholder="e.g. Stephen King"
                    v-model="userValues.userName"
                />
            </div>
            <div class="email-input">
                <FormulateInput
                    type="email"
                    :label="labels.email"
                    name="email"
                    validation="required|email"
                    placeholder="e.g. stephenking@lorem.com"
                    v-model="userValues.userEmail"
                />
            </div>
            <div class="phone-input">
                <FormulateInput
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
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'PersonalInfo',
  data() {
        return {
            labels: {
                personal_info: 'Personal info',
                provide_your_name: 'Please provide your name, email address, and phone number.',
                name: 'name',
                email: 'Email Address',
                phone: 'Phone Number',
                next_step: 'Next Step'
            },
            userValues: { ...this.$store.state.form.userData }
        }
    },

    methods: {
        ...mapMutations('form', ['userDataFiling']),

        setUserData() {
            this.userDataFiling(this.userValues)
        }
    }
}
</script>

<style lang="scss">
.personal-info {
    text-align: left;
    padding-left: 80px;
    padding-top: 40px;

    .header-block {
        padding-bottom: 35px;
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
                padding-bottom: 8px;
            }

            input {
                background: #FFFFFF;
                border: 1px solid #D6D9E6;
                border-radius: 8px;
                padding: 15px 300px 15px 16px;
                font-family: 'Ubuntu-Medium';
                font-size: 16px;
                line-height: 18px;
                color: #022959;
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
</style>