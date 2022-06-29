import mailPreview from "../../mail/cmps/mail-preview.cmp.js"

export default {

    // props: ['mails'],
    template: `
      <section class="mail-list">
         <button>wowowowowo</button>
            <!-- <ul>
                <li v-for="mail in mails" :key="mail.id" class="mail-preview" >
                    <router-link :to="'/mail/' + mail.id">
                   <mail-preview :mail="mail" />
                   <div class="actions">
                       <button @click="remove(mail.id)">X</button>
                    </div>
                </li>
            </ul> -->
        </section>
`,
    data() {
        return {
        };
    },
    created() { console.log("mails") },
    methods: {
        remove(id) {
            this.$emit('remove', id);
        },
        select(mail) {
            this.$emit('selected', mail);
        },
    },
    computed: {},
    componenets: {
        mailPreview
    },
    unmounted() { },
};

