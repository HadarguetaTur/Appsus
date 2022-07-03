export default {
    template: `
    <div @click="refresh" class="flex column">
        <router-link :to="'/mail/inbox'"><button class="list-group-item"><i class="fa fa-inbox fa-fw" aria-hidden="true"></i>&nbsp;inbox</button></router-link>
        <router-link :to="'/mail/stared'"><button class="list-group-item"><i class="fa fa-star fa-fw" aria-hidden="true"></i>&nbsp;stared</button></router-link>
        <router-link :to="'/mail/sent'"><button class="list-group-item"><i class="fa-regular fa-paper-plane fa-fw" aria-hidden="true"></i>&nbsp;sent</button></router-link>
        <router-link :to="'/mail/draft'"><button class="list-group-item"><i class="fa fa-file-circle-question fa-fw" aria-hidden="true"></i>&nbsp;drafts</button></router-link>
        <router-link :to="'/mail/trash'"><button class="list-group-item"><i class="fa fa-trash-can fa-fw" aria-hidden="true"></i>&nbsp;trash</button></router-link>
        
    </div>
`,
    data() {
        return {};
    },
    created() { },
    methods: {
        refresh() {
            document.location.reload()
        }
    },
    computed: {},
    unmounted() { },
};