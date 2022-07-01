


export default {
  props: ["note"],
  template:
    `
    <div class="notes-preview"> 
 
     <h3>{{note.info.title}}</h3> 
     <h3>{{note.type}}</h3> 
     <h3>{{note.info.label}}</h3> 
     <h3 v-if="note.type!='note-todo'">{{note.info.det}}</h3> 
     <div v-if="note.type==='note-todo'">
         <li v-for="todo in note.info.det">
               {{todo.txt}}
        </li> 

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