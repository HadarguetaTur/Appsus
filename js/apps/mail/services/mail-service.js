<<<<<<< HEAD
import { storageService } from '../../../services/async-storage-service.js';
import { utilService } from '../../../services/util-Service.js';
=======
import { storageService } from '../../services/async-storage-service.js';
import { utilService } from '../../services/util-Service.js';
>>>>>>> 146f38e89500146e6e54748dbb0da194dd62fd9b

const EMAIL_KEY = 'emails';
_createEmails();

export const mailService = {
    query,
    remove,
    save,
    get,
    getUser,
    createEmail,
    setFilter
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
    return storageService.post(EMAIL_KEY, mail)
}

function _createEmails() {
    let mails = utilService.loadFromStorage(EMAIL_KEY);
    if (!mails || !mails.length) {
        mails = [];
        mails.push(createEmail());
        mails.push(createEmail());
        mails.push(createEmail());
        mails.push(createEmail());
        utilService.saveToStorage(EMAIL_KEY, mails);
    }
    return mails;
}

function createEmail(subject = 'demo subject', body = 'demo body', sentAt = Date.now(), to = 'demo@email', from = 'demo name') {
    const email = {
        id: utilService.makeId(),
        subject,
        body,
        isRead: false,
        sentAt,
        to,
        from
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