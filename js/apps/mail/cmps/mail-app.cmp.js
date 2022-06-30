import mailList from "../../mail/cmps/mail-list.cmp.js"
import mailCompose from "./mail-compose.cmp.js"
import mailFolderList from "./mail-folder-list.cmp.js";
// import mailDetails from "./mail-details.cmp.js"
import { mailService } from "../services/mail-service.js"
export default {
    template: ` 
    <section class="mail-app-container flex ">
        <div class="side-bar-layout flex column">
            <div class="logo-container">
                <span class="mail-logo">logo</span>
                <span class="">Nmail</span>
            </div>
            <button @click="addMail">+</button>
            <mail-folder-list/>
        </div>
    <main class="main-layout">
            <div class="main-header-layout flex coloumn "> 
                <input type="search" v-model="this.searchVal" placeholder="search mail">
                <div class="settings-header">
                    <button>about</button>
                    <button>settings</button>
                </div>
            </div>
            <mail-list class="main-list" :mails="renderMails"/>
            <mail-compose v-if="this.newMail"  @closeMail="closeMail" :newMail="this.newMail" :mails="this.mails"/>
        </main>
       
    </section>
   `,
    data() {
        return {
            mails: null,
            selectedMail: null,
            newMail: false,
            searchVal: ""
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
        },
        closeMail() {
            this.newMail = false;
        }

    },
    computed: {
        renderMails() {
            console.log(this.searchVal)
            if (this.searchVal === "") return this.mails
            const filterdMails = this.mails.filter((mail) =>
                mail.subject.includes(this.searchVal)
            )
            console.log(filterdMails)
            return filterdMails
        }
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


