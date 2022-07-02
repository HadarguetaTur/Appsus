
export default {
    template: `
    <div class="mail-folder-list flex column">
        <router-link :to="'/mail/inbox'"><button @click="inbox" class="list-group-item"><i class="fa fa-inbox fa-fw" aria-hidden="true"></i>&nbsp;inbox</button></router-link>
        <router-link :to="'/mail/stared'"><button @click="stared" class="list-group-item"><i class="fa fa-star fa-fw yellow" aria-hidden="true"></i>&nbsp;stared</button></router-link>
        <router-link :to="'/mail/sent'"><button @click="sent" class="list-group-item"><i class="fa-regular fa-paper-plane fa-fw" aria-hidden="true"></i>&nbsp;sent</button></router-link>
        <router-link :to="'/mail/draft'"><button @click="draft" class="list-group-item"><i class="fa fa-file-circle-question fa-fw" aria-hidden="true"></i>&nbsp;drafts</button></router-link>
        <router-link :to="'/mail/trash'"><button @click="trash" class="list-group-item"><i class="fa fa-trash-can fa-fw" aria-hidden="true"></i>&nbsp;trash</button></router-link>
    </div>
`,
    data() {
        return {};
    },
    created() { },
    methods: {
        inbox() {
            this.$emit("getMailType", "inbox")
        },
        stared() {
            this.$emit("getMailType", "stared")
        },
        draft() {
            this.$emit("getMailType", "draft")
        },
        sent() {
            this.$emit("getMailType", "sent")
        },
        trash() {
            this.$emit("getMailType", "trash")
        }
    },
    computed: {},
    unmounted() { },
};