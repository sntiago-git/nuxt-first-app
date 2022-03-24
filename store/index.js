export const state = () => ({
    darkmode: false
})

export const mutations = {
    setDarkmode(state, isDark) {
        localStorage.setItem("darkmode", isDark)
        this.darkmode = localStorage.getItem("darkmode") 
    },
}

export const getters = {
    getDarkmode(state) {
        return state.darkmode
    },
}
