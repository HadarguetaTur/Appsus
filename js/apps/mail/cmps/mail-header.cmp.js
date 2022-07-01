export default {
    template: `
    <section>
        <div class="logo-container">
            <span class="mail-logo">logo</span>
            <span class="">Nmail</span>
        </div>
        <div class="main-header-layout flex coloumn "> 
                <input type="search" v-model="this.searchVal" placeholder="search mail">
                <div class="settings-header">
                    <button @click="checks">about</button>
                    <button>settings</button>
                </div>
            </div>
    </section>
`,
    data() {
        return {
            searchVal: "",

        };

    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
};