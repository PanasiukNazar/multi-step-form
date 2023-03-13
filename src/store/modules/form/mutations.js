export default {
    userDataFiling(state, data) {
        sessionStorage.setItem('userData', JSON.stringify(data))
        state.userData = data
    }
}