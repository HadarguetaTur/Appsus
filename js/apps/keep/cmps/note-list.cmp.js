import { notesService } from "../services/note.service.js";
import notePreview from "./note-preview.cmp.js";


export default {
  props: ["notes"],
  template: `
   <section  class="note-list">       
        <div  class="note-card">
              <div  v-for="note in notes" :key="note.id"  class="notes-preview-container" >
              <note-preview :note="note"/>
            <div class="btn-card flex " >
            <i @click="note.isPinned=!note.isPinned" title="Pin note" class='fas fa-thumbtack'></i>
            <i @click="dupp(note)" title="Copy note" class='fas fa-copy'></i>
            <i @click="remove(note.id)"  title="Delete note" class='far fa-trash-alt'></i>
            <i @click="isColorPicer=!isColorPicer"title="Change color" class="fas fa-palette"></i> 
            
            <div class="colors" :class="isShown" v-if="isColorPicer" >
            <span class="color-picker-dot" @click="changeColor('lightblue')"  
            title="lightblue" style="background-color:lightblue" >
           </span>
            <span class="color-picker-dot" @click="changeColor('palegoldenrod')" 
           title="palegoldenrod" style="background-color:palegoldenrod">
            </span>
          <span class="color-picker-dot" @click="changeColor('lightgreen')"
          title="lightgreen" style="background-color:lightgreen">
        </span>
        <span class="color-picker-dot" @click="changeColor('lightpink')" 
         title="lightpink" style="background-color:lightpink">
        </span>
        <span class="color-picker-dot" @click="changeColor('lightcyan')" 
         title="lightcyan" style="background-color:lightcyan">
        </span>
        <span class="color-picker-dot" @click="changeColor('white')" 
         title="white" style="background-color:white">
        </span>
          

                  
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
        isColorPicer:false
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
    changeColor(color) {
      this.$emit('bgColor', color);
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