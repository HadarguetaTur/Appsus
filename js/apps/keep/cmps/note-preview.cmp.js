

export default {
    props: ["note"],
    template: 
    `
    <div class="notes-preview"> 
     
     <h3>label:{{note.info}}</h3> 
      <p>{{this.element}}</p>    
    </div>
  `,
    data() {
      return {
        url:'',
        element: null,
      };
    },
    methods: {

    },
    computed: {


  
    },
  };