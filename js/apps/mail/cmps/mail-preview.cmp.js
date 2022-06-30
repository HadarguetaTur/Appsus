export default {
    props: ['mail'],
    template: `
     <section v-if="mail" class="mail-preview flex">
        <div class="mail-preview-checks-container">
            <input type="checkbox" id="read" />
            <input type="checkbox" class="fa fa-star" value="1"/>
        </div>
        <span class="mail-subject-preview">{{mail.subject}}</span>
        <span class="mail-star-preview">{{mail.subject}}</span>
        <span class="mail-sent-preview">{{mail.sentAt}}</span>
        
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