<template>
    <div class="sidebar">
        <div class="steps-block">
            <div class="step">
                <div class="number">
                    <span :class="$route.name === 'personal-info' ? 'selected' : ''">
                        1
                    </span>
                </div>
                <div class="description">
                    <p class="text-step">{{ labels.step_1 }}</p>
                    <p class="step-description">{{ labels.your_info }}</p>
                </div>
            </div>

            <div class="step">
                <div class="number">
                    <span :class="$route.name === 'select-plan' ? 'selected' : ''">
                        2
                    </span>
                </div>
                <div class="description">
                    <p class="text-step">{{ labels.step_2 }}</p>
                    <p class="step-description">{{ labels.select_plan }}</p>
                </div>
            </div>

            <div class="step">
                <div class="number">
                    <span :class="$route.name === 'pick-add-ons' ? 'selected' : ''">
                        3
                    </span>
                </div>
                <div class="description">
                    <p class="text-step">{{ labels.step_3 }}</p>
                    <p class="step-description">{{ labels.add_ons }}</p>
                </div>
            </div>

            <div class="step">
                <div class="number">
                    <span :class="$route.name === 'summary' || $route.name === 'gratitude' ? 'selected' : ''">
                        4
                    </span>
                </div>
                <div class="description">
                    <p class="text-step">{{ labels.step_4 }}</p>
                    <p class="step-description">{{ labels.summary }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    data () {
        return {
            labels: {
                step_1: 'Step 1',
                step_2: 'Step 2',
                step_3: 'Step 3',
                step_4: 'Step 4',
                your_info: 'Your Info',
                select_plan: 'Select Plan',
                add_ons: 'Add-Ons',
                summary: 'Summary'
            }
        }
    }
}
</script>

<style lang="scss">
.steps-block {
    background: #483EFF;
    border-radius: 10px;
    padding-top: 40px;
    padding-bottom: 300px;
    padding-left: 42px;

    .step {
        display: flex;
        align-items: center;
        margin-bottom: 31px;

        .selected {
            color: #022959 !important;
            background: #BEE2FD !important;
        }

        .number {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            span {
                font-family: 'Ubuntu-Bold';
                font-weight: 700;
                font-size: 14px;
                line-height: 16px;
                color: #FFFFFF;
                padding: 5px 9.5px;
                border-radius: 50%;
                border: 1px solid #FFFFFF;
            }
        }

        .description {
            text-align: left;
            margin-left: 16px;
            .text-step {
                font-family: "Ubuntu-Regular";
                font-style: normal;
                font-size: 12px;
                line-height: 14px;
                color: #ABBCFF;
                text-transform: uppercase;
                margin-bottom: 4px;
            }

            .step-description {
                font-family: 'Ubuntu-Bold';
                font-size: 14px;
                line-height: 16px;
                letter-spacing: 1px;
                text-transform: uppercase;
                color: #FFFFFF;
                margin-bottom: 0;
            }
        }
    }
}
</style>