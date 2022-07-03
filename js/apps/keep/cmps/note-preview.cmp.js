

export default {
  props: ["note"],
  template:
    `
    <div v-if="note" class="notes-preview" :style="note.style">  
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
  `,
  data() {
    return {
      url: '',
      isColorPicer: false


    };
  },
  methods: {



  },
  computed: {

  },
};