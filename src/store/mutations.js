export default {
    userDataFiling(state, data) {
        state.userData = data
    },

    toggleSelectedPlan(state, index) {
        state.planType.forEach((item, idx) => {
            item.isSelected = idx === index;
        })
    },

    toggleSubscriptionTime(state) {
        state.monthlySubscription = !state.monthlySubscription

        state.planType.map((item) => {
            if(!state.monthlySubscription) {
                item.price = item.price * 10
            } else {
                item.price = item.price / 10
            }
        })
        
        state.addOnsData.map((item) => {
            if(!state.monthlySubscription) {
                item.price = item.price * 10
            } else {
                item.price = item.price / 10
            }
        })

        if(!state.monthlySubscription) {
            state.totalPrice = state.totalPrice * 10
        } else {
            state.totalPrice = state.totalPrice / 10
        }
    },

    toggleAdditionalItmes(state, index) {
        state.addOnsData.forEach((item, idx) => {
            if(idx === index) {
                item.isSelected = !item.isSelected
            }
        })
    },
    
    setSummaryData(state) {
        let plan = {
            type: '',
            price: null,
            additionalItems: []
        }
        state.planType.map(item => {
            if(item.isSelected) {
                plan.type = item.type
                plan.price = item.price
            }
        })

        state.addOnsData.map(item => {
            if(item.isSelected) {
                plan.additionalItems.push({
                    serviceType: item.title,
                    price: item.price
                })
            }
        })

        state.summaryData = plan
    },

    calculateTotatPrice(state) {
        let planPrice = state.summaryData.price

        let additionalItemsPrice = state.summaryData.additionalItems.reduce((acc, item) => {
            return acc + item.price
        }, 0)

        state.totalPrice = planPrice + additionalItemsPrice
    }
}