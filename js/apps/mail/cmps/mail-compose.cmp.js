import { mailService } from "../services/mail-service.js"
import { eventBus } from "../services/event-bus.service.js";
export default {
    template: `
    <section class="mail-compose flex">
        <h3 class="composed-msg-header" >New message</h3>
        <input v-model="mail.to" type="text" placeholder="send to">
        <input v-model="mail.subject" type="text" placeholder="subject">
         <textarea v-model="mail.body" class="composed-text" rows="15" cols="30"></textarea>
         <nav>
            <button @click="remove(this.mail.id)" class="composed-msg-exit">trash</button>
            <button class="composed-msg-enLarge" @showMsg="success">large</button>
            <button class="composed-msg-minimize" @click="saveMail" >save</button>
        </nav>
    </section>
`,
    props: ['newMail', 'mails'],
    data() {
        return {
            mail: null,
        };
    },
    created() {
        this.mail = mailService.createEmail("", "", Date.now(), "")
        console.log(this.mails)
    },
    methods: {
        saveMail() {
            console.log(this.mail)
            mailService.save(this.mail).then(mail => {
                this.mails.push(mail)
                this.$emit('closeMail', this.newMail)
                console.log(eventBus.emit('showMsg', this.mail.Subject))
                eventBus.emit('showMsg', { txt: 'Saved/Update successfully', type: 'success' });
            })
        },
        remove(id) {
            this.$emit('remove', id);
        },

        checkMail() {
            console.log(this.mail)
            console.log(this.mailTo)
            console.log(this.mailSubject)
            console.log(this.mailBody)
            console.log(this.mail)
        },
    },

    computed: {},
    unmounted() { },
}
