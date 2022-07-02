import bookApp from "../books/cmps/book-app.cmp.js";

export default {
    template: `
    <section class="main">
        <h3>book</h3>
        <book-app/>

    </section>
   `,
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
    components: {
        bookApp

    }
};