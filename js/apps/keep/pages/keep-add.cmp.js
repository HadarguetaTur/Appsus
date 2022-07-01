import { notesService } from "../services/note.service.js";
import noteList from "../cmps/note-list.cmp.js";



export default {
    template: `
    <section class="note-edit">
    <input type="text" v-bind="this.newNote.info.title" placeholder="what on your mind? ">   
    <select v-model="newNote.type" >
    <option value="note-todo">todo</option>
    <option value="note-txt" >text</option>
    <option value="note-img">image</option>
    <option value="note-video">video</option>
    </select>
    <textarea v-model="this.newNote.info.det" rows="4" cols="50" required></textarea>  
    <input type="file"class="file-input btn" name="image" @change="onImgInput($event)">
    <button @click="saveNote">save</button>
    </section>
    `,

    components: {
        noteList,

    },
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

            },

        };
    },
    created() {
    },
    methods: {
        saveNote() {
            notesService.saveNote(this.newNote)
            this.$emit('save',this.newNote );
        },
        onImgInput(ev) {
           notesService.loadImageFromInput(ev)
        }

    },
    mounted() {

    },
    computed: {

    }
};








