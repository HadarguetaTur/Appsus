


export default {
  props: ["note"],
  template:
    `
    <div v-if="note" class="notes-preview">  
     <h3>{{note.info.title}}</h3> 
     <h3>{{note.type}}</h3> 
     <h3>{{note.info.label}}</h3> 
     <h3 v-if="note.type==='note-txt'">{{note.info.det}}</h3> 
     <h3 v-if="note.type==='note-todos'">
     <li v-for="todo in 'note.info.det'">
         {{ todo }}
     </li>
     </h3>  
    <img v-if="note.type==='note-img'" :src="note.info.det"  alt="">
    <h3 v-if="note.type==='note-video'" >
    <iframe  src="note.info.det"
     allowfullscreen></iframe>


     
    </div>
  `,
  data() {
    return {
      url: '',
  

    };
  },
  methods: {

  },
  computed: {

  },
};