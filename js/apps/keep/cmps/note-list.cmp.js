import { notesService } from "../services/note.service.js";
import notePreview from "./note-preview.cmp.js";


export default {
  props: ["notes"],
  template: `
   <section  class="note-list">       
        <div  class="note-card">
              <div  v-for="note in notes" :key="note.id"  class="notes-preview-container" >
              <note-preview :note="note"/>          
              </div>
        </div>
      </section>     
  `,
  components: {
    notePreview,

  },
  created() {

  },

  data() {
    
    return {
       
    };
  },
  methods: {
    
    remove(id) {
      this.$emit('remove', id);
    },
    dupp(note) {
      this.$emit('copy', note);
    },
    select(note) {
      console.log(note)
      this.$emit('selected', note);
    },



  },
  computed: {
    colorPicker() {
      return {
          'background-color': this.bgColor
      }
  },

  }
}