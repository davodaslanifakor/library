export default {
    namespaced: true,
    state: {
        message: null,
        showSuccessMsg: {
            title: '',
            message: ''
        },
        showInfoMsg: {
            title: '',
            message: ''
        },
        showWarnMsg: {
            title: '',
            message: ''
        },
        showErrorMsg: {
            title: '',
            message: ''
        }
    },
    mutations: {
        success(state, value) {
            state.showSuccessMsg = {
                title: value.title,
                message: value.message
            }
        },
        error(state, value) {
            state.showErrorMsg = {
                title: value.title,
                message: value.message
            }
        },
        info(state, value) {
            state.showInfoMsg = {
                title: value.title,
                message: value.message
            }
        },
        warn(state, value) {
            state.showInfoMsg = {
                title: value.title,
                message: value.message
            }
        }
    },
    actions: {
    }
}
