export default {
    props: ['mail'],
    template: `
     <section v-if="mail" class="mail-preview">
        <span class="mail-from-preview">{{mail.from}}</span>
        <span class="mail-subject-preview">{{mail.subject}}</span>
        <span class="mail-sent-preview">{{mail.sentAt}}</span>
        <input type="checkbox" id="read"
             checked>
        <label for="read">un/read</label>
        </section>
`,
    data() {
        return {};
    },
    created() { console.log("hey") },
    methods: {},
    computed: {},
    unmounted() { },
};