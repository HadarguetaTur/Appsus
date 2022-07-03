import { notesService } from "../services/note.service.js";
import noteList from "../cmps/note-list.cmp.js";



export default {
    template: `
    
    <section class="note-edit flex column">
    <input class="input-keep" @click="isClick=!isClick" type="text" v-bind="this.newNote.info.title" placeholder="what on your mind? ">
    <div class="add-panel" v-if="isClick">   
    <textarea class="input-keep" v-model="this.newNote.info.det" rows="4" cols="79" autofocus
    :placeholder="placeholderTxt" required></textarea>  
    <div class="btns-container-add">
    <button class="add-btn" @click="setKeepType('note-txt')"><i class="far fa-file-alt"></i></button>
    <button class="add-btn" @click="setKeepType('note-todo')"><i class="far fa-list-alt"></i></button>
    <button class="add-btn" @click="setKeepType('note-img')"><i class="far fa-image"></i></button>
    <button class="add-btn" @click="setKeepType('note-video')"><i class="far fa-play-circle"></i></button>
    <button class="add-btn" @click="saveNote">save</button>
    </div>
    </div>
    </section>
    `,

    components: {
        noteList,

    },
    data() {
        return {

            isClick:false,
            placeholderTxt:'',
            newNote: {
                type: [],
                isPinned: false,
                info: {
                    label: '',
                    title: '',
                    det: '',
                    url:'',
                   
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
             if (this.newNote.type === 'note-video'){
                var url = this.newNote.info.det
                var videoCode = url.substring(url.indexOf('?v=')+3)
                this.newNote.info.url='https://www.youtube.com/embed/'+videoCode
             }else if(this.newNote.type === 'note-todo'){
                var todos=this.newNote.info.det
                var newToDo=[]
                todos.split('\n').map((line) =>{
                    newToDo.push({txt:line})
                } )
                this.newNote.info.det=newToDo
             }
             console.log(this.newNote)
            notesService.saveNote(this.newNote)
            this.$emit('save', this.newNote);
        },
        setKeepType(keepType) {
            this.newNote.type = keepType
            if (this.newNote.type === 'note-todo') this.placeholderTxt = 'Enter to-do separated list'
            else if (this.newNote.type === 'note-img') this.placeholderTxt = 'Enter an image Url'
            else if (this.newNote.type === 'note-video') this.placeholderTxt = 'Enter a video Url'
            else if (this.newNote.type === 'note-txt') this.placeholderTxt = 'Enter any text'
            
        },

    },
    mounted() {

    },
    computed: {

    }
};








