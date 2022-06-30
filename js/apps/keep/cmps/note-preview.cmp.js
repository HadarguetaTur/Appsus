


export default {
  props: ["note"],
  template:
    `
    <div  class="notes-preview">  
     <h3>{{note.info.title}}</h3> 
     <h3>{{note.type}}</h3> 
     <h3>{{note.info.label}}</h3> 
     <h3 v-if="note.type!='note-todos'">{{note.info.det}}</h3> 
     <div v-if="note.type==='note-todos'">
         <li v-for="todo in note.type">
               {{todo.txt}}
        </li>

     <h3>{{note.info.url}}</h3>      
    </div>
  `,
  data() {
    return {
      url: '',
      element: null,

    };
  },
  methods: {

  },
  computed: {




  },
};