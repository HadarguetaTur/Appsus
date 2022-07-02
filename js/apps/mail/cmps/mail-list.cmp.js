import mailPreview from "../../mail/cmps/mail-preview.cmp.js"
import { mailService } from "../services/mail-service.js";
export default {

    props: ['mails'],
    template: `
      <section class="mail-preview flex">
            <ul class="clean-list mail-list-container">
                <li v-for="mail in mails" :key="mail.id" class="mail-list-item" >
                    <mail-preview  v-if="!mail.extended" @click="mailExt(mail)" @readed="readed"   @stared="onToggleStar" @read="onToggleRead" :mail="mail" />
                    <router-link v-else :to="'/mail/' + mail.type + '/' + mail.id"> <mail-preview @readed="readed"   @stared="onToggleStar" @read="onToggleRead" :mail="mail" />
                        <div v-if="mail.extended" class="list-item-extension">
                            <p class="list-subject-extension">{{mail.subject}}</p>
                            <p>{{mail.body}}</p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </section>
`,
    data() {
        return {
        };
    },
    created() {

    },
    methods: {
        setRead(mail) {
            this.$emit('setRead', mail.id)
        },
        readed(mail) {
            this.$emit('readed', mail)
        },
        onToggleStar(mail) {
            console.log("id of mail to star", mail.id)
            mailService.toggleStar(mail)
            mailService.update(mail)

        },
        onToggleRead(mail) {
            console.log("id of mail to read", mail.id)
            mailService.toggleRead(mail)
            mailService.update(mail)
        },
        mailExt(mail) {
            console.log("mail clicked", mail)
            this.mails.forEach(mail => {
                mail.extended = false
            });
            mail.extended = true
        }
    },
    computed: {},
    components: {
        mailPreview
    },
    unmounted() { },
}

