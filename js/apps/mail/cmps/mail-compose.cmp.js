import { mailService } from "../services/mail-service.js"
import { eventBus } from "../services/event-bus.service.js";
export default {
    template: `
    <section class="mail-compose flex">
        <h3 class="composed-msg-header">New message</h3>
        <input v-model="mail.to" type="text" placeholder="send to">
        <input v-model="mail.subject" type="text" placeholder="subject">
         <textarea v-model="mail.body" class="composed-text"rows="15" cols="30"></textarea>
         <nav>
            <button class="composed-msg-exit">trash</button>
            <button class="composed-msg-enLarge" @click="checkMail">large</button>
            <button class="composed-msg-minimize" @click="saveMail" >save</button>
        </nav>
    </section>
`,
    props: ['newMail'],
    data() {
        return {
            mail: null,
        };
    },
    created() {
        this.mail = mailService.createEmail(null, null, Date.now(), null)
    },
    methods: {
        saveMail() {
            console.log(this.mail)
            mailService.save(this.mail)
            eventBus.emit('show-msg',
                { txt: 'Saved/Update successfully', type: 'success' });
        },
        remove(id) {
            this.$emit('remove', id);
        },
    },

    checkMail() {
        console.log(this.mail)
        console.log(this.mailTo)
        console.log(this.mailSubject)
        console.log(this.mailBody)
        console.log(this.mail)
    },
    computed: {},
    unmounted() { },
}
