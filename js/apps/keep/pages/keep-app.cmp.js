import { notesService } from "../services/note.service.js";
import noteList from "../cmps/note-list.cmp.js";
import keepAdd from "./keep-add.cmp.js";

export default {
    template: `
    <section class="note-app main">
      <keep-add />
      <note-list :notes="renderNotes" @remove="removeNotes"/>
    </section>
  `,
    components: {
        noteList,
        keepAdd,
        
    },
    data() {
        return {
            notes: null,
            filterBy: null,
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
        selectNote(note) {
            this.selectedNote = note;
        },
        saveNote(note) {
            this.notes.push(note);
        },
        filterNote(filterBy) {
            console.log(filterBy)
            this.filterBy = filterBy;
        },
    },
    computed: {
        renderNotes() {
            let notes = this.notes
            if (!this.filterBy) return notes;
        },
    },
};
