import { notesService } from "../services/note.service.js";
import noteList from "../cmps/note-list.cmp.js";
import keepAdd from "./keep-add.cmp.js";
import noteDetails from "./note-details.cmp.js";
import notesFilter from "../cmps/note-filter.cmp.js";


export default {
    template: `
    <section class="note-app main">
      <notes-filter @filtered="filterNote" />
      <keep-add @save="saveNote"/>       
      <note-list class="row-pin flex" v-if="this.notes" :notes="this.renderNotes(pin)" @remove="removeNotes" @copy="copy" @bgColor="color"/>
      <note-list v-if="this.notes" :notes="this.renderNotes(notPin)" @remove="removeNotes" @copy="copy" @bgColor="color"/>

    </section>
  `,
    components: {
        noteList,
        keepAdd,
        noteDetails,
        notesFilter,


    },
    data() {
        return {
            notes: null,
            filterBy: {
                txt: null,
                type:null,
            },
            selectedNote: null,
        };
    },
    created() {
        notesService.query().then(notes => this.notes = notes)
    },
    methods: {
        removeNotes(noteId) {
            notesService.remove(noteId)
                .then(() => {
                    const idx = this.notes.findIndex((note) => note.id === noteId)
                    this.notes.splice(idx, 1)
                })

        },
        renderNotes(notes) {
            if (!this.filterBy) return notes;
            if (this.filterBy.txt) {
                let regex = new RegExp(this.filterBy.txt, "i")
                console.log(regex)
                notes = notes.filter((note) => regex.test(note.info.title))
            }
            if (this.filterBy.type) {

                let regexType = new RegExp(this.filterBy.type, "i")
                notes = notes.filter((note) => regexType.test(note.type))
            }
            return notes

        },
        copy(note) {
           let newNote = JSON.parse(JSON.stringify(note));
        this.notes.push(newNote)

        },
        selectNote(note) {
            this.selectedNote = note;
        },
        saveNote(note) {
            let newNote = JSON.parse(JSON.stringify(note));
            this.notes.push(newNote)

        },
        filterNote(filterBy) {
            this.filterBy = filterBy;
        },
        color(){

        }
    },
    computed: {
   
        pin(){
           
            const pinned=this.notes.filter((note)=>note.isPinned)
            return pinned
        },
        notPin(){
           
            const pinned=this.notes.filter((note)=>!note.isPinned)
            return pinned
        }
    },
};
