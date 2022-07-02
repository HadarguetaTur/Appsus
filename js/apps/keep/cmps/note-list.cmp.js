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
            <i @click="note.isPinned=!note.isPinned" title="Pin note" class='fas fa-thumbtack'></i>
            <i @click="dupp(note)" title="Copy note" class='fas fa-copy'></i>
            <i @click="remove(note.id)"  title="Delete note" class='far fa-trash-alt'></i>
            <span class="color-picker-dot" @click="emitChangeColor('lightblue')"  
            title="lightblue" style="background-color:lightblue" >
            </span>
            <span class="color-picker-dot" @click="emitChangeColor('palegoldenrod')" 
             title="palegoldenrod" style="background-color:palegoldenrod">
            </span>
            <span class="color-picker-dot" @click="emitChangeColor('lightgreen')"
            title="lightgreen" style="background-color:lightgreen">
            </span>
            <span class="color-picker-dot" @click="emitChangeColor('lightpink')" 
           title="lightpink" style="background-color:lightpink">
           </span>
           <span class="color-picker-dot" @click="emitChangeColor('lightcyan')" 
           title="lightcyan" style="background-color:lightcyan">
            </span>
            <span class="color-picker-dot" @click="emitChangeColor('white')" 
           title="white" style="background-color:white">
          </span>
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
    }

  },
  computed: {
    styleObject() {
      return {
        backgroundColor: 'red'
      }
    },
  }
}