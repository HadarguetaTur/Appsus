import { mailService } from '../services/mail-service.js';

export default {
    template: `
  <section v-if="this.mail" class="email-details">
    <h1>From: {{mail.from}}</h1>
    <h2>subject: {{mail.subject}}</h2>
    <h4>sent from: {{mail.from}}</h4>
    <p>{{mail.body}}</p>
    <p>my dear regards {{mail.name}}</p>
    <router-link to="/mail/inbox">
        <button @click="removeMail">delete</button>
        <button >Back to mails</button>
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
            mailService.update(this.mail)
        });
    },
    methods: {
        removeMail() {
            if (this.mail.type === 'trash') {
                mailService.remove(this.mail.id)
                return
            }
            this.mail.type = 'trash'
            mailService.save(this.mail)
            console.log(this.mail.type)
        },
    },
    computed: {},
    unmounted() { },
};
