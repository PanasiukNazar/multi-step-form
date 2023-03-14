export default {
    userDataFiling(state, data) {
        sessionStorage.setItem('userData', JSON.stringify(data))
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
    }
}