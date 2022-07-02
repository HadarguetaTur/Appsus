import { mailService } from "../services/mail-service.js"
import { eventBus } from "../services/event-bus.service.js";
export default {
    template: `
    <section class="mail-compose flex"  @showMsg="created">
        <h3 class="composed-msg-header" >New message</h3>
        <input v-model="mail.to" type="text" placeholder="send to nimrod@appsus.com for inbox">
        <input v-model="mail.subject" type="text" placeholder="subject">
       
        <!-- <form enctype="multipart/form-data" novalidate>
        <h1>Upload images</h1>
        <div class="dropbox">
          <input type="file" multiple :name="uploadFieldName"  :value="this.mailLink"
            accept="image/*" class="input-file">
        </div>
      </form> -->
         <textarea v-model="mail.body" class="composed-text" rows="15" cols="30" ></textarea>
         <nav>
            <button @click="exit" class="composed-msg-exit">back</button>
            <button class="composed-msg-enLarge">large</button>
            <button class="composed-msg-save" @click="saveMail" >send</button>
        </nav>
      
       
    </section>
`,
    props: ['newMail', 'mails'],
    data() {
        return {
            mail: null,
            mailLink: null,
            interval: 0
        };
    },
    created() {
        this.mail = mailService.createEmail("", "", "", "")
        console.log(this.mails)
        this.interval = setInterval(() => {
            mailService.save(this.mail)
            eventBus.emit('showMsg', { txt: 'Saved to Draft' });
        }, 5000);
    },
    methods: {
        saveMail() {
            this.checkType()
            console.log(this.mail)
            mailService.save(this.mail).then(mail => {
                mail.type = 'draft'
                this.mails.push(mail)
                this.$emit('closeMail', this.newMail)
            })
        },
        remove(id) {
            this.$emit('remove', id);
        },
        exit() {
            this.mail.type = 'draft'
            this.mail.isDraft = true
            clearInterval(this.interval)
            this.mails.push(this.mail)
            mailService.save(this.mail)
            this.$emit('closeMail', this.newMail)
        },
        checkType() {
            if (mailService.getUser().email === this.mail) this.mail.type = 'inbox'
            else this.mail.type = 'sent'
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
