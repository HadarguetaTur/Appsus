import notePreview from "./note-preview.cmp.js";

export default {
    props: ["notes"],
    template: `
   <section class="note-list">
        <div class="note-card">
              <div v-for="note in notes" :key="note.id" class="notes-preview-container">
              <button @click="remove(note.id)">X</button>
                  <note-preview :note="note"/>
              </div>
        </div>
      </section>     
  `,
    components: {
        notePreview ,
    },
    created() {
      console.log(this.notes)
      },
  
    data() {
      return {};
    },
    methods: {
        remove(id) {
            this.$emit('remove', id);
        },
        select(note) {
            this.$emit('selected', note);
        }
 
    },
    computed: {},
  };
  