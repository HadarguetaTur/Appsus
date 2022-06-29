import { mailService } from '../services/mail-service.js';

export default {
    template: `
  <section v-if="email" class="email-details">
    <pre>{{email}}</pre>
    <router-link to="/mail">
        <button>Back to mails</button>
    </router-link>
  </section>
`,
    data() {
        return {
            mail: null,
        };
    },
    created() {
        const mailId = this.$route.params.mailId;
        mailService.get(mailId).then(mail => {
            this.mail = mail;
            this.mail.isRead = true;
        });
    },
    methods: {
        removeEmail() {
            mailService.remove()
        },
    },
    computed: {},
    unmounted() { },
};
