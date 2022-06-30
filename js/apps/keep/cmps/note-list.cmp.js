import notePreview from "./note-preview.cmp.js";


export default {
    props: ["notes"],
    template: `
   <section  class="note-list">
        <div  class="note-card">
              <div v-for="note in notes" :key="note.id" class="notes-preview-container" this.backgroundColor="note.style.backgroundColor">
              <button @click="remove(note.id)">X</button>
                  <note-preview :note="note"/>
              </div>
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
      return {
        backgroundColor:' '

      };
    },
    methods: {
        remove(id) {
            this.$emit('remove', id);
        },
        select(note) {
          console.log(note)
            this.$emit('selected', note);
        }
 
    },
    computed: {
      styleObject() {
        return {
          backgroundColor: this.backgroundColor
        }
    },
  }
}