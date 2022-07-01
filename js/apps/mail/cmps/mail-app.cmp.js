import mailList from "../../mail/cmps/mail-list.cmp.js"
import mailCompose from "./mail-compose.cmp.js"
import mailFolderList from "./mail-folder-list.cmp.js";
// import mailDetails from "./mail-details.cmp.js"
import { mailService } from "../services/mail-service.js"
export default {
    template: ` 
    <section class="mail-app-container flex ">
        <div class="side-bar-layout flex column">
            <button class="add-btn" @click="addMail"><i class="fa-solid fa-plus"></i> compose</button>
            <mail-folder-list @change="this.getMailType" :mailType="this.mailType"/>
        </div>
        <main class="main-layout">
           
            <mail-list v-if="this.mails" class="main-list" :mails="renderMails"/>
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
    },

    methods: {
        getMailType() {
            this.mailType = this.$route.params.mailType
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
        mailFilterByType() {
            const filterdMails = this.mails.filter((mail) => {
                (mail.type === this.mailType) ||
                    console.log(mail.type)
            })
            console.log(filterdMails)
            return filterdMails
        }

    },
    computed: {
        renderMails() {
            // if (this.searchVal === "") return this.mails
            console.log(this.mails)
            const filterdMails = this.mails.filter((mail) => {
                console.log(this.mailType)
                return (mail.type === this.mailType)
            })
            console.log(filterdMails)
            return filterdMails
        },

    },
    unmounted() { },
    components: {
        mailList,
        // mailDetails: mailDetails
        mailCompose,
        mailFolderList
    },
    destroyed() { }

};


