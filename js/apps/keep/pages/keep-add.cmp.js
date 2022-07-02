import { notesService } from "../services/note.service.js";
import noteList from "../cmps/note-list.cmp.js";



export default {
    template: `
    
    <section class="note-edit">
    <input type="text" v-bind="this.newNote.info.title" placeholder="what on your mind? ">   
    <textarea v-model="this.newNote.info.det" rows="4" cols="50" autofocus
    :placeholder="placeholderTxt" required></textarea>  
    <div class="div-canvas ">
    </div>
    <div class="btns-container-add">
    <button class="add-keep-btn txt-keep-btn" @click="setKeepType('note-txt')"><i class="far fa-file-alt"></i></button>
    <button class="add-keep-btn todo-keep-btn" @click="setKeepType('note-todo')"><i class="far fa-list-alt"></i></button>
    <button class="add-keep-btn img-keep-btn" @click="setKeepType('note-img')"><i class="far fa-image"></i></button>
    <button class="add-keep-btn img-keep-btn" @click="setKeepType('note-video')"><i class="far fa-play-circle"></i></button>
    <button class="add-keep-btn img-keep-btn" @click="saveNote">save</button>
    </div>
    </section>
    `,

    components: {
        noteList,

    },
    data() {
        return {
            placeholderTxt: '',
            newNote: {
                type: [],
                isPinned: false,
                info: {
                    label: '',
                    title: '',
                    det: '',
                   
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
            debugger
            if (this.newNote.type === 'note-video') {
                let url=this.newNote.info.det
                const str_href = url.toString()
                console.log(str_href)
                // var video_id = str_href.search.split('v=')[1];
                // var ampersandPosition = video_id.indexOf('&');
                // if (ampersandPosition != -1) {
                //     video_id = video_id.substring(0, ampersandPosition);
                // }
                // this.newNote.info.det = `https://www.youtube.com/embed/${video_id}`
                

            }
            notesService.saveNote(this.newNote)
            this.$emit('save', this.newNote);
        },
        setKeepType(keepType) {
            this.newNote.type = keepType
            if (this.newNote.type === 'note-todo') this.placeholderTxt = 'Enter to-do separated list'
            else if (this.newNote.type === 'note-img') this.placeholderTxt = 'Enter an image Url'
            else if (this.newNote.type === 'note-video') this.placeholderTxt = 'Enter a video Url'
            else if (this.newNote.type === 'note-txt') this.placeholderTxt = 'Enter any text'
            if (this.keep.data) this.saveKeep()
        },

    },
    mounted() {

    },
    computed: {

    }
};








