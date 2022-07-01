import mailApp from "../mail/cmps/mail-app.cmp.js";

export default {
    template: `
    <section class="keep-main main">
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