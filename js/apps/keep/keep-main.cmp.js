import keepApp from "./pages/keep-app.cmp.js";

export default {
    template: `
    <section class="keep-main main">
    <h3>keep</h3>
    <keep-app />
    </section>
   `,
   components: {
    keepApp,
  },
   data() {
   return {};
   },
   created() {},
   methods: {},
   computed: {},
   unmounted() {},
   };