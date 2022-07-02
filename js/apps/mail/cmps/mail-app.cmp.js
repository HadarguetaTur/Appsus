import mailList from "../../mail/cmps/mail-list.cmp.js"
import mailCompose from "./mail-compose.cmp.js"
import mailFolderList from "./mail-folder-list.cmp.js";
import mailHeader from "./mail-header.cmp.js";
import { mailService } from "../services/mail-service.js"
import { eventBus } from "../services/event-bus.service.js";

export default {
    template: ` 
    <section class="mail-app-container flex column">
        
        <mailHeader @filterSearch="filterBySearch" class="mail-header flex" />
        <main class="main-layout flex">
            <div class="side-bar-layout flex column">
                <button class="add-btn" @click="addMail"><img src="css/mail-images/google plus.png" alt=""> compose</button>
                <mail-folder-list @getMailType="getCurrMailType" :mailType="this.mailType"/>
            </div>
                <mail-list class="mail-list flex column" v-if="this.mails" 
                        @removeMail="onRemoveMail" @readed="readMail" @mailStared="onMailStar" 
                            @mailRead="onMailRead" :mails="filterBySearch"/>
                <mail-compose v-if="this.newMail"  @closeMail="closeMail" :newMail="this.newMail" :mails="this.mails"/>
        </main>
       
    </section>
   `,
    props: ['type'],
    data() {
        return {
            mails: null,
            selectedMail: null,
            newMail: false,
            searchVal: "",
            mailType: "",
        };
    },
    created() {
        if (this.$route.params.mailType === ":mailType") this.$route.params.mailType = "inbox";
        this.mailType = this.$route.params.mailType
        mailService.query().then(res => this.mails = res)
        eventBus.on('removeAtPreview', this.onRemoveMail)
    },

    methods: {
        getCurrMailType(mailCurrType) {
            console.log(mailCurrType)
            this.mailType = mailCurrType
        },
        saveMails(mail) {
            mailService.save(mail)
        },
        showEmails(email) {
            this.selectedMail = email
        },
        addMail() {
            this.newMail = true;
        },
        closeMail() {
            this.newMail = false;
        },
        onRemoveMail(mail) {
            if (mail.type === 'trash') {
                mailService.remove(mail.id)
                mail
                console.log("removed this mail", mail);
                window.location.reload();
                return
            }
            mail.type = 'trash'
            mailService.update(mail)
        },
        readMail(id) {
            mailService.readMail(id)
                .then(res => mailService.createEmails()
                    .then(mails => this.mails = mails))
        },
        onMailStar() {
            mailService.save()
        },
        onMailRead() {
            mailService.createEmails().then(mails => this.mails = mails)
        },
        mailFilterByType() {
            if (!this.mails) return
            const filterdMails = this.mails.filter((mail) => {
                return ((mail.type === this.mailType) || (mail.isStared && this.mailType === 'stared') ||
                    (!mail.isRead && mail.type === 'unread'))
            })
            console.log(filterdMails)
            return filterdMails
        }

    },
    computed: {
        renderMails() {
            if (!this.mails) return
            this.mails.forEach(mail => {
                mailService.update(mail)
            });
            return this.mailFilterByType()
        },
        filterBySearch(searchValue) {
            console.log(searchValue)
            const mails = this.mailFilterByType()
            if (!mails) return mails
            if (searchValue) return mails
            var newMails = mails.filter(mail => mail.subject === searchValue)
            return newMails
        }

    },
    unmounted() { },
    components: {
        mailList,
        mailCompose,
        mailFolderList,
        mailHeader
    },
    destroyed() { }

};


