import mailPreview from "../../mail/cmps/mail-preview.cmp.js"

export default {

    props: ['mails'],
    template: `
      <section>
            <ul class="clean-list mail-list">
                <li v-for="mail in mails" :key="mail.id" class="mail-list-item" :class="mail.isRead" >
                    <router-link :to="'/mail/' + mail.type + '/' + mail.id"> <mail-preview :mail="mail" :mails="mails" /> </router-link>
                </li>
            </ul>
        </section>
`,
    data() {
        return {
        };
    },
    created() { console.log(this.mails) },
    methods: {
        remove(id) {
            this.$emit('remove', id);
        },
        select(mail) {
            this.$emit('selected', mail);
        },
    },
    computed: {},
    components: {
        mailPreview
    },
    unmounted() { },
};

