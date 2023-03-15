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
                item.payment = item.payment * 10
            } else {
                item.payment = item.payment / 10
            }
        }) 
    }
}