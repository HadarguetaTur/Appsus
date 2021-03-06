



export default {
  props: ["note"],
  template:
    `
    <div v-if="note" class="notes-preview" :style="this.style.backgroundColor">  
    <h3>{{note.info.title}}</h3> 
    <h3>{{note.type}}</h3> 
    <h3>{{note.info.label}}</h3> 
    <h3 v-if="note.type==='note-txt'">{{note.info.det}}</h3> 
    <ul class="ul-to-do"v-if="note.type==='note-todo'"> 
       <li v-for="todo in note.info.det">
       <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
       <label for="vehicle1"> {{ todo.txt }}</label><br>    
       </li>
    </ul>  
   <img v-if="note.type==='note-img'" :src="note.info.det"  alt="">
   <div v-if="note.type==='note-video'" >
   <iframe  class="video-keep-card"  :src="note.info.url" v-if="note"></iframe>
   </div>
    <div class="btn-card flex " >
    <i @click="note.isPinned=!note.isPinned" title="Pin note" class='fas fa-thumbtack'></i>
    <i @click="dupp(note)" title="Copy note" class='fas fa-copy'></i>
    <i @click="remove(note.id)"  title="Delete note" class='far fa-trash-alt'></i>
    <i @click="isColorPicer=!isColorPicer"title="Change color" class="fas fa-palette"></i> 
    
    <div class="colors" v-if="isColorPicer" >
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
<span class="color-picker-dot" @click="note.style.backgroundColor='white'" 
 title="white" style="background-color:white">
</span>
  


     
    </div>
  `,
  data() {
    return {
      url: '',
      isColorPicer: false,
      style:{
        backgroundColor:""
      }


    };
  },
  methods: {
    changeColor(color){
      debugger
      this.style.backgroundColor=color
    }

  },
  computed: {
    colorPicker() {
      return {
        'background-color': this.bgColor
      }
    },
  },
};