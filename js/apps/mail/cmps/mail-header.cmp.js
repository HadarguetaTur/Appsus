export default {
    template: `
    <section>
        <div class="side-bar-layout mail-logo-layout ">
        <span class="mail-logo"><i class="fa-brands fa-mailchimp fa-fw" aria-hidden="true"></i>&nbsp;NHM</span>
        </div>
        <div class="main-header-layout search-layout flex column"> 
                <input type="search" @input="searchValue" v-model="this.searchVal" placeholder="search mail" class="mail-search" >
                <div class="settings-header">
                    <button class="about-btn" @click="aboutMsg"><i class="fa-solid fa-address-card"></i></button>
                    <button class="settings-btn" @click="settingMsg"><i class="fa-solid fa-gear"></i></button>
                </div>
            </div>
    </section>
`,
    data() {
        return {
            searchVal: "",
        };

    },
    created() {


    },
    methods: {
        searchValue() {
            console.log("emitting", this.searchVal)
            this.$emit("filterSearch", this.searchVal)
        },
        aboutMsg() {
            swal("NHM Mails", "A little bit about us...\n we are two students that master the art of code by creating an amazing new world with our new innovative mail sight that will get you any where you need to go", "css/mail-images/about-img.jpg");
        },
        settingMsg() {
            swal("settings already perfect")
        }
    },
    computed: {},
    unmounted() { },
};