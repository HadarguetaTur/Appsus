import { utilService } from "./keep-util-Service.js";
import { storageService } from "./keep-async-storage-service.js";

const NOTES_KEY = 'NOTESDB'

__createNots()

export const notesService = {
    query,
    remove,
    saveNote,
    getNewNote,
    get,
    loadImageFromInput,
    getNewId,
    

};

function query() {
    return storageService.query(NOTES_KEY)
}

function remove(noteId) {
    return storageService.remove(NOTES_KEY, noteId)

}

function get(noteId) {
    return storageService.get(NOTES_KEY, noteId)
}

function saveNote(note) {
    return storageService.post(NOTES_KEY, note)
}

function getNewId() {
    return utilService.makeId()
}

function getNewNote() {
    return {
        id: utilService.makeId(),
        type: '',
        isPinned: false,
        info: {
            label: [],
            title: '',
            det: '',
            url: '',

        },
        style: {
            backgroundColor: ''
        },
    }
}

function __createNots() {
    let notes = utilService.loadFromStorage(NOTES_KEY);
    if (!notes || !notes.length) {
        const notesDb = [
            {
                id: "n101",
                type: "note-txt",
                isPinned: true,
                info: {
                    label: "Get my stuff together",
                    title: "Fullstack Me Baby!",
                    det: '',
                    

                },
                style: {
                    backgroundColor: 'red'
                }
            },
            {
                id: "n102",
                type: "note-img",
                isPinned: false,
                info: {
                    label: "Get my stuff together",
                    title: "Bobi and Me",
                    det:"https://www.photo-art.co.il/wp-content/uploads/2018/09/J75_5568-1.jpg" ,
                    
                },
                style: {
                    backgroundColor: ''
                }
            },
            {
                id: "n103",
                type: "note-todo",
                isPinned: false,
                info: {
                    label: "Get my stuff together",
                    title: "Bobi and Me",
                    det: [
                        { txt: "Driving liscence", doneAt: null },
                        { txt: "Coding power", doneAt: 187111111 }
                    ],
                  
                },
                style: {
                    backgroundColor: ''
                }
            },
            {
                id: "n104",
                type: "note-todo",
                isPinned: false,
                info: {
                    label: "Get my stuff together",
                    title: "Bobi and Me",
                    det: [
                        { txt: "Driving liscence", doneAt: null },
                        { txt: "Coding power", doneAt: 187111111 }
                    ],
        
                },
                style: {
                    backgroundColor: ''
                }
            }
        ];
        utilService.saveToStorage(NOTES_KEY, notesDb)


    }
    return notes;

}

function loadImageFromInput(ev) {
    var reader = new FileReader()
    reader.onload = function (event) {
        var img = new Image()
        img.src = event.target.result

    }
    reader.readAsDataURL(ev.target.files[0])
    console.log(img)
    return img
}


