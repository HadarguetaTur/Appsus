export default {
    template: `
        <section class="app-home">
        <h1 class="home-title">MAIN MENU</h1>
        <div class="image-container flex">       
            <router-link to="/mail/:mailType"><img src="images/mails.jpg" alt=""></router-link>
            <router-link to="/Keep"><img src="images/notes.png" alt=""></router-link>
            <router-link to="/books"><img src="images/book-store.jpg" alt=""></router-link>
        </div>
        </section>

                
    `,
    data() {
        return {

        }
    },
    created() {

    },
    methods: {

    },
    computed: {

    },
    components: {

    },
}
