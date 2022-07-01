import { mailService } from "../services/mail-service.js"
import { eventBus } from "../services/event-bus.service.js";
export default {
    template: `
    <section class="mail-compose flex">
        <h3 class="composed-msg-header" >New message</h3>
        <input v-model="mail.to" type="text" placeholder="send to">
        <input v-model="mail.subject" type="text" placeholder="subject">
        <nav>
            <button @click="exit" class="composed-msg-exit">trash</button>
            <button class="composed-msg-enLarge" @showMsg="success">large</button>
            <button class="composed-msg-save" @click="saveMail" >send</button>
        </nav>
        <!-- <form enctype="multipart/form-data" novalidate>
        <h1>Upload images</h1>
        <div class="dropbox">
          <input type="file" multiple :name="uploadFieldName"  :value="this.mailLink"
            accept="image/*" class="input-file">
        </div>
      </form> -->
         <textarea v-model="mail.body" class="composed-text" rows="15" cols="30" ></textarea>
      
       
    </section>
`,
    props: ['newMail', 'mails'],
    data() {
        return {
            mail: null,
            mailLink: null
        };
    },
    created() {
        this.mail = mailService.createEmail("", "", "", Date.now(), "")
        console.log(this.mails)
        setInterval(() => {
            this.mail.isDraft = true
            mailService.save(this.mail)
            console.log("saved in drafts");
        }, 2500);
    },
    methods: {
        saveMail() {
            this.checkType()
            console.log(this.mail)
            mailService.save(this.mail).then(mail => {
                this.mails.push(mail)
                this.$emit('closeMail', this.newMail)
                eventBus.emit('showMsg', { txt: 'Saved/Update successfully', type: 'success' });
            })
        },
        remove(id) {
            this.$emit('remove', id);
        },
        exit() {
            this.mail.type = 'draft'
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
