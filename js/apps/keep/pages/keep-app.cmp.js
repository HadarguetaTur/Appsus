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
      <note-list :notes="renderNotes" @remove="removeNotes" @copy="copy"/>
      <note-list :notes="renderNotes" @remove="removeNotes" @copy="copy"/>
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
                isPinned:true,
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
        copy(note) {
            this.notes.push(note)
            console.log(this.notes)
        },
        selectNote(note) {
            this.selectedNote = note;
        },
        saveNote(note) {
            this.notes.push(note)

        },
        filterNote(filterBy) {
            console.log(filterBy)
            this.filterBy = filterBy;
        },
    },
    computed: {
        renderNotes() {
            let notes = this.notes
            console.log(notes)
            if (!this.filterBy) return notes;
            if (this.filterBy.txt) {
                let regex = new RegExp(this.filterBy.txt, "i")
                console.log(regex)
                notes = notes.filter((note) => regex.test(note.info.title))
            }
            if (this.filterBy.type) {
                console.log(this.filterBy.type)
                let regexType = new RegExp(this.filterBy.type, "i")
                notes = notes.filter((note) => regexType.test(note.type))
            }
            return this.notes

        },
    },
};
