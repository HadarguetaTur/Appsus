import { storageService } from '../../services/async-storage-service.js';
import { utilService } from '../../services/util-Service.js';

const EMAIL_KEY = 'emails';
_createEmails();

export const mailService = {
    query,
    remove,
    save,
    get,
    getUser,
    createEmail,
    setFilter,
    mailFilterByType
};

function query() {
    return storageService.query(EMAIL_KEY)
}

function remove(mailId) {
    return storageService.remove(EMAIL_KEY, mailId)
}

function get(mailId) {
    return storageService.get(EMAIL_KEY, mailId)
}

function save(mail) {
    console.log("get gives us", get(mail.id))
    if (get(mail.id)) {
        return storageService.put(EMAIL_KEY, mail)
    }
    return storageService.post(EMAIL_KEY, mail)
}

function _createEmails() {
    let mails = utilService.loadFromStorage(EMAIL_KEY);
    if (!mails || !mails.length) {
        mails = [{
            id: utilService.makeId(),
            "subject": "et ultrices posuere cubilia Curae Phasellus ornare. Fusce mollis. Duis",
            "body": "elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
            "isRead": true,
            "isDraft": true,
            "isStared": false,
            "sentAt": "5:59 AM",
            "to": "Shad Huber",
            "from": "integer.urna@outlook.edu",
            "type": "inbox"
        },
        {
            id: utilService.makeId(),
            "subject": "commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit,",
            "body": "in faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue,",
            "isRead": false,
            "isDraft": false,
            "isStared": true,
            "sentAt": "7:34 AM",
            "to": "Ciaran Hobbs",
            "from": "a.dui@google.edu",
            "type": "inbox"
        },
        {
            id: utilService.makeId(),
            "subject": "placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet,",
            "body": "nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris",
            "isRead": true,
            "isDraft": true,
            "isStared": false,
            "sentAt": "6:31 PM",
            "to": "Aspen Mcbride",
            "from": "facilisi.sed.neque@protonmail.org",
            "type": "sent"
        },
        {
            id: utilService.makeId(),
            "subject": "varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem",
            "body": "Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis",
            "isRead": false,
            "isDraft": true,
            "isStared": false,
            "sentAt": "11:15 PM",
            "to": "Abra Allen",
            "from": "vehicula.et@google.org",
            "type": "sent"
        },
        {
            id: utilService.makeId(),
            "subject": "ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend",
            "body": "lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla",
            "isRead": true,
            "isDraft": true,
            "isStared": true,
            "sentAt": "11:08 AM",
            "to": "William Romero",
            "from": "bibendum.ullamcorper.duis@google.ca",
            "type": "null"
        }
        ]
        console.log(mails)
        utilService.saveToStorage(EMAIL_KEY, mails);
    }
    return mails;
}

function createEmail(type = 'inbox', subject = 'demo subject', body = 'demo body', sentAt = Date.now(), to = 'demo@email', from = 'demo name') {
    const email = {
        id: utilService.makeId(),
        subject,
        body,
        isRead: false,
        isDraft: false,
        isStared: false,
        sentAt,
        to,
        from,
        type
    }
    return email;
}
function getUser() {
    return {
        email: 'user@appsus.com',
        fullname: 'Mahatma Appsus'
    }
}


function setFilter(mails, text = '') {
    if (text === '') return
    var sortedMails = mails.filter((mail) =>
        mail.subject.includes(text)
    )
    return sortedMails
}

function mailFilterByType(type) {
    let mails = query().then(res => mails = res)
    console.log(mails);
}

// var filterdMails = mails.filter((mail) =>
//     mail.type.localCompare(type)
// )
// return filterdMails

var gMails = [
    {
        id: utilService.makeId(),
        "subject": "et ultrices posuere cubilia Curae Phasellus ornare. Fusce mollis. Duis",
        "body": "elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
        "isRead": true,
        "isDraft": true,
        "isStared": false,
        "time": "5:59 AM",
        "to": "Shad Huber",
        "from": "integer.urna@outlook.edu",
        "name": "inbox"
    },
    {
        id: utilService.makeId(),
        "subject": "commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit,",
        "body": "in faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue,",
        "isRead": false,
        "isDraft": false,
        "isStared": true,
        "time": "7:34 AM",
        "to": "Ciaran Hobbs",
        "from": "a.dui@google.edu",
        "name": "inbox"
    },
    {
        id: utilService.makeId(),
        "subject": "placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet,",
        "body": "nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris",
        "isRead": true,
        "isDraft": true,
        "isStared": false,
        "time": "6:31 PM",
        "to": "Aspen Mcbride",
        "from": "facilisi.sed.neque@protonmail.org",
        "name": "sent"
    },
    {
        id: utilService.makeId(),
        "subject": "varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem",
        "body": "Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis",
        "isRead": false,
        "isDraft": true,
        "isStared": false,
        "time": "11:15 PM",
        "to": "Abra Allen",
        "from": "vehicula.et@google.org",
        "name": "sent"
    },
    {
        id: utilService.makeId(),
        "subject": "ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend",
        "body": "lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla",
        "isRead": true,
        "isDraft": true,
        "isStared": true,
        "time": "11:08 AM",
        "to": "William Romero",
        "from": "bibendum.ullamcorper.duis@google.ca",
        "name": "null"
    }
]