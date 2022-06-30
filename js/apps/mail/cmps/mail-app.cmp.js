import mailList from "../../mail/cmps/mail-list.cmp.js"
import mailCompose from "./mail-compose.cmp.js"
// import mailDetails from "./mail-details.cmp.js"
import { mailService } from "../services/mail-service.js"
export default {
    template: ` 
    <section class="main-list">
        <h2>Hello</h2>
        <button @click="addMail">+</button>
        <mail-list :mails="renderMails"/>
        <mail-compose v-if="this.newMail" :newMail="this.newMail"/>
    </section>
   `,
    data() {
        return {
            mails: null,
            selectedMail: null,
            newMail: false
        };
    },
    created() {
        console.log("here")
        this.mails = mailService.query().then(res => this.mails = res)

    },
    mounted() {
    },
    methods: {
        showEmails(email) {
            this.selectedMail = email
        },
        addMail() {
            this.newMail = true;
        }


    },
    computed: {
        renderMails() {
            console.log(this.mails)
            return this.mails
        }
    },
    unmounted() { },
    components: {
        mailList,
        // mailDetails: mailDetails
        mailCompose
    },
    destroyed() { }

};


