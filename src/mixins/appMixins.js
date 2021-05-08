const appMixins = {
    data: () => ({
        loggedIn: false
    }),
    computed: {
        loginStatus() {
            return this.loggedIn
        }
    },

    mounted() {
        const loginStatus = localStorage.getItem('isLoggedIn') || false
        if (loginStatus) {
            this.loggedIn = true
        }
    },
};
export default appMixins;