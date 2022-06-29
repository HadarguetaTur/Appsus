import { utilService } from "./keep-util-Service.js";
import { storageService } from "./keep-async-storage-service.js";

const NOTES_KEY ='NOTESDB'

__createNots()

export const notesService = {
    query,
    remove,
    saveNote,
    getNewNote,
    get,
 

};

function query() {
    return storageService.query(NOTES_KEY)
}

function remove(noteId) {
    return storageService.remove(NOTES_KEY,noteId)
    
}

function get(noteId) {
    return storageService.get(NOTES_KEY, noteId)
}

function saveNote(note) {
     return storageService.post(NOTES_KEY, note)
}

function getNewNote(){
    return {
        id: utilService.makeId(),
        type:'',
        isPinned: false,
        info: {    
     }
}
}

function __createNots(){
    let notes= utilService.loadFromStorage(NOTES_KEY);
    if (!notes || !notes.length) {
        const notesDb = [
            {
             id: "n101",
             type: "note-txt",
             isPinned: true,
             info: {
             txt: "Fullstack Me Baby!"
             }
            },
            {
             id: "n102",
             type: "note-img",
             info: {
             url: "https://ibb.co/rwbyS2q",
             title: "Bobi and Me"
             },
             style: {
             backgroundColor: "#00d"
             }
            },
            {
             id: "n103",
             type: "note-todos",
             info: {
             label: "Get my stuff together",
             todos: [
             { txt: "Driving liscence", doneAt: null },
             { txt: "Coding power", doneAt: 187111111 }
             ]
             }
            }
            ];
         utilService.saveToStorage(NOTES_KEY,notesDb)
        
             
    }
    return notes;

}