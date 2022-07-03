import { notesService } from "../services/note.service.js";
import notePreview from "./note-preview.cmp.js";


export default {
  props: ["notes"],
  template: `
   <section  class="note-list">       
        <div  class="note-card">
              <div  v-for="note in notes" :key="note.id"  class="notes-preview-container" v-bind:class="
              {txt:note.type==='note-txt',
              'note-img':note.type==='note-img',
              'note-todos':note.type==='note-todo',
              'note-video':note.type==='note-video',  
              pin:!note.isPinned,  
            }" >
        
            

       
  
            
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
    changeColor(color) {
   
  },


  },
  computed: {
 

  }
}