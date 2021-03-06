export default {
    template: `
   <section class="email-filter">
      <input type="search" placeholder="Search mail">
      <select >
          <option v-for="opt in options" :value="opt">{{formatOptions(opt)}}</option>
      </select>
   </section>
  `,
    data() {
        return {
            txt: '',
            options: ['all', 'read', 'unread', 'draft', 'sent'],
        };
    },
    created() { },
    methods: {},
    computed: {
        formatOptions(opt) {
            opt.replace(opt[0], opt[0].toUpperCase())
        }
    },
    unmounted() { },
};
