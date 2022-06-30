import { notesService } from "../services/note.service.js";


export default {
    template: `
        <section class="note-edit">
            <form @change.prevent="save" class="flex adding-from column">
                <input @click="isClick = !isClick" type="text" v-model="noteToAdd.title" placeholder="what on your mind?">
                <div v-if="isClick" class="flex column">
                <textarea v-model="noteToAdd.det"  rows="4" cols="50" required></textarea>
                <div>     
            <div class="tools flex">
            <button>close</button>
            <input type="color">
            <input type="color">
            <input type="file" @change="onFileChange(note, $event)">
            </div>
                </div>
                </div>
            </form>
        </section>
    `,
    data() {
        return {
            isClick:false,
            noteToAdd:{
                title: null,
                det: null
            }
            
        };
    },
    created() {
    },
    methods: {
        save() {
        let newNote=notesService.getNewNote()
        newNote.info=this.noteTaAdd
         notesService.saveNote(newNote).then(
            console.log('add')

         )
        },
        adit(id) {
            this.$emit('remove', id);
        },
        onFileChange(note, $event){

        }

    
    },
    computed: {
       
   
    }
};