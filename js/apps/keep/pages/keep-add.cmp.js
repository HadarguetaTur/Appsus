import { notesService } from "../services/note.service.js";
import noteList from "../cmps/note-list.cmp.js";



export default {
    template: `
    <section class="note-edit">
    <input type="text" v-model="this.newNote.info.title" placeholder="what on your mind? "> 
    
    <input type="checkbox" id="todo" value="note-todo" v-model="newNote.type">
    <label for="todo">todo</label>
    <input type="checkbox" id="txt"  value="note-txt" v-model="newNote.type">
    <label for="txt">text</label>
    <input type="checkbox" id="img"  value="note-img" v-model="newNote.type">
    <label for="img">image</label>
    <input type="checkbox" id="video" value="note-video" v-model="newNote.type">
    <label for="img">video</label>
    <br>
    <textarea v-model="this.newNote.info.det" rows="4" cols="50" required></textarea>  
    <button @click="save">save</button>

</section>
    `,
    components: {
        noteList,
    },
    el: '...',
    data() {
        return {
            newNote: {
                type: [],
                isPinned: false,
                info: {
                    label: '',
                    title: '',
                    det: '',
                    url: '',
                },
                style: {
                    backgroundColor: ''
                },
            }




        };
    },
    created() {
    },
    methods: {
        save() {
            notesService.saveNote(this.newNote).then(
                console.log(console.log(this.newNote))
            )



        },






    },
    computed: {


    }
};