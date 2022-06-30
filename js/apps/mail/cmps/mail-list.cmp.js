import mailPreview from "../../mail/cmps/mail-preview.cmp.js"

export default {

    props: ['mails'],
    template: `
      <section class="mail-list">
            <ul class="clean-list">
                <li v-for="mail in mails" :key="mail.id" class="mail-list-item" >
                    <router-link :to="'/mail/' + mail.id"> <mail-preview :mail="mail" /> </router-link>
                   
                  
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

