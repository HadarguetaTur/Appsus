import mailApp from "../mail/cmps/mail-app.cmp.js";

export default {
    template: `
    <section class="keep-main main">
        <h3>mail</h3>
        <mail-app />
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
        mailApp,
    }
};